import fs from 'fs'
import matter from 'gray-matter'
import { Post, PostFile } from '../types'
import formatPostData from './formatPostData'

type GetCollectionData = (e: {collection: 'blog' | 'project'}) => Array<Post>

const getCollectionData: GetCollectionData = ({collection}) => {
  const filesInProjects = fs.readdirSync(`./public/posts/${collection}/`)
  return filesInProjects.map(fileName => {
    const { data, content }: PostFile = matter(fs.readFileSync(`./public/posts/${collection}/${fileName}`, 'utf8'))
    return formatPostData({
      ...data,
      content,
      slug: fileName.replace('.md', '')
    })
  })
}
export default getCollectionData