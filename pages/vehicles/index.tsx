import { GetStaticProps } from 'next'
import { Page } from '@vercel/examples-ui'
import getVehicles from '../../lib/getVehicles'
import { PER_PAGE } from '../vehicles/[page]'
import PaginationPage from '../../components/PaginationPage'

function Vehicles({ items, totalItems, currentPage }: any) {
  return (
    <Page>
      <PaginationPage
        items={items}
        currentPage={currentPage}
        totalItems={totalItems}
        perPage={PER_PAGE}
      />
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { items, total } = await getVehicles({ page: 1 })

  return {
    props: {
      items,
      totalItems: total,
      currentPage: 1,
    },
  }
}

export default Vehicles
