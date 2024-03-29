import React, { FC, PropsWithChildren, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Logo from './logo.svg'
import Hamburger from './hamburger.svg'
import Close from './close.svg'
import Wrapper from '../Wrapper'
import * as S from './styles'
import Pointer from './Pointer'
import { useSettings } from '@/providers/SettingsProvider'
import { ScrollStatus } from './types'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [{ initial, direction }, setScrollStatus] = useState<ScrollStatus>({
    position: 0,
    initial: true,
    direction: 'up',
  })
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
  const { ROUTES } = useSettings()
  const { asPath, events } = useRouter()
  function handleGetDirection() {
    setScrollStatus((prevState) => ({
      position: window.scrollY,
      initial: window.scrollY < 250,
      direction:
        window.scrollY > prevState.position && window.scrollY > 600
          ? 'down'
          : 'up',
    }))
  }

  useEffect(() => {
    events.on('routeChangeComplete', () => setMenuOpen(false))
    window.addEventListener('scroll', handleGetDirection, false)
    return () => {
      window.removeEventListener('scroll', handleGetDirection, false)
    }
  }, [events])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.document.getElementsByTagName('html')[0].style.overflowY =
        isMenuOpen ? 'hidden' : 'visible'
    }
  }, [isMenuOpen])

  return (
    <S.Main>
      <S.Header direction={direction} isMenuOpen={isMenuOpen} initial={initial}>
        <Wrapper size="large">
          <S.HeaderInner>
            <Link href="/" as="/">
              <S.Logo initial={initial} isMenuOpen={isMenuOpen}>
                <Logo />
              </S.Logo>
            </Link>
            <S.Menu isMenuOpen={isMenuOpen}>
              <S.MenuItems>
                {ROUTES?.filter((e) => !e.hidden).map((e) => (
                  <S.MenuItem
                    key={e.slug}
                    isActive={e.slug === asPath}
                    direction={direction}
                    isMenuOpen={isMenuOpen}
                    initial={initial}
                  >
                    <Link href={e.href} as={e.slug}>
                      {e.label}
                    </Link>
                  </S.MenuItem>
                ))}
              </S.MenuItems>
            </S.Menu>

            <S.Hamburger
              isMenuOpen={isMenuOpen}
              initial={initial}
              onClick={() => setMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <Close /> : <Hamburger />}
            </S.Hamburger>
          </S.HeaderInner>
        </Wrapper>
      </S.Header>
      {children}

      <S.Footer>
        <Wrapper size="large">
          <S.FooterInner>
            <Link href="/" as="/">
              <S.Logo initial>
                <Logo />
              </S.Logo>
            </Link>
            <S.ExternalLinks>
              <S.ExternalLink
                href="https://github.com/Lincerossa"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </S.ExternalLink>
              <S.ExternalLink
                href="https://twitter.com/cav_lince"
                target="_blank"
                rel="noreferrer"
              >
                Twitter
              </S.ExternalLink>
              <S.ExternalLink
                href="https://www.linkedin.com/in/marcello-luatti/"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin
              </S.ExternalLink>
            </S.ExternalLinks>
          </S.FooterInner>
        </Wrapper>
      </S.Footer>
      <Pointer />
    </S.Main>
  )
}

export default Layout
