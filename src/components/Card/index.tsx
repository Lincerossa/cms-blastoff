import React, { FC } from 'react'
import Image from '../Image'
import Tags from '../Tags'
import * as S from './styles'
import { CardProps } from './types'

const Card: FC<CardProps> = ({
  image,
  title,
  tags,
  subtitle,
  formattedDate,
  category,
}) => (
  <S.Card>
    <S.ImageWrapper>
      <Image image={image} />
    </S.ImageWrapper>
    <S.Description>
      <S.Info>
        <S.Category category={category}>
          {category.toLocaleUpperCase()}
        </S.Category>
        <S.Date>{formattedDate}</S.Date>
      </S.Info>
      <S.Title>{title}</S.Title>
      <Tags items={tags} />
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Description>
  </S.Card>
)

export default Card
