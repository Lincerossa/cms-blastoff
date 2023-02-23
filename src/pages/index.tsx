import { FC } from 'react'
import getCollectionData from '@/helpers/utils/getCollectionData'

import HomePage from '@/components/Pages/HomePage'
import { HomePageProps } from '@/components/Pages/types'

const Page: FC<{ data: HomePageProps }> = ({ data }) => {
  return <HomePage {...data} />
}

export default Page

export async function getStaticProps() {
  const data = {
    items: [
      ...getCollectionData({ collection: 'blog' }).items,
      ...getCollectionData({ collection: 'project' }).items,
    ],
  }

  return {
    props: {
      data,
    },
  }
}
