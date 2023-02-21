import { FC } from 'react'
import getCollectionData from '@/helpers/utils/getCollectionData'
import CategoryPage from '@/components/Pages/CategoryPage'
import { CategoryPageProps } from '@/components/Pages/types'

const Page:FC<{data: CategoryPageProps}> = ({ data }) => {
  return <CategoryPage category={data.category} items={data.items} />
}
  
export default Page

export async function getStaticProps() {
  const data = getCollectionData({ collection: 'blog' })

  return {
    props: {
      data
    }
  }
}
