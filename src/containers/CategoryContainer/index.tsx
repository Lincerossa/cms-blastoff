import { FC } from 'react'
import { Post } from '@/helpers/types'
import { ListOfCards, Background, Padder, Wrapper, MainLabel, RichText } from '@/components'
import theme from '@/helpers/style/theme'
import { DATA } from '@/helpers/const'

type CategoryContainerProps = {
  data: Post[]
  category: 'blog'
}

const CategoryContainer: FC<CategoryContainerProps> = ({data, category}) => {
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
    slug: `${category}/${slug.replace('.md', '')}`
  }))

  return (
    <>
      <MainLabel text={category.toUpperCase()} />
      <Background background={theme.colors.thirdary}>
        <Wrapper size="large">
          <Padder size="large">
            <RichText><h1>{category.toUpperCase()}</h1></RichText>
            <ListOfCards items={items} />
          </Padder>
        </Wrapper>
      </Background>
    </>
  )
}


export default CategoryContainer