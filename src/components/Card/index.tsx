import React, { FC } from 'react'
import Image from '../Image'
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
      {tags?.length > 0 && (
        <S.TagsWrapper>
          {tags?.map((tag, i) => (
            <S.Tag isLast={i === tags.length - 1} key={tag}>
              {tag}
            </S.Tag>
          ))}
        </S.TagsWrapper>
      )}
      {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}
    </S.Description>
  </S.Card>
)

export default Card
