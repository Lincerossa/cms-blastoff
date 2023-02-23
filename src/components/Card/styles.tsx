import styled from 'styled-components'

export const Card = styled.div`
  background-color: white;
  display: block;
  height: 100%;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  transition: 0.2s all;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  :before {
    content: '';
    position: absolute;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    z-index: 1;
  }
  padding-top: 100%;
  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
  }
`
export const Media = styled.img`
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 0.5rem;
  color: white;
  letter-spacing: 0.06rem;
`

export const Subtitle = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.grey};
  font-weight: 400;
`

export const Description = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 1;
  padding: 1rem;
`

export const Info = styled.div`
  display: grid;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
  font-weight: 100;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`
export const Category = styled.div<{ category: 'blog' | 'project' }>`
  color: ${(props) => props.theme.colors.category[`${props.category}`]};
  font-weight: 600;
  margin-right: 0.5rem;
`
export const Date = styled.div``
