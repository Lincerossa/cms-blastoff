import fs from 'fs'
import matter from 'gray-matter'
import { Post, PostFile } from '../types'
import formatFile from './formatFile'

type GetPostData = (e: {collection: 'blog' | 'project', slug: string}) => Post

const getPostData: GetPostData = ({collection, slug}) => {
  const { data, content }: PostFile = matter(fs.readFileSync(`./public/posts/${collection}/${slug}.md`, 'utf8'))
  return formatFile({
    ...data,
    content,
    slug
  })
}

export default getPostData