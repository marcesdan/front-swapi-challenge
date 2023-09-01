import wretch from "wretch";

/**
 * Paginates the list of products by page, this is one of the ways of doing pagination
 * when you know the total of products and jumping to X page is fast in your DB.
 */
export default async function getExtendedStarships() {
 const res: { starship: { Items: any[]} } = await wretch(`${process.env.NEXT_PUBLIC_EXTENDED_SWAPI_BASE_URL}/starship`)
    .get()
    .json();

  const { starship: { Items: items } } = res;
  return items;
}
