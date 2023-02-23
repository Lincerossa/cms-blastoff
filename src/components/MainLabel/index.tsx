import { Glitch } from '@/helpers/style/common'
import { FC } from 'react'
import * as S from './styles'
import { MainLabelProps } from './types'

const MainLabel: FC<MainLabelProps> = ({ text }) => {
  return (
    <S.Wrapper>
      <Glitch text={text}>{text}</Glitch>
    </S.Wrapper>
  )
}

export default MainLabel
