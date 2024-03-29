import { FC } from 'react'
import theme from '@/helpers/style/theme'
import Background from '../Background'
import ListOfCards from '../ListOfCards'
import MainLabel from '../MainLabel'
import Padder from '../Padder'
import RichText from '../RichText'
import Wrapper from '../Wrapper'
import { HomePageProps } from './types'
import { useSettings } from '@/providers/SettingsProvider'

const HomePage: FC<HomePageProps> = ({ items }) => {
  const { DATA } = useSettings()
  return (
    <>
      <MainLabel text="BLASTOFF" />
      <Background background={theme.colors.darkLight} color="white">
        <Wrapper size="large">
          <Padder size="large">
            <ListOfCards items={items} showFilters />
          </Padder>
        </Wrapper>
      </Background>
      <Background background={theme.colors.dark} color={theme.colors.light}>
        <Wrapper size="large">
          <Padder size="large">
            <RichText>
              <h2>Introduction</h2>
              <p>{DATA.HOME.intro}</p>
            </RichText>
          </Padder>
        </Wrapper>
      </Background>
    </>
  )
}

export default HomePage
