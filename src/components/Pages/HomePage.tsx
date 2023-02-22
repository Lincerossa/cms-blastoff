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
      <MainLabel text="BLASTOFF" />
      <Background background={theme.colors.darkLight} color="white">
        <Wrapper size="large">
          <Padder size="large">
            <ListOfCards items={items} />
          </Padder>
        </Wrapper>
      </Background>
      <Background background={theme.colors.dark} color='white'>
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