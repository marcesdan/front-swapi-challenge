import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import React from 'react'
import getStarships from '../../lib/getStarhips'
import { Page } from '@vercel/examples-ui'
import Head from 'next/head'
import PaginationPage from '../../components/PaginationPage'

type PageProps = {
  items: any[]
  currentPage: number
  totalItems: number
}

export const PER_PAGE = 10

function PaginatedPage({ items, currentPage, totalItems }: PageProps) {
  return (
    <Page>
      <Head>
        <title>Page {currentPage} - SSG Pagination Example</title>
        <meta
          name="description"
          content={`Statically generated page ${currentPage}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PaginationPage
        items={items}
        currentPage={currentPage}
        totalItems={totalItems}
        perPage={PER_PAGE}
      />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext) => {
  const page = Number(params?.page) || 1
  const { items, total } = await getStarships({ page })

  if (!items.length) {
    return {
      notFound: true,
    }
  }

  // Redirect the first page to `/starships` to avoid duplicated content
  if (page === 1) {
    return {
      redirect: {
        destination: '/starships',
        permanent: false,
      },
    }
  }

  return {
    props: {
      items,
      totalItems: total,
      currentPage: page,
    },
    revalidate: 60 * 60 * 24, // <--- ISR cache: once a day
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    // Prerender the next 5 pages after the first page, which is handled by the index page.
    // Other pages will be prerendered at runtime.
    paths: Array.from({ length: 2 }).map((_, i) => `/starships/${i + 2}`),
    // Block the request for non-generated pages and cache them in the background
    fallback: 'blocking',
  }
}

export default PaginatedPage
