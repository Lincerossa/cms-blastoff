import { ListOfCardsProps } from '@/components/ListOfCards/types'
import fs from 'fs'
import matter from 'gray-matter'
import { PostFile } from '../types'
import getFormattedDate from './getFormattedDate'

type GetCollectionData = (e: { collection: 'blog' | 'project' }) => {
  items: ListOfCardsProps['items']
  category: 'blog' | 'project'
}

const getCollectionData: GetCollectionData = ({ collection }) => {
  const filesInProjects = fs.readdirSync(`./public/posts/${collection}/`)

  return {
    items: filesInProjects.map((fileName) => {
      const { data }: PostFile = matter(
        fs.readFileSync(`./public/posts/${collection}/${fileName}`, 'utf8'),
      )
      return {
        image: {
          alt: '',
          src: data.thumbnail ?? '',
          width: 400,
          height: 500,
        },
        date: `${new Date(data?.date ?? '') ?? ''}`,
        formattedDate: getFormattedDate(new Date(data?.date ?? '')),
        title: data.title ?? '',
        tags: data.tags?.map((tag) => tag?.name) ?? [],
        subtitle: data.subtitle ?? '',
        category: collection,
        slug: `${collection}/${fileName.replace('.md', '')}`,
      }
    }),
    category: collection,
  }
}
export default getCollectionData
