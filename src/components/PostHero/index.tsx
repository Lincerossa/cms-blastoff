import React, { FC } from 'react'
import * as S from './styles'
import Wrapper from '../Wrapper'
import { PostHeroProps } from './types'

const PostHero: FC<PostHeroProps> = ({
  media, supertitle, title, subtitle,
}) => (
  <S.MediaWrapper>
    <S.Media src={media.url} />
    <Wrapper size="large">
      <S.MediaHeader>
        <S.Supertitle>{supertitle}</S.Supertitle>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.MediaHeader>
    </Wrapper>

  </S.MediaWrapper>
)

export default PostHero
