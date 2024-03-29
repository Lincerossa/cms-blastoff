import styled from 'styled-components'

export const ListItem = styled.div`
  transition: 0.4s all;
  cursor: pointer;
  img {
    &:hover {
      box-shadow: 0 0 9.5px 3px rgba(0, 0, 0, 0.2);
    }
  }
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-weight: 600;
  ul {
    margin: 0;
    display: flex;
    padding: 0;
    list-style: none;
    li {
      cursor: pointer;
      padding: 0 0.25rem;
      border-radius: 3px;
    }
    a {
      color: white !important;
      transition: 0.2s all;
      &:hover {
        color: ${(props) => props.theme.colors.primary} !important;
      }
    }
    .selected {
      * {
        color: ${(props) => props.theme.colors.primary} !important;
      }
    }
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  margin-bottom: 2rem;
`

export const ButtonWrapper = styled.div`
  margin-right: 1rem;
`
