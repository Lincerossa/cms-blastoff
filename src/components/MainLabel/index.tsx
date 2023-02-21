import { Glitch } from "@/helpers/style/common"
import { FC } from 'react'
import { Wrapper } from './styles'
import Border from './border.svg'
import Background from "../Background"
import theme from "@/helpers/style/theme"

type MainLabelProps = {
  text: string
}

const MainLabel: FC<MainLabelProps> = ({text}) => {
  return  (
  <Background background={theme.colors.darkLight}>
  <Wrapper>
    <Glitch text={text}>{text}</Glitch>
  </Wrapper>
  <Border /></Background>
  )
}

export default MainLabel