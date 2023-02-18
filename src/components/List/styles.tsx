import styled from 'styled-components'
import { ListProps } from './types'

type ListStyle = Pick<ListProps, 'columns'>

export const List = styled.div<ListStyle>`
  width: 100%;
  display: grid;
  grid-gap: 2rem;
  @media (min-width: 978px){
    grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  }
`

export const ListItem = styled.div`

`
