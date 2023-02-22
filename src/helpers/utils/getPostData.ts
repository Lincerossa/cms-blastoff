import fs from 'fs'
import matter from 'gray-matter'
import { Post, PostFile } from '../types'
import getFormattedDate from './getFormattedDate'

type GetPostData = (e: {collection: 'blog' | 'project', slug: string}) => Post

const getPostData: GetPostData = ({collection, slug}) => {
  const { data, content }: PostFile = matter(fs.readFileSync(`./public/posts/${collection}/${slug}.md`, 'utf8'))

  return {
    title: data.title ?? '',
    subtitle: data.subtitle ?? '-',
    content: content ?? '',
    tags: data.tags?.map(e => e?.name ?? '') ?? [],
    slug: slug ?? '',
    thumbnail: data.thumbnail?.replace('/public','') ?? '',
    date: `${new Date(data?.date ?? '') ?? ''}`,
    formattedDate: getFormattedDate(new Date(data?.date ?? '')),
    category: collection
  }
}

export default getPostData
