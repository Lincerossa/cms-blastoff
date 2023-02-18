import React, { FC } from 'react'
import * as S from './styles'

import { RichTextProps } from './types'

const RichText: FC<RichTextProps> = ({ text, children }) => {
  if (text) {
    return (
      <S.RichText
        dangerouslySetInnerHTML={{ __html: text }}
      />
    )
  }

  if (children) return <S.RichText>{children}</S.RichText>

  return null
}

export default RichText
