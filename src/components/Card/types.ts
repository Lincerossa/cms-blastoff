import { Category, Image } from '../../helpers/types'

export type CardProps = {
  image: Image
  title: string
  subtitle?: string
  date: string
  formattedDate: string
  tags: string[]
  category: Category
}
