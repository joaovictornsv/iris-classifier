/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { lazy, Suspense } from 'react'
import InputBase from './styles'
import { FallbackText } from './InputError'
import { FieldAttributes } from 'formik'

interface InputProps extends FieldAttributes<any> {
  label: string;
  errors: string | undefined;
}

const InputError = lazy(() => import('./InputError'))

const Fallback = (): JSX.Element => {
  return (
    <FallbackText>Loading...</FallbackText>
  )
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
    <InputBase.Container>
      <InputBase.Label htmlFor={id}>{label}</InputBase.Label>
      <InputBase id={id} name={name} {...rest}/>

      {errors && (
        <Suspense fallback={<Fallback />}>
          <InputError text={errors} />
        </Suspense>
      )}

    </InputBase.Container>
  )
}

export default Input
