import { Image } from '../../helpers/types'

export type CardProps = {
  image: Image
  title: string
  subtitle?: string
  date: string
  tags: string[]
  category: 'blog' | 'project'
}
