import { PropsWithChildren } from 'react'

export type LayoutProps = PropsWithChildren<{
  routes: Array<{hidden: boolean, slug: string, href: string, label: string}>
}>