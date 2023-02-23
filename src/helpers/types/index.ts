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
  subtitle: string
  tags?: Array<string>
  slug: string
  date: string
  formattedDate?: string
  category: Category
  content: string
}

export type PostFile = {
  data: Partial<Omit<Post, 'slug' | 'tags'>> & {
    tags?: Array<{ name: string }>
  }
  content?: string
}
export type SettingsProps = {
  SEO: {
    title: string
    description: string
    image: string
  }
  ROUTES: Array<{
    hidden: boolean
    slug: string
    href: string
    label: string
    category?: Category
  }>
  DATA: {
    HOME: {
      intro: string
    }
  }
}

export type Category = 'blog' | 'project'
