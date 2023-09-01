# Front-End for the SWAPI code challenge

The solution proxy requests to SWAPI and extend the results with the quantity of units for starships and vehicles

This example use a page based pagination with [SSG](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) in Next.js.

## Demo

Check out the live demo here: <https://front-swapi-challenge.vercel.app/>

## How it works

The first 2 paginated pages are cached in the edge at build time, and the rest are incrementally cached using [ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration), that way we can avoid increasing build times no matter how many pages we have while still keeping essential pages cached from the
start.

The example showcases the starships and vehicles from <https://swapi.dev/>

- There are 36 starships and 39 vehicles
- Each page displays 10 results, resulting in a total of 4 pages. Two of these pages are pre-generated using `getStaticPaths`.

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

- The data from SWAPI is then merged with the extended part at the client-side, as demonstrated in `/hooks/useExtendedItems.js`.
- The results are also ordered by the quantity of units.

## How to Use

If you'd like to set up an end-to-end demo on your local environment, follow these steps:

1. Clone the serverless repository from <https://github.com/marcesdan/serverless-swapi-challenge>.
2. Follow the instructions in that repository to run it locally.
3. Once you've completed these steps, you can run Next.js in development mode using the following command:

```bash
cp .env.example .env.local
npm run dev
```
