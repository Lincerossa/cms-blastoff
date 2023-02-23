import React, { FC } from 'react'
import * as S from './styles'
import { WrapperProps } from './types'

const Wrapper: FC<WrapperProps> = ({ children, size, hasPadding = true }) => (
  <S.Wrapper size={size} hasPadding={hasPadding}>
    {children}
  </S.Wrapper>
)

export default Wrapper
