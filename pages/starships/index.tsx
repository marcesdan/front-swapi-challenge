import { GetStaticProps } from 'next'
import { Page } from '@vercel/examples-ui'
import getStarships from '../../lib/getStarhips'
import { PER_PAGE } from '../starships/[page]'
import PaginationPage from '../../components/PaginationPage'

function Starships({ items, totalItems, currentPage }: any) {
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
  const { items, total } = await getStarships({ page: 1 })
  
  return {
    props: {
      items,
      totalItems: total,
      currentPage: 1,
    },
  }
}

export default Starships
