import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 60vh;
  position: relative;
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 5rem;
  @media (min-width: 978px){
    height: 100vh;
  }
`;