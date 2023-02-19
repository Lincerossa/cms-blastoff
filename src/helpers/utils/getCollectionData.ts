import fs from 'fs'
import matter from 'gray-matter'
import getFormattedDate from './getFormattedDate'

type GetCollectionData = (e: {collection: 'blog' | 'project'}) => Array<{
  title: string
  thumbnail: string
  subtitle:string
  tags?: Array<{name: string}>
  slug: string,
  date: string,
  content: string
}>

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
      date: getFormattedDate(new Date(data?.date)) ?? '',
      content: content ?? ''
    }
  })
}
export default getCollectionData