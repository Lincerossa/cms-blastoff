import styled from 'styled-components'

export const PostHero = styled.div`
  height: 450px;
  position: relative;
  @media (min-width: 768px){
    display: flex;
    align-items: center;
  }
`

export const Media = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  object-position: center center;
  @media (min-width: 768px){
    width: 50%;
  }
`

export const Content = styled.div`
  width: 100%;
  padding: 1rem;
  @media (min-width: 768px){
    width: 50%;
  }
`

export const Supertitle = styled.div`
  font-family: sans-serif;
  color: white;
  font-size: 0.75rem;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: .5rem;
  @media (min-width: 768px){
    font-size: 1rem;
    margin-bottom: 1rem;
  }
`

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: .5rem;
  color: white;
  @media (min-width: 768px){
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`

export const Subtitle = styled.div`
  text-transform: uppercase;
  color: ${props =>props.theme.colors.grey};
  font-weight: 100;
  font-size: .75rem;
  @media (min-width: 768px){
    font-size: 1rem;
  }
`
