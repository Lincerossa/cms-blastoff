import { ListOfCardsProps } from '@/components/ListOfCards/types'
import fs from 'fs'
import matter from 'gray-matter'
import { PostFile } from '../types'
import formatFile from './formatFile'
import getFormattedDate from './getFormattedDate'

type GetCollectionData = (e: {collection: 'blog' | 'project'}) => {
  items: ListOfCardsProps['items']
  category: 'blog' | 'project'
}

const getCollectionData: GetCollectionData = ({collection}) => {
  const filesInProjects = fs.readdirSync(`./public/posts/${collection}/`)
  const data = filesInProjects.map(fileName => {
    const { data, content }: PostFile = matter(fs.readFileSync(`./public/posts/${collection}/${fileName}`, 'utf8'))
    return formatFile({
      ...data,
      content,
      slug: fileName.replace('.md', '')
    })
  })

  const items = data.map(({thumbnail, date, title, tags, subtitle, slug }) => ({
    image: {
      alt: '',
      src: thumbnail,
      width: 400,
      height: 500,
    },
    date: getFormattedDate(new Date(date)),
    title,
    tags: tags?.map(tag => tag?.name) ?? [],
    subtitle,
    category: collection,
    slug: `${collection}/${slug.replace('.md', '')}`
  }))

  return {
    items,
    category: collection
  }
}
export default getCollectionData