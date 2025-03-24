import React from 'react'

interface ButtonProps {
  name: string;
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClickHandler }) => {
  return (
    <button className={`
        bg-blue-800
        p-2
        text-white
        rounded-sm
        hover:bg-blue-600
      `} onClick={onClickHandler}>{name}</button>
  )
}

export default Button