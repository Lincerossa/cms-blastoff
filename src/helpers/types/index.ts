export type Image = {
  src: string
  alt: string
  description?: string
  width?: number
  height?: number
}
export type Post = {
  title: string
  thumbnail: string
  subtitle:string
  tags?: Array<string>
  slug: string
  date: string
  formattedDate?: string
  category: 'blog' | 'project'
  content: string
}

export type PostFile = {
  data: Partial<Omit<Post, 'slug' | 'tags'>> & {
    tags?: Array<({name: string})>
  }
  content?: string
}