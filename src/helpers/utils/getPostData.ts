import fs from 'fs'
import matter from 'gray-matter'
import { Post, PostFile } from '../types'
import formatFile from './formatFile'
import getFormattedDate from './getFormattedDate'

type GetPostData = (e: {collection: 'blog' | 'project', slug: string}) => Post

const getPostData: GetPostData = ({collection, slug}) => {
  const { data, content }: PostFile = matter(fs.readFileSync(`./public/posts/${collection}/${slug}.md`, 'utf8'))
  const formattedFile = formatFile({
    ...data,
    content,
    slug
  })
  return {
    ...formattedFile,
    formattedDate: getFormattedDate(new Date(formattedFile.date))
  }
}

export default getPostData
