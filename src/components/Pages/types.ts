import { ListOfCardsProps } from '../ListOfCards/types'

export type CategoryPageProps = {
  items: ListOfCardsProps['items']
  category: 'blog'
}

export type HomePageProps = {
  items: ListOfCardsProps['items']
}

export type PostPageProps = {
  date: string
  subtitle: string
  title: string
  thumbnail: string
  content: string
  formattedDate: string
  category: 'blog' | 'project'
  tags: string[]
}
