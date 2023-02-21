import theme from "@/helpers/style/theme"
import { FC } from "react"
import Background from "../Background"
import Markdown from "../Markdown"
import Padder from "../Padder"
import PostHero from "../PostHero"
import Wrapper from "../Wrapper"
import { PostPageProps } from "./types"

const PostPage: FC<PostPageProps> = ({ title, formattedDate, subtitle, thumbnail, content, }) => {
  return (
    <>
      <PostHero
        supertitle={formattedDate}
        title={title}
        subtitle={subtitle}
        thumbnail={thumbnail}
      />
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