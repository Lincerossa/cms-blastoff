import type { AppProps } from 'next/app'
import GlobalStyle from '../helpers/style/global'
import theme from '../helpers/style/theme'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { SETTINGS } from '@/helpers/const'
import { Layout } from '@/components'

export default function App({ Component, pageProps }: AppProps) {
  const seo = pageProps?.seo || SETTINGS.SEO
  return <>
    <Head>
      <title>{seo.title}</title>
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="title" content={seo.title} />
      <meta property="description" content={seo.description} />
      <meta property="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
      <meta property="og:type" content="website" />
      <link href="favicon.ico" rel="icon" />
    </Head>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Layout routes={SETTINGS.ROUTES}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
}
