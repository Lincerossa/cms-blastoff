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
  background-color: ${(props) => props.theme.colors.softGrey};
  color: ${(props) => props.theme.colors.light};
  transition: background-color 200ms ease 0s;
  white-space: pre;
  user-select: none;
  cursor: pointer;
  ${(props) =>
    props.active &&
    `
    background-color: ${
      props.category
        ? props.theme.colors.category[`${props.category}`]
        : props.theme.colors.primary
    };
    color: ${props.theme.colors.dark};
  `}
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.category
        ? props.theme.colors.category[`${props.category}`]
        : props.theme.colors.primary};
    color: ${(props) => props.theme.colors.dark};
  }
`
