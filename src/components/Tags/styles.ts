import styled from 'styled-components'

export const TagsWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
  letter-spacing: 0.04em;
`
export const Tag = styled.div<{ isLast: boolean }>`
  border-radius: 4px;
  color: white;
  font-size: 0.6rem;
  font-weight: 600;
  font-family: sans-serif;
  position: relative;
  margin-right: 1rem;
  text-transform: uppercase;
  &:after {
    content: '';
    position: absolute;
    top: 45%;
    transform: translate(0, -50%);
    border-radius: 50%;
    display: ${(props) => (props.isLast ? 'none' : 'block')};
    right: -0.7rem;
    width: 0.4rem;
    height: 0.4rem;
    background: ${(props) => props.theme.colors.primary};
  }
`
