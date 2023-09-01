import wretch from "wretch";

export default async function getExtendedStarships() {
 const res: { starship: { Items: any[]} } = await wretch(`${process.env.NEXT_PUBLIC_EXTENDED_SWAPI_BASE_URL}/starship`)
    .get()
    .json();

  const { starship: { Items: items } } = res;
  return items;
}
