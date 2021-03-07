import React from 'react';
import { Button } from './styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
}

const ButtonSubmit: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { label, ...rest } = props;

  return (
    <Button {...rest}>
      {label}
    </Button>
  )
}

export default ButtonSubmit;