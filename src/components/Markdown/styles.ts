import styled from 'styled-components'

export const ImageWrapper = styled.div`
  width: 100%;
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
