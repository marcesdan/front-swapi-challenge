# Front-End for the SWAPI code challenge

The solution proxy requests to SWAPI and extend the results with the amount of units for starships and vehicles

This example use a page based pagination with [SSG](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) in Next.js.

## Demo

<https://front-swapi-challenge.vercel.app/>

## How it works

The first 2 paginated pages are cached in the edge at build time, and the rest are incrementally cached using [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration), that way we can avoid increasing build times no matter how many pages we have while still keeping essential pages cached from the
start.

The example showcases the starships and vehicles from <https://swapi.dev/>

- There are 36 starships and 39 vehicles
- There are 10 results per page for a total of 4 pages, where 2 are pre-generated with `getStaticPaths`

```ts
// pages/starships/[page].tsx

export const getStaticPaths = async () => {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: 2 }).map((_, i) => `/starships/${i + 2}`),
    // Block the request for non-generated pages and cache them in the background
    fallback: 'blocking',
  }
}
```

- Then the data from SWAPI is merged with the extended part at client time as you can see at `/hooks/useExtendedItems.js`
- And order by the amount of units

## How to Use

Run Next.js in development mode:

```bash
npm run dev
```
