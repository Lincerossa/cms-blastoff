import React from "react"

import useMouse from './hooks'
import * as S from './styles'

const Pointer = () => {
  const {mousePosition, mouseStatus} = useMouse()

  return (
    <S.Wrapper>
      <S.Inner mousePosition={mousePosition} mouseStatus={mouseStatus} />
    </S.Wrapper>
  )
}
export default Pointer