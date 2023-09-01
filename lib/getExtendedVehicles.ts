import wretch from "wretch";

/**
 * Paginates the list of products by page, this is one of the ways of doing pagination
 * when you know the total of products and jumping to X page is fast in your DB.
 */
export default async function getExtendedVehicles() {
  const res: { vehicle: { Items: any[] } } = await wretch(`${process.env.NEXT_PUBLIC_EXTENDED_SWAPI_BASE_URL}/vehicle`).get().json();
  const { vehicle: { Items: items } } = res;
  return items;
}
