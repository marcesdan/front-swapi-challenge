import { useEffect, useState } from "react";
import getExtendedStarships from "../lib/getExtendedStarships";
import getExtendedVehicles from "../lib/getExtendedVehicles";
import mergeItemsFromSwapiWithExtendedApi from '../utils/mergeItemsFromSwapiWithExtendedApi'

export default function useExtendedItems(items, base) {
  const [isClient, setIsClient] = useState(false);
  const [extendedPart, setExtendedPart] = useState(null);
  const [result, setResult] = useState(null)
  useEffect(() => {
    setIsClient(true);
  }, []);
  useEffect(() => {
    async function fetchExtendedItems() {
      setExtendedPart(await {
        'vehicles': getExtendedVehicles,
        'starships': getExtendedStarships,
      }[base]());
    }
    if (isClient && !extendedPart) {
      console.log('fetching')
      fetchExtendedItems();
    } else if (extendedPart) {
      console.log('setting result', {extendedPart})
      setResult(mergeItemsFromSwapiWithExtendedApi(items, extendedPart))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClient, items, extendedPart]);
  console.log('the result issss....', {result})
  return result || items
}
