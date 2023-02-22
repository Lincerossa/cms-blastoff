import styled from "styled-components";

export const Button = styled.button<{category?: 'blog' | 'project'}>`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1rem;
  padding: 8px 16px;
  border: none;
  border-radius: 10000px;
  background-color: ${(props) =>props.theme.colors.lightGrey};
  color: rgb(133, 147, 167);
  transition: background-color 200ms ease 0s;
  user-select: none;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.category ? props.theme.colors.category[`${props.category}`] : props.theme.colors.softGrey};
  }
`