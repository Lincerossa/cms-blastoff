import React, { FC } from 'react'
import Link from 'next/link'
import ReactPaginate from 'react-paginate'
import Card from '../Card'
import Button from '../Button'
import List from '../List'
import * as S from './styles'
import { useListPagination } from './hooks'
import { ListOfCardsProps } from './types'
import Padder from '../Padder'
import { useSettings } from '@/providers/SettingsProvider'

const ListOfCards: FC<ListOfCardsProps> = ({ items, itemsPerPage=6, showFilters }) => {
  const { pageCount, selectedPage, currentItems, handlePageClick, handleCategoryClick, selectedCategory } = useListPagination({items, itemsPerPage})
  const { ROUTES } = useSettings()
  
  return (
    <>
      {showFilters && <S.ButtonsWrapper>
        <S.ButtonWrapper>
          <Button active={!selectedCategory} onClick={() => handleCategoryClick(undefined)} label='ALL' />
        </S.ButtonWrapper>
        {ROUTES.map(({ label, slug, category}) => (
          <S.ButtonWrapper key={slug}>
            <Button active={selectedCategory === category} onClick={() => handleCategoryClick(category)} category={category} label={label.toUpperCase()} />
          </S.ButtonWrapper>
        ))}
      </S.ButtonsWrapper>}
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
            forcePage={selectedPage}
          />
        </S.Pagination>
      </Padder>
    </>
  )
}

export default ListOfCards
