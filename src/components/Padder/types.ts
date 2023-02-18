import { PropsWithChildren } from 'react'

export type PadderProps = PropsWithChildren<{
  hasPadding?: boolean
  size: 'small' | 'regular' | 'large'
}>
