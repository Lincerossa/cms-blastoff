import { FC } from 'react'
import fs from 'fs'

import matter from 'gray-matter'
import { Background, PostHero, Padder, Wrapper, Markdown } from '@/components'
import getFormattedDate from '@/helpers/utils/getFormattedDate'
import theme from '@/helpers/style/theme'

type BlogProps = {
  frontmatter: {
    title: string
    subtitle: string
    date: string
    thumbnail: string
    tags: string[]
  }
  markdown: string
}


const BlogPage:FC<BlogProps> = ({ frontmatter, markdown}) => {
  const {title, date, subtitle, tags, thumbnail } = frontmatter
  return (
    <>
      <PostHero
        supertitle={date}
        title={title}
        subtitle={subtitle}
        media={{url:`${thumbnail.replace('/public','')}`}}
      />
      <Background color='white' background={theme.colors.thirdary}>
        <Wrapper>
          <Padder size='large'>
            <Markdown>
              {markdown}
            </Markdown>
          </Padder>
        </Wrapper>
      </Background>
    </>
  )
}
export default BlogPage

export async function getStaticProps({ params: { slug } }: {params: {slug: string}}) {
  const { data, content } = matter(fs.readFileSync(`./public/posts/blog/${slug}.md`, 'utf8'))



  return {
    props: { frontmatter: {...data, date: getFormattedDate(new Date(data.date))}, markdown: content }
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