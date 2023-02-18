import React, { FC } from 'react'
import * as S from './styles'
import { PadderProps } from './types'

const Padder: FC<PadderProps> = ({ size, children }) => (
  <S.Padder size={size}>{children}</S.Padder>
)

export default Padder
