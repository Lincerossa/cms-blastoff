import { FC } from 'react'
import getCollectionData from '@/helpers/utils/getCollectionData'

import HomePage from '@/components/Pages/HomePage'
import {HomePageProps} from '@/components/Pages/types'
import getFormattedDate from '@/helpers/utils/getFormattedDate'

const Page:FC<{data:HomePageProps }> = ({ data }) => {
  return <HomePage {...data } />
}
  
export default Page

export async function getStaticProps() {

  const data = getCollectionData({collection: 'blog'})

  return {
    props: {
      data: {
        items: data.map(({thumbnail, date, title, tags, subtitle, slug}) => ({
          image: {
            alt: '',
            src: thumbnail ?? '',
            width: 400,
            height: 500,
          },
          date: getFormattedDate(new Date(date)) ?? '',
          title,
          tags: tags?.map(tag => tag?.name) ?? [],
          subtitle,
          slug: `blog/${slug.replace('.md', '')}`
        }))
      }
    }
  }
}
