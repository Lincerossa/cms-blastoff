import { Post } from '../types'

type FormatFile = (e: Partial<Post>) => Post

const formatFile: FormatFile = ({title, subtitle, tags, thumbnail, slug, date, content}) => {
  return {
    title: title ?? '',
    subtitle: subtitle ?? '-',
    tags: tags ?? [],
    thumbnail: thumbnail?.replace('/public','') ?? '',
    slug: slug ?? '',
    date: `${date ?? ''}`,
    content: content ?? ''
  }
}

export default formatFile