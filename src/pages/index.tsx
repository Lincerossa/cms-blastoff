import { FC } from 'react'
import getCollectionData from '@/helpers/utils/getCollectionData'
import { Post } from '@/helpers/types'
import { HomeContainer } from '@/containers'

type HomePageProps = {
  data: Post[]
}
const HomePage:FC<HomePageProps> = ({ data }) => {
  return <HomeContainer data={data} />
}
  
export default HomePage

export async function getStaticProps() {
  return {
    props: {
      data: getCollectionData({collection:"blog"})
    }
  }
}
