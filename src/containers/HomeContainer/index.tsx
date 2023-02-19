import { FC } from 'react'
import { Post } from '@/helpers/types'
import { ListOfCards, Background, Padder, Wrapper, MainLabel, RichText } from '@/components'
import theme from '@/helpers/style/theme'
import { DATA } from '@/helpers/const'

type HomeContainerProps = {
  data: Post[]
}

const HomeContainer: FC<HomeContainerProps> = ({data}) => {
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
    <>
      <MainLabel text="cms-bastoff" />
      <Background background={theme.colors.thirdary} color='white'>
        <Wrapper size="large">
          <Padder size="large">
            <RichText>
              <h1>Intro</h1>
              <p>{DATA.intro}</p>
            </RichText>
          </Padder>
        </Wrapper>
      </Background>
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


export default HomeContainer