import { useState, useMemo } from 'react'
import { UseListPagination, SelectedCategory } from './types'

export const useListPagination: UseListPagination = ({items, itemsPerPage}) => {
  const [selectedCategory, selectCategory] = useState<SelectedCategory>()
  const [itemOffset, setItemOffset] = useState(0)

  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }
  const handleCategoryClick = (category: SelectedCategory) => {
    setItemOffset(0)
    selectCategory(category)
  }

  const { currentItems, pageCount, selectedPage } = useMemo(() => {
    const filteredItems = items.filter(e => selectedCategory ? e.category === selectedCategory : true )

    return {
      currentItems: filteredItems.slice(itemOffset, itemOffset + itemsPerPage),
      pageCount: Math.ceil(filteredItems.length / itemsPerPage),
      selectedPage: itemOffset / itemsPerPage
    }
  }, [itemOffset, items, itemsPerPage, selectedCategory])

  return {
    itemOffset,
    pageCount,
    currentItems,
    handlePageClick,
    handleCategoryClick,
    selectedPage,
    selectedCategory
  }
}
