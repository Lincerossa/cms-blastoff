import { Glitch } from "@/helpers/style/common"
import { FC } from 'react'
import { Wrapper } from './styles'

type MainLabelProps = {
  text: string
}

const MainLabel: FC<MainLabelProps> = ({text}) => {
  return <Wrapper>
    <Glitch text={text}>{text}</Glitch>
  </Wrapper>
}

export default MainLabel