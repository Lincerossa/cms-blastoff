import fs from 'fs'
import matter from 'gray-matter'
import { Post } from '../types'

type GetCollectionData = (e: {collection: 'blog' | 'project'}) => Array<Post>

const getCollectionData: GetCollectionData = ({collection}) => {
  const filesInProjects = fs.readdirSync(`./public/posts/${collection}/`)
  return filesInProjects.map(fileName => {
    const { data, content } = matter(fs.readFileSync(`./public/posts/${collection}/${fileName}`, 'utf8'))
    return {
      title: data.title ?? '',
      subtitle: data.subtitle ?? '',
      tags: data.tags ?? [],
      thumbnail: data.thumbnail ?? '',
      slug: fileName.replace('.md', ''),
      date: `${new Date(data?.date) ?? ''}`,
      content: content ?? ''
    }
  })
}
export default getCollectionData