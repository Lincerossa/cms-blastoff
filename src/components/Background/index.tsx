import React, { FC } from 'react'
import * as S from './styles'
import { BackgroundProps } from './types'

const Background: FC<BackgroundProps> = ({ background, color, children, hasTexture }) => (
  <S.Background
    color={color}
    background={background}
    hasTexture={hasTexture}
  >
    {children}
  </S.Background>
)

export default Background
