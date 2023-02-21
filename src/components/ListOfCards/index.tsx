/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useState } from 'react'
import Link from 'next/link'
import ReactPaginate from 'react-paginate'
import Card from '../Card'
import List from '../List'
import * as S from './styles'

import { ListOfCardsProps } from './types'
import Padder from '../Padder'

const ListOfCards: FC<ListOfCardsProps> = ({ items, itemsPerPage=6 }) => {
  const [itemOffset, setItemOffset] = useState(0)
  const endOffset = itemOffset + itemsPerPage
  const currentItems = items.slice(itemOffset, endOffset)
  const pageCount = Math.ceil(items.length / itemsPerPage)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }

  return (
    <>
      <List columns={3}>
        {currentItems.map(({ slug, ...item }) => (
          <Link key={slug} href={`/${slug}`}>
              <S.ListItem>
                <Card {...item} />
              </S.ListItem>
          </Link>
        ))}
      </List>
      <Padder size='small'>
        <S.Pagination>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={3}
            previousLabel="Prev"
          />
        </S.Pagination>
      </Padder>
    </>
  )
}

export default ListOfCards
