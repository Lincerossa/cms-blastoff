import { createGlobalStyle } from 'styled-components'
import theme from './theme'

export default createGlobalStyle`
  html, body {
    height: auto;
    font-size: 16px;
    color: black;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
  strong {
    font-weight: 600;
  }
  h1, h2, h3, h4 {
    margin-top: 0;
    font-weight: 500;
    color: ${theme.colors.secondary};
    position: relative;
    &:before {
      content:"";
      width: 3rem;
      border-bottom: 2px solid ${theme.colors.secondary};
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
  h1 {
    font-size: 2rem;
    @media (min-width: 768px){
      font-size: 3.5rem;
    }
  }
  h2 {
    font-size: 1.5rem;
    @media (min-width: 768px){
      font-size: 2rem;
    }
  }
  h3 {
    font-size: 1.375rem;
    @media (min-width: 768px){
      font-size: 1.5
    }
  }
  p, span {
    font-weight: 300;
    font-size: 1.25rem;
    line-height: 1.75;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    cursor: none;
  }
  a{
    color: ${theme.colors.primary} !important;
    text-decoration: none;
    &:hover{
      color: ${theme.colors.dark} !important;
    }
  }
  a > * {
    color: ${theme.colors.primary} !important;
  }
  
  ::selection {
    color: rgb(255, 255, 255);
    background: ${theme.colors.primary};
  }
`
