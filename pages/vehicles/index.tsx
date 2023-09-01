import { GetStaticProps } from 'next'
import { Layout, Page } from '@vercel/examples-ui'
import getProducts from '../../lib/getVehicles'
import { PER_PAGE } from '../vehicles/[page]'
import PaginationPage from '../../components/PaginationPage'

function Vehicles({ products, totalProducts, currentPage }: any) {
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

Vehicles.Layout = Layout

export default Vehicles
