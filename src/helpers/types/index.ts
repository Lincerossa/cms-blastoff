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
  tags?: Array<{name: string}>
  slug: string,
  date: string,
  content: string
}