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

export const ImageWrapper = styled.div`
  margin-bottom: 2rem;
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
  img {
    height: 250px;
    border: 3px solid ${(props) => props.theme.colors.lightGrey};
    overflow: hidden;
    border-radius: 16px;
    display: block;
    object-fit: cover;
    object-position: center center;
    @media (min-width: 768px) {
      height: 400px;
    }
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
  color: white;
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
  font-weight: 400;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`
