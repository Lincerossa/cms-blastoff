import styled from 'styled-components'

export const Glitch = styled.div<{ text: string }>`
  line-height: 1;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  text-decoration: none;
  color: #fff;
  &:before,
  &:after {
    display: block;
    content: '${(props) => props.text}';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.8;
  }
  &:after {
    color: #0ff;

    z-index: -2;
  }
  &:before {
    color: #bf1650;
    transform: translate(-2px, 2px);
    z-index: -1;
  }
  &:hover {
    &:before {
      animation: glitch-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
        infinite;
    }
    &:after {
      animation: glitch-left-2 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
        both infinite;
    }
  }

  @keyframes glitch-left {
    0% {
      transform: translate(0);
    }
    33% {
      transform: translate(-5px, 3px);
    }
    66% {
      transform: translate(5px, -3px);
    }
    to {
      transform: translate(0);
    }
  }
  @keyframes glitch-left-2 {
    0% {
      transform: translate(0);
    }
    33% {
      transform: translate(-5px, -3px);
    }
    66% {
      transform: translate(5px, 2px);
    }
    to {
      transform: translate(0);
    }
  }
`

export const Wrapper = styled.div`
  height: 450px;
  position: relative;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23CA99FE' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-color: ${(props) => props.theme.colors.dark};
  font-size: 3rem;
`
