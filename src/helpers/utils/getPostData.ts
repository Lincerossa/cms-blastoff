import fs from 'fs'
import matter from 'gray-matter'
import getFormattedDate from './getFormattedDate'

type GetPostData = (e: {collection: 'blog' | 'project', slug: string}) => {
  title: string
  thumbnail: string
  subtitle:string
  tags?: Array<{name: string}>
  slug: string,
  date: string,
  content: string
}

const getPostData: GetPostData = ({collection, slug}) => {
  const { data, content } = matter(fs.readFileSync(`./public/posts/${collection}/${slug}.md`, 'utf8'))

  return {
    title: data.title,
    subtitle: data.subtitle,
    tags: data?.tags,
    thumbnail: data.thumbnail,
    slug,
    date: getFormattedDate(new Date(data.date)),
    content
  }
}

export default getPostData