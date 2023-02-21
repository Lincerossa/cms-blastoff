import { FC } from 'react'
import getCollectionData from '@/helpers/utils/getCollectionData'
import getFormattedDate from '@/helpers/utils/getFormattedDate'
import CategoryPage from '@/components/Pages/CategoryPage'
import { CategoryPageProps } from '@/components/Pages/types'


const Page:FC<{data: CategoryPageProps}> = ({ data }) => {
  return <CategoryPage category={data.category} items={data.items} />
}
  
export default Page

export async function getStaticProps() {
  const category = 'blog'
  const data = getCollectionData({ collection: category })

  const items = data.map(({thumbnail, date, title, tags, subtitle, slug}) => ({
    image: {
      alt: '',
      src: thumbnail,
      width: 400,
      height: 500,
    },
    date: getFormattedDate(new Date(date)),
    title,
    tags: tags?.map(tag => tag?.name) ?? [],
    subtitle,
    slug: `${category}/${slug.replace('.md', '')}`
  }))

  return {
    props: {
      data: {
        items,
        category
      }
    }
  }
}
