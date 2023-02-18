import { Image } from '../../helpers/types'

export type CardProps = {
  image: Image
  supertitle: string
  title: string
  tags: string[]
  subtitle: string
  layout?: 'auto'
}
