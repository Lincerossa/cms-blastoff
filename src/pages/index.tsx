import { FC} from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import { ListOfCards, Background, PostHero, Padder, Wrapper } from '@/components'
import getFormattedDate from '@/helpers/utils/getFormattedDate'
import theme from '@/helpers/style/theme'

type HomePageProps = {
  data: Array<{
    frontmatter: {
      title: string
      subtitle: string
      slug: string
      date: string
      thumbnail: string
      tags?: Array<{name: string}>
    }
    markdown: string
  }>
}
const HomePage:FC<HomePageProps> = ({ data }) => {


  return (
    <Background background={theme.colors.thirdary}>
      <Wrapper size="large">
        <Padder size="large">
          <h1>Posts</h1>
          <ListOfCards items={data.map(({frontmatter}) => ({
            image: {
              alt: '',
              src: frontmatter.thumbnail,
              width: 400,
              height: 500,
            },
            supertitle: getFormattedDate(new Date(frontmatter.date)),
            title: frontmatter.title,
            tags: frontmatter.tags?.map(tag => tag?.name) ?? [],
            subtitle: frontmatter.subtitle,
            slug: `blog/${frontmatter.slug.replace('.md', '')}`
          }))} />
          </Padder>
      </Wrapper>
    </Background>
  )
}
export default HomePage

export async function getStaticProps() {
  const filesInProjects = fs.readdirSync('./public/posts/blog/')
  return {
    props: {
      data: filesInProjects.map(fileName => {
        const { data, content } = matter(fs.readFileSync(`./public/posts/blog/${fileName}`, 'utf8'))
        return {
          frontmatter: {...data, slug: fileName, date: getFormattedDate(new Date(data.date))},
          markdown: content
        }
      })
    }
  }
}
