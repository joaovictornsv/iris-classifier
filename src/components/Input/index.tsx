/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import InputBase from './styles'
import { FieldAttributes } from 'formik'
import InputError from './InputError'

interface InputProps extends FieldAttributes<any> {
  label: string;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    label,
    errors,
    name,
    ...rest
  } = props

  return (
    <InputBase.Container>
      <InputBase.Label htmlFor={name}>{label}</InputBase.Label>
      <InputBase className={errors && 'invalid'} name={name} {...rest}/>

      <InputError text={errors || null} />

    </InputBase.Container>
  )
}

export default Input
