import React from 'react'
import { Button } from './styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonSubmit: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { children, ...rest } = props

  return (
    <Button {...rest}>
      {children}
    </Button>
  )
}

export default ButtonSubmit
