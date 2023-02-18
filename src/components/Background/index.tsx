import React, { FC } from 'react'
import * as S from './styles'
import { BackgroundProps } from './types'

const Background: FC<BackgroundProps> = ({ background, color, children }) => (
  <S.Background
    color={color}
    background={background}
  >
    {children}
  </S.Background>
)

export default Background
