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
      slug, image, date, title, tags, subtitle, category,
    }) => (
      <Link key={slug} href={`/${slug}`}>
          <S.ListItem>
            <Card
              image={image}
              date={date}
              title={title}
              subtitle={subtitle}
              tags={tags}
              category={category}
            />
          </S.ListItem>
      </Link>
    ))}
  </List>
)

export default ListOfCards
