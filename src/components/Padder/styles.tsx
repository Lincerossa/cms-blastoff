import styled from 'styled-components'
import { PadderProps } from './types'

const SIZES = {
  small: 1,
  regular: 2,
  large: 3,
}

type PadderStyle = Pick<PadderProps, 'size'>

export const Padder = styled.div<PadderStyle>`
  padding: ${(props) => `${SIZES[props.size]}rem 0`};
`
