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
    rating: number
  }
  markdown: string
}
const Blog:FC<BlogProps> = ({ frontmatter, markdown}) => {
  const {title, date, rating } = frontmatter
  return (
    <div>
      <h1>{title}</h1>
      <h3>{date}</h3>
      <p>{rating}</p>
      <ReactMarkdown>
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export async function getStaticProps({ params: { slug } }: {params: {slug: string}}) {
  const fileContent = matter(fs.readFileSync(`./public/posts/blog/${slug}.md`, 'utf8'))

  const {date, ...frontmatter} = fileContent.data
  const markdown = fileContent.content

  return {
    props: { frontmatter: {...frontmatter, date: `${date}`}, markdown }
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