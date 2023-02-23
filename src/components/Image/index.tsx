import React, { FC } from 'react'
import Image from 'next/image'

import * as S from './styles'
import { ImageProps } from './types'

const CustomImage: FC<ImageProps> = ({ image, hasShadow }) => {
  const { src, alt, width, height, description } = image
  return (
    <S.ImageWrapper>
      <Image
        src={src.replace('/public', '')}
        alt={alt}
        width={width}
        height={height}
      />
      {hasShadow && <S.Shadow />}
      {description && <S.Description>{description}</S.Description>}
    </S.ImageWrapper>
  )
}

export default CustomImage
