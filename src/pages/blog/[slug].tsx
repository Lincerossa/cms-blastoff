import { FC } from 'react'
import fs from 'fs'
import { Background, PostHero, Padder, Wrapper, Markdown } from '@/components'
import theme from '@/helpers/style/theme'
import getPostData from '@/helpers/utils/getPostData'
import { Post } from '@/helpers/types'

type BlogProps = {
  data: Post
}

const BlogPage:FC<BlogProps> = ({ data }) => {
  const { title, date, subtitle, thumbnail, content } = data 

  return (
    <>
      <PostHero
        supertitle={date}
        title={title}
        subtitle={subtitle}
        media={{url:thumbnail}}
      />
      <Background color='white' background={theme.colors.thirdary}>
        <Wrapper>
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
export default BlogPage

export async function getStaticProps({ params: { slug } }: {params: {slug: string}}) {
  return {
    props: {
      data: getPostData({collection: 'blog', slug})
    }
  }
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./public/posts/blog/')

  const paths = filesInProjects.map(file => {
    const filename = file.slice(0, file.indexOf('.'))
    return { params: { slug: filename }}
  })

  return {
    paths,
    fallback: false
  }
}