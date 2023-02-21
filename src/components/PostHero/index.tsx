import React, { FC } from 'react'
import * as S from './styles'
import { PostHeroProps } from './types'

const PostHero: FC<PostHeroProps> = ({
  thumbnail, supertitle, title, subtitle,
}) => (
  <S.PostHero>
    <S.Media src={thumbnail} />
    <S.Content>
      <S.Supertitle>{supertitle}</S.Supertitle>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Content>
  </S.PostHero>
)

export default PostHero
