import { CardProps } from '../Card/types'

export type ListOfCardsProps = {
  itemsPerPage?: number
  items: Array<CardProps & {slug: string}>
}
