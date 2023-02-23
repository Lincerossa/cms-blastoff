import { FC, PropsWithChildren } from 'react'
import ReactMarkdown from 'react-markdown'
import Image from '../Image'
import Wrapper from '../Wrapper'
import Padder from '../Padder'
import * as S from './styles'

const MarkdownComponents: object = {
  p: (paragraph: { children?: boolean; node?: any }) => {
    const { node } = paragraph

    if (node.children[0].tagName === 'img') {
      const image = node.children[0]
      const metastring = image.properties.alt
      const alt = metastring?.replace(/ *\{[^)]*\} */g, '')
      const metaWidth = metastring.match(/{([^}]+)x/)
      const metaHeight = metastring.match(/x([^}]+)}/)
      const width = metaWidth ? metaWidth[1] : '768'
      const height = metaHeight ? metaHeight[1] : '432'
      return (
        <Wrapper hasPadding={false}>
          <Padder size="small">
            <S.ImageWrapper>
              <Image
                image={{ src: image.properties.src, alt, height, width }}
              />
            </S.ImageWrapper>
          </Padder>
        </Wrapper>
      )
    }
    return <p>{paragraph.children}</p>
  },
}

const Markdown: FC<{ children: string }> = ({ children }) => (
  <ReactMarkdown components={MarkdownComponents}>{children}</ReactMarkdown>
)

export default Markdown
