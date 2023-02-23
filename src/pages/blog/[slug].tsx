import { FC } from 'react'
import fs from 'fs'
import getPostData from '@/helpers/utils/getPostData'
import PostPage from '@/components/Pages/PostPage'
import { PostPageProps } from '@/components/Pages/types'

const Page: FC<{ data: PostPageProps }> = ({ data }) => {
  return <PostPage {...data} />
}

export default Page

export async function getStaticProps({
  params: { slug },
}: {
  params: { slug: string }
}) {
  return {
    props: {
      data: getPostData({ collection: 'blog', slug }),
    },
  }
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync('./public/posts/blog/')

  return {
    paths: filesInProjects.map((fileName) => {
      return { params: { slug: fileName.replace('.md', '') } }
    }),
    fallback: false,
  }
}
