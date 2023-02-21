import theme from "@/helpers/style/theme"
import { FC } from "react"
import Background from "../Background"
import Markdown from "../Markdown"
import Padder from "../Padder"
import PostHero from "../PostHero"
import Wrapper from "../Wrapper"
import { PostPageProps } from "./types"
import Border from './border.svg'
const PostPage: FC<PostPageProps> = ({ title, formattedDate, subtitle, thumbnail, content, }) => {
  return (
    <>
      <Background color='white' background={theme.colors.dark}>
        <Padder size="large">
            <Wrapper size='large'>
              <Padder size='large'>
                <PostHero
                  supertitle={formattedDate}
                  title={title}
                  subtitle={subtitle}
                  thumbnail={thumbnail}
                />
              </Padder>
            </Wrapper>
          </Padder>
      </Background>
      <Background color='white' background={theme.colors.darkLight}>
        <Border />
      </Background>
      <Background color='white' background={theme.colors.darkLight}>
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

export default PostPage