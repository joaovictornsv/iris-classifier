import React from 'react';
import { Input as InputElement, Label, InputContainer } from './styles'

interface InputProps {
  label: string
}

const Input: React.FC<InputProps> = ({label}) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputElement type="text"/>
    </InputContainer>
  )
}

export default Input
