import { FC } from "react"
import { DATA } from "@/helpers/const"
import theme from "@/helpers/style/theme"
import Background from "../Background"
import ListOfCards from "../ListOfCards"
import MainLabel from "../MainLabel"
import Padder from "../Padder"
import RichText from "../RichText"
import Wrapper from "../Wrapper"
import { HomePageProps } from "./types"

const HomePage: FC<HomePageProps> = ({ items }) => {
  return (
    <>
      <MainLabel text="CMS BLASTOFF" />
      <Background background={theme.colors.thirdary} color='white'>
        <Wrapper size="large">
          <Padder size="large">
            <RichText>
              <h2>Intro</h2>
              <p>{DATA.HOME.intro}</p>
            </RichText>
          </Padder>
        </Wrapper>
      </Background>
      <Background background={theme.colors.quaternary} color="white">
        <Wrapper size="large">
          <Padder size="large">
            <RichText>
              <h2>List of post</h2>
              <p>{DATA.HOME.posts}</p>
            </RichText>
            <ListOfCards items={items} />
          </Padder>
        </Wrapper>
      </Background>
    </>
  )
}

export default HomePage