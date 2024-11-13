import React from 'react'

interface Props {
  children: string;
  onClick: () => void;
}

export default function Button({children, onClick}: Props) {

  return (
    <>
    <button onClick={onClick}>{children}</button>
    </>
  )
}