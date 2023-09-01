import wretch from "wretch";

export default async function setStarhipsUnits(id: string, units: number) {
  wretch(`${process.env.NEXT_PUBLIC_EXTENDED_SWAPI_BASE_URL}/starship/${id}`).put({
    units,
  });
}
