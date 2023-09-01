import wretch from "wretch"

/**
 * Paginates the list of products by page, this is one of the ways of doing pagination
 * when you know the total of products and jumping to X page is fast in your DB.
 */
export default async function getStarships({
  page,
}: {
  page: number
}) {
  const { count: total, results: products }: { count: number, results: Array<{}>} = await wretch(`https://swapi.dev/api/starships?page=${page}`)
    .get()
    .json()
  return { products, total }
}
