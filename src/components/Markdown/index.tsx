import { FC, PropsWithChildren } from 'react'
import ReactMarkdown from 'react-markdown'
import Image from '../Image'
import Wrapper from '../Wrapper'
import Padder from '../Padder'

const MarkdownComponents: object = {
  p: (paragraph: { children?: boolean; node?: any}) => {
    const { node } = paragraph
  
    if (node.children[0].tagName === "img") {
      const image = node.children[0]
      const metastring = image.properties.alt
      const alt = metastring?.replace(/ *\{[^)]*\} */g, "")
      const metaWidth = metastring.match(/{([^}]+)x/)
      const metaHeight = metastring.match(/x([^}]+)}/)
      const width = metaWidth ? metaWidth[1] : "768"
      const height = metaHeight ? metaHeight[1] : "432"
      return (
        <Padder size='small'>
        <Wrapper>
          <Image image={{src: image.properties.src.replace('/public',''), alt, height, width}} />
        </Wrapper>
        </Padder>
      )
    }
    return <p>{paragraph.children}</p>
  },
}


const Markdown: FC<{children: string}> =  ({ children }) => (
  <ReactMarkdown components={MarkdownComponents}>
    {children}
  </ReactMarkdown>
)

export default Markdown