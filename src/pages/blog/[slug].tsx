import { FC } from 'react'
import fs from 'fs'
import getPostData from '@/helpers/utils/getPostData'
import { Post } from '@/helpers/types'
import { PostContainer } from '@/containers'

type BlogPageProps = {
  data: Post
}

const BlogPage:FC<BlogPageProps> = ({ data }) => {
  return <PostContainer data={data} />
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

  return {
    paths: filesInProjects.map(fileName => {
      return { params: { slug: fileName.replace('.md', '') }}
    }),
    fallback: false
  }
}