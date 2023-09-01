import getIdFromUrl from "./getIdFromUrl";

const mergeItemsFromSwapiWithExtendedApi = (items, extendedItems) =>
  // TODO: normalize data structures
  items.reduce((accumulator, { url, ...rest }) => {
    const units =
      extendedItems.find(({ pk }) => pk === getIdFromUrl(url))?.units || 0;
    accumulator.push({ ...rest, units });
    return accumulator;
  }, []);

export default mergeItemsFromSwapiWithExtendedApi;
