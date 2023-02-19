import { FC } from 'react'
import { Background, PostHero, Padder, Wrapper, Markdown } from '@/components'
import theme from '@/helpers/style/theme'
import { Post } from '@/helpers/types'

type BlogContainerProps = {
  data: Post
}

const BlogContainer: FC<BlogContainerProps> = ({data}) => {
  const { title, date, subtitle, thumbnail, content } = data
  return (
    <>
      <PostHero
        supertitle={date}
        title={title}
        subtitle={subtitle}
        media={{url: thumbnail.replace('/public','')}}
      />
      <Background color='white' background={theme.colors.thirdary}>
        <Wrapper size='large'>
          <Padder size='large'>
            <Markdown>
              {content}
            </Markdown>
          </Padder>
        </Wrapper>
      </Background>
    </>
  )
}

export default BlogContainer