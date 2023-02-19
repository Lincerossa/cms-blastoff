import { FC } from 'react'
import fs from 'fs'
import getPostData from '@/helpers/utils/getPostData'
import { Post } from '@/helpers/types'
import { BlogContainer } from '@/containers'

type BlogPageProps = {
  data: Post
}

const BlogPage:FC<BlogPageProps> = ({ data }) => {
  return <BlogContainer data={data} />
}

export default BlogPage

export async function getStaticProps({ params: { slug } }: {params: {slug: string}}) {
  return {
    props: {
      data: getPostData({ collection: 'blog', slug })
    }
  }
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./public/posts/blog/')

  const paths = filesInProjects.map(fileName => {
    return { params: { slug: fileName.replace('.md', '') }}
  })

  return {
    paths,
    fallback: false
  }
}