import styled from 'styled-components'

export const Button = styled.button<{
  active?: boolean
  category?: 'blog' | 'project'
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  padding: 8px 16px;
  border: none;
  border-radius: 10000px;
  background-color: ${({ theme }) => theme.colors.softGrey};
  color: ${({ theme }) => theme.colors.light};
  transition: background-color 200ms ease 0s;
  white-space: pre;
  user-select: none;
  cursor: pointer;
  ${({ theme, active, category }) =>
    active &&
    `
    background-color: ${
      category ? theme.colors.category[`${category}`] : theme.colors.primary
    };
    color: ${theme.colors.dark};
  `}
  &:hover {
    cursor: pointer;
    background-color: ${({ theme, category }) =>
      category ? theme.colors.category[`${category}`] : theme.colors.primary};
    color: ${({ theme }) => theme.colors.dark};
  }
`
