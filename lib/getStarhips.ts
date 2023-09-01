import wretch from "wretch";

export default async function getStarships({ page }: { page: number }) {
  const {
    count: total,
    results: items,
  }: { count: number; results: Array<{}> } = await wretch(
    `https://swapi.dev/api/starships?page=${page}`,
    { mode: "cors" }
  )
    .get()
    .json();
  return { items, total };
}
