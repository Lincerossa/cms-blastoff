import styled from 'styled-components'
import { BackgroundProps } from './types'

export const Background = styled.div<BackgroundProps>`
  background-color: ${({ background }) => background};
  color: ${({ color }) => color};
  * {
    color: ${({ color }) => color};
  }
`
