import { Post } from '../types'

type FormatPostData = (e: Partial<Post>) => Post

const formatPostData: FormatPostData = ({title, subtitle, tags, thumbnail, slug, date, content}) => {

  return {
    title: title ?? '',
    subtitle: subtitle ?? '',
    tags: tags ?? [],
    thumbnail: thumbnail ?? '',
    slug: slug ?? '',
    date: `${date ?? ''}`,
    content: content ?? ''
  }
}

export default formatPostData