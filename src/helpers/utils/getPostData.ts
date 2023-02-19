import fs from 'fs'
import matter from 'gray-matter'
import getFormattedDate from './getFormattedDate'
import { Post } from '../types'

type GetPostData = (e: {collection: 'blog' | 'project', slug: string}) => Post

const getPostData: GetPostData = ({collection, slug}) => {
  const { data, content } = matter(fs.readFileSync(`./public/posts/${collection}/${slug}.md`, 'utf8'))

  return {
    title: data.title ?? '',
    subtitle: data.subtitle ?? '',
    tags: data.tags ?? [],
    thumbnail: data.thumbnail ?? '',
    slug,
    date: getFormattedDate(new Date(data?.date)) ?? '',
    content: content ?? ''
  }
}

export default getPostData