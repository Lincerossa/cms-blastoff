import { FC } from 'react'
import { Post } from '@/helpers/types'
import { ListOfCards, Background, Padder, Wrapper, MainLabel, RichText } from '@/components'
import theme from '@/helpers/style/theme'

type HomeContainerProps = {
  data: Post[]
}

const HomeContainer: FC<HomeContainerProps> = ({data}) => {
  const items = data.map(({thumbnail, date, title, tags, subtitle, slug}) => ({
    image: {
      alt: '',
      src: thumbnail,
      width: 400,
      height: 500,
    },
    supertitle: date,
    title,
    tags: tags?.map(tag => tag?.name) ?? [],
    subtitle,
    slug: `blog/${slug.replace('.md', '')}`
  }))

  return (
    <>
      <MainLabel text="cms-bastoff" />
      <Background background={theme.colors.thirdary} color='white'>
        <Wrapper size="large">
          <Padder size="large">
            <RichText>
              <h1>Intro</h1>
              <p>
              A static CMS (Content Management System) is a type of CMS that generates websites using static files, typically in HTML, CSS, and JavaScript, instead of relying on a server-side dynamic rendering system. In a static CMS, the content is stored in files that are generated ahead of time, and when a user requests the site, the files are served as-is. This is in contrast to traditional CMS systems, where content is stored in a database and generated dynamically at the time of the request.

Static CMS systems can offer several benefits, including faster page load times, lower server requirements, improved security, and easier maintenance. However, they may not be suitable for sites that require frequent updates or complex functionality.

Some popular static CMS systems include Jekyll, Hugo, and Gatsby. These systems typically use templates and markdown files to create content and generate static files. Additionally, static CMS systems can be combined with a static site generator and a version control system, allowing for easy collaboration and version control of website content.
              </p>
            </RichText>
          
          </Padder>
        </Wrapper>
      </Background>
      <Background background={theme.colors.thirdary}>
        <Wrapper size="large">
          <Padder size="large">
            <ListOfCards items={items} />
          </Padder>
        </Wrapper>
      </Background>
    </>
  )
}


export default HomeContainer