import { FC} from 'react'
import { ListOfCards, Background, Padder, Wrapper } from '@/components'
import theme from '@/helpers/style/theme'
import getCollectionData from '@/helpers/utils/getCollectionData'
import { Post } from '@/helpers/types'

type HomePageProps = {
  data: Post[]
}
const HomePage:FC<HomePageProps> = ({ data }) => {
  const items = data.map(({thumbnail, date, title, tags, subtitle, slug}) => ({
    image: {
      alt: '',
      src: thumbnail,
      width: 400,
      height: 500,
    },
    supertitle: date,
    title,
    tags: tags?.map(tag => tag?.name) ?? [],
    subtitle,
    slug: `blog/${slug.replace('.md', '')}`
  }))

  return (
    <Background background={theme.colors.thirdary}>
      <Wrapper size="large">
        <Padder size="large">
          <h1>Posts</h1>
          <ListOfCards items={items} />
          </Padder>
      </Wrapper>
    </Background>
  )
}
export default HomePage

export async function getStaticProps() {
  return {
    props: {
      data: getCollectionData({collection:"blog"})
    }
  }
}
