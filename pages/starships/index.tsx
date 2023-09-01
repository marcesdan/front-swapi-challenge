import { GetStaticProps } from 'next'
import { Layout, Page } from '@vercel/examples-ui'
import getProducts from '../../lib/getStarhips'
import { PER_PAGE } from '../starships/[page]'
import PaginationPage from '../../components/PaginationPage'

function Starships({ products, totalProducts, currentPage }: any) {
  return (
    <Page>
      <PaginationPage
        products={products}
        currentPage={currentPage}
        totalProducts={totalProducts}
        perPage={PER_PAGE}
      />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { products, total } = await getProducts({ page: 1 })
  
  return {
    props: {
      products,
      totalProducts: total,
      currentPage: 1,
    },
  }
}

Starships.Layout = Layout

export default Starships
