import React, { FC } from 'react'
import * as S from './styles'
import Wrapper from '../Wrapper'
import { PosHeroProps } from './types'

const PostHero: FC<PosHeroProps> = ({
  media, supertitle, title, subtitle,
}) => (
  <S.MediaWrapper>
    <S.Media src={media.url} />
    <Wrapper>
      <S.MediaHeader>
        <S.Supertitle>{supertitle}</S.Supertitle>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
      </S.MediaHeader>
    </Wrapper>

  </S.MediaWrapper>
)

export default PostHero
