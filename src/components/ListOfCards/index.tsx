/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import Link from 'next/link'

import Card from '../Card'
import List from '../List'
import * as S from './styles'

import { ListOfCardsProps } from './types'

const ListOfCards: FC<ListOfCardsProps> = ({ items }) => (
  <List columns={3}>
    {items.map(({
      slug, image, supertitle, title, tags, subtitle,
    }) => (
      <Link legacyBehavior key={slug} href="/[...dynamic]" as={`/${slug}`}>
        <a>
          <S.ListItem>
            <Card
              image={image}
              supertitle={supertitle}
              title={title}
              subtitle={subtitle}
              tags={tags}
              layout='auto'
            />
          </S.ListItem>
        </a>
      </Link>
    ))}
  </List>
)

export default ListOfCards
