import { PropsWithChildren } from 'react'

export type WrapperProps = PropsWithChildren<{
  hasPadding?: boolean
  size?: 'small' | 'regular' | 'big' | 'large'
}>
