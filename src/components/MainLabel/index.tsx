import { Glitch } from "@/helpers/style/common"
import { FC } from 'react'
import * as S from './styles'
import Background from "../Background"
import theme from "@/helpers/style/theme"

type MainLabelProps = {
  text: string
}

const MainLabel: FC<MainLabelProps> = ({text}) => {
  return  (
    <S.Wrapper>
      <Glitch text={text}>{text}</Glitch>
    </S.Wrapper>
  )
}

export default MainLabel