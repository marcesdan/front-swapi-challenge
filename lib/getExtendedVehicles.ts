import wretch from "wretch";

export default async function getExtendedVehicles() {
  const res: { vehicle: { Items: any[] } } = await wretch(
    `${process.env.NEXT_PUBLIC_EXTENDED_SWAPI_BASE_URL}/vehicle`,
    { mode: "cors" }
  )
    .get()
    .json();
  const {
    vehicle: { Items: items },
  } = res;
  return items;
}
