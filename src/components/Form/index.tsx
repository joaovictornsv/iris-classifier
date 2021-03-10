import React from 'react'
import { FormElement } from './styles'

type FormProps = React.FormHTMLAttributes<HTMLFormElement>

const Form: React.FC<FormProps> = (props: FormProps) => {
  const { children, ...rest } = props
  return (
    <FormElement {...rest}>
      {children}
    </FormElement>
  )
}

export default Form
