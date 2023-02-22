import styled from 'styled-components'

export const PostHero = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`

export const Media = styled.img<{ category: 'blog' | 'project' }>`
  border: 2px solid
    ${(props) => props.theme.colors.category[`${props.category}`]};
  display: block;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 16px;
  object-position: center center;
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    width: 50%;
    height: 400px;
    margin-bottom: 0;
  }
`

export const Content = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`

export const ButtonWrapper = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin: 0;
    font-size: 1rem;
  }
`

export const Info = styled.div`
  display: grid;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  font-weight: 100;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`
export const Category = styled.div<{ category: 'blog' | 'project' }>`
  color: ${(props) => props.theme.colors.category[`${props.category}`]};
  font-weight: 600;
  font-size: 1rem;
  margin-right: 1rem;
`
export const Date = styled.div`
  font-size: 1rem;
`

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.5rem;
  color: white;
  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`

export const Subtitle = styled.div`
  color: ${(props) => props.theme.colors.grey};
  font-weight: 100;
  font-size: 0.75rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

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
