import React, { FC } from 'react'
import * as S from './styles'
import { ListProps } from './types'

const List: FC<ListProps> = ({ columns = 1, children }) => (
  <S.List columns={columns}>
    {React.Children.map(children, (child) => (
      <S.ListItem>{child}</S.ListItem>
    ))}
  </S.List>
)

export default List
