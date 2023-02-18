import React, { FC } from 'react'
import Image from 'next/image'

import * as S from './styles'
import { ImageProps } from './types'

const CustomImage: FC<ImageProps> = ({ image, hasShadow }) => (
  <S.ImageWrapper>
    <Image src={image.src} alt={image.alt} width={image?.width} height={image?.height}/>
    {hasShadow && <S.Shadow />}
    {image?.description && <S.Description>{image.description}</S.Description>}
  </S.ImageWrapper>
)

export default CustomImage
