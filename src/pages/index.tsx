import { FC} from 'react'
import fs from 'fs'
import { ListOfCards, Background, PostHero, Padder, Wrapper } from '@/components'
import { ListOfCardsProps } from '@/components/ListOfCards/types'
import getFormattedDate from '@/helpers/utils/getFormattedDate'
import theme from '@/helpers/style/theme'

type HomePageProps = {
  listOfCards: ListOfCardsProps
}
const HomePage:FC<HomePageProps> = ({ listOfCards }) => {
  return (
    <>
      <ListOfCards {...listOfCards} />
    </>
  )
}
export default HomePage

export async function getStaticProps() {
  const filesInProjects = fs.readdirSync('./public/posts/blog/')


  return {
    props: {
      listOfCards: {
        items: filesInProjects.map(file => {
          return {  
            image: {
              alt: '',
              src: ''
            },
            supertitle: 'supertitle',
            title: file,
            tags: ['lorem', 'ipsum'],
            subtitle: 'subtitle',
            slug: '/blog/ciao'
          }
      }) }
    }
  }
}
