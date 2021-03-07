import React from 'react';
import { Input as InputElement, Label, InputContainer } from './styles'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const { label, ...rest } = props;

  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputElement {...rest}/>
    </InputContainer>
  )
}

export default Input
