import { CardProps } from '../Card/types'

export type ListOfCardsProps = {
  itemsPerPage?: number
  showFilters?: boolean
  items: Array<CardProps & { slug: string }>
}

export type SelectedCategory = 'blog' | 'project' | undefined

export type UseListPagination = (params: {
  items: ListOfCardsProps['items']
  itemsPerPage: number
}) => {
  pageCount: number
  selectedPage: number
  currentItems: ListOfCardsProps['items']
  selectedCategory: SelectedCategory
  handlePageClick: (params: { selected: number }) => void
  handleCategoryClick: (params: SelectedCategory) => void
}
