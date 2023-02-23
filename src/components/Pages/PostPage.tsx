import theme from '@/helpers/style/theme'
import { FC } from 'react'
import Background from '../Background'
import Markdown from '../Markdown'
import Padder from '../Padder'
import PostHero from '../PostHero'
import Wrapper from '../Wrapper'
import { PostPageProps } from './types'
import Border from './border.svg'

const PostPage: FC<PostPageProps> = ({
  title,
  tags,
  formattedDate,
  subtitle,
  thumbnail,
  content,
  category,
}) => {
  return (
    <>
      <Background background={theme.colors.dark}>
        <Padder size="large">
          <Wrapper size="large">
            <Padder size="large">
              <PostHero
                date={formattedDate}
                title={title}
                subtitle={subtitle}
                thumbnail={thumbnail}
                category={category}
                tags={tags}
              />
            </Padder>
          </Wrapper>
        </Padder>
      </Background>
      <Background background={theme.colors.darkLight}>
        <Border />
      </Background>
      <Background
        color={theme.colors.light}
        background={theme.colors.darkLight}
      >
        <Wrapper size="large">
          <Padder size="large">
            <Markdown>{content}</Markdown>
          </Padder>
        </Wrapper>
      </Background>
    </>
  )
}

export default PostPage
