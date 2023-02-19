import { FC } from 'react'
import getCollectionData from '@/helpers/utils/getCollectionData'
import { Post } from '@/helpers/types'
import { CategoryContainer } from '@/containers'

type BlogPageProps = {
  data: Post[]
}
const BlogPage:FC<BlogPageProps> = ({ data }) => {
  return <CategoryContainer category='blog' data={data} />
}
  
export default BlogPage

export async function getStaticProps() {
  return {
    props: {
      data: getCollectionData({ collection:"blog" })
    }
  }
}
