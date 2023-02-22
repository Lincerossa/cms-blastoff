import React, { FC } from 'react'
import * as S from './styles'

type ButtonProps = {
  onClick: () => void
  label:string
  category?: 'blog' | 'project'
}

const Button: FC<ButtonProps> = ({label, onClick, category}) => {

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClick();
  };

  return <S.Button onClick={buttonHandler} category={category}>{label}</S.Button>
}

export default Button