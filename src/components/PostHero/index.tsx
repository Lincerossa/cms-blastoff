import React, { FC } from 'react'
import * as S from './styles'
import { PostHeroProps } from './types'

const PostHero: FC<PostHeroProps> = ({
  thumbnail, date, title, subtitle, category, tags
}) => (
  <S.PostHero>
    <S.Media src={thumbnail} category={category} />
    <S.Content>
      <S.Info>
        <S.Category category={category}>{category.toLocaleUpperCase()}</S.Category>
        <S.Date>{date}</S.Date>
      </S.Info>
      <S.Title>{title}</S.Title>
      { tags?.length > 0
          && (
        <S.TagsWrapper>
          {
            tags?.map((tag, i) => <S.Tag isLast={i === tags.length - 1} key={tag}>{tag}</S.Tag>)
          }
        </S.TagsWrapper>
        )}
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Content>
  </S.PostHero>
)

export default PostHero
