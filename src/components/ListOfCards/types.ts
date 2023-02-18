import { CardProps } from '../Card/types'

export type ListOfCardsProps = {
  items: Array<CardProps & {slug: string}>
}
