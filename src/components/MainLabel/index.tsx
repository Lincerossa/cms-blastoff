import { FC } from 'react'
import * as S from './styles'
import { MainLabelProps } from './types'

const MainLabel: FC<MainLabelProps> = ({ text }) => {
  return (
    <S.Wrapper>
      <S.Glitch text={text}>{text}</S.Glitch>
    </S.Wrapper>
  )
}

export default MainLabel
