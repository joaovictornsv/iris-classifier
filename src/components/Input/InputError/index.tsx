import React from 'react'
import InputErrorBase from './styles'

interface IInputError {
  text: string;
}

export const FallbackText = InputErrorBase

const InputError = ({ text }: IInputError): JSX.Element => {
  return (
    <InputErrorBase>
      {text}
    </InputErrorBase>
  )
}

export default InputError
