import { FC } from 'react'
import { Background, PostHero, Padder, Wrapper, Markdown } from '@/components'
import theme from '@/helpers/style/theme'
import { Post } from '@/helpers/types'
import getFormattedDate from '@/helpers/utils/getFormattedDate'

type PostContainerProps = {
  data: Post
}

const PostContainer: FC<PostContainerProps> = ({data}) => {
  const { title, date, subtitle, thumbnail, content } = data
  return (
    <>
      <PostHero
        supertitle={getFormattedDate(new Date(date))}
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

export default PostContainer