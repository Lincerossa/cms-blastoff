import { FC } from 'react'
import { Post } from '@/helpers/types'
import { ListOfCards, Background, Padder, Wrapper, MainLabel } from '@/components'
import theme from '@/helpers/style/theme'
import getFormattedDate from '@/helpers/utils/getFormattedDate'

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
    supertitle: getFormattedDate(new Date(date)),
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
            <ListOfCards items={items} />
          </Padder>
        </Wrapper>
      </Background>
    </>
  )
}


export default CategoryContainer