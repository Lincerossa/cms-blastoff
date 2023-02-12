import { FC} from 'react'
import fs from 'fs'
import ReactMarkdown from 'react-markdown'
import matter from 'gray-matter'

type BlogProps = {
  frontmatter: {
    layout: string
    title: string
    date: string
    thumbnail: string
    tags: string[]
  }
  markdown: string
}
const Blog:FC<BlogProps> = ({ frontmatter, markdown}) => {
  const {title, date, tags } = frontmatter
  return (
    <div>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <ol>{tags.map(tag => <li key={tag}>{tag}</li>)}</ol>
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
export default Blog

export async function getStaticProps({ params: { slug } }: {params: {slug: string}}) {
  const { data, content } = matter(fs.readFileSync(`./public/posts/blog/${slug}.md`, 'utf8'))

  return {
    props: { frontmatter: {...data, date: `${data.date}`}, markdown: content }
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