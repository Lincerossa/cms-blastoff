import React, { FC, useCallback } from 'react'
import * as S from './styles'
import { PostHeroProps } from './types'
import Button from '../Button'
import { useRouter } from 'next/router'
import Tags from '../Tags'

const PostHero: FC<PostHeroProps> = ({
  thumbnail,
  date,
  title,
  subtitle,
  category,
  tags,
}) => {
  const { push } = useRouter()

  const handleBack = () => {
    push(`/${category}`)
  }

  return (
    <>
      <S.ButtonWrapper>
        <Button label="Back" onClick={handleBack} />
      </S.ButtonWrapper>
      <S.PostHero>
        <S.Media src={thumbnail} />
        <S.Content>
          <S.Info>
            <S.Category category={category}>
              {category.toLocaleUpperCase()}
            </S.Category>
            <S.Date>{date}</S.Date>
          </S.Info>
          <S.Title>{title}</S.Title>
          <Tags items={tags} />
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.Content>
      </S.PostHero>
    </>
  )
}
export default PostHero
