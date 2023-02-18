import styled from 'styled-components'
import { WrapperProps } from './types'

const SIZES = {
  small: 200,
  regular: 500,
  big: 900,
  large: 1220,
}

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  margin: 0 auto;
  ${({ hasPadding }) => hasPadding && 'padding: 0 1rem'};
  max-width: ${({ size }) => (size ? `${SIZES[size]}px` : '100%')};
`
