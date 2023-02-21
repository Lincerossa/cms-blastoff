import { FC } from 'react'
import theme from "@/helpers/style/theme"
import Background from "../Background"
import ListOfCards from "../ListOfCards"
import MainLabel from "../MainLabel"
import Padder from "../Padder"
import Wrapper from "../Wrapper"
import { CategoryPageProps } from './types'

const CategoryPage: FC<CategoryPageProps> = ({ category, items }) => {
  return (
    <>
      <MainLabel text={category.toUpperCase()} />
      <Background background={theme.colors.darkLight}>
        <Wrapper size="large">
          <Padder size="large">
            <ListOfCards items={items} />
          </Padder>
        </Wrapper>
      </Background>
    </>
  )
}

export default CategoryPage