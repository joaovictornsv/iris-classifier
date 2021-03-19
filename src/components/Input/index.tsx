import React from 'react'
import { Input as InputElement, Label, InputContainer } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { label, id, ...rest } = props

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputElement id={id} {...rest}/>
    </InputContainer>
  )
}

export default Input
