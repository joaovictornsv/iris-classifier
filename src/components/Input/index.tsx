/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { InputBase, Label, InputContainer } from './styles'
import ErrorDiv from '../ErrorDiv'
import { FieldAttributes } from 'formik'

interface InputProps extends FieldAttributes<any> {
  label: string;
  errors: string | undefined;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    label,
    errors,
    id,
    name,
    ...rest
  } = props

  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <InputBase id={id} name={name} {...rest}/>
      {errors && <ErrorDiv error={errors}/>}
    </InputContainer>
  )
}

export default Input
