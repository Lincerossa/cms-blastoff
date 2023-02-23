import { FC } from 'react'
import * as S from './styles'
import { TagsProps } from './types'

const Tags: FC<TagsProps> = ({ items }) => (
  <S.TagsWrapper>
    {items?.map((tag, i) => (
      <S.Tag isLast={i === items.length - 1} key={tag}>
        {tag}
      </S.Tag>
    ))}
  </S.TagsWrapper>
)

export default Tags
