import wretch from "wretch"

export default async function getVehicles({
  page,
}: {
  page: number
}) {
  const { count: total, results: items }: { count: number, results: Array<{}>} = await wretch(`https://swapi.dev/api/vehicles?page=${page}`)
    .get()
    .json()
  return { items, total }
}
