import React, { ReactChild, ReactChildren } from 'react'
import { MdError } from 'react-icons/md'
import { Div } from './styles'

interface DivProps {
  error?: string;
  children?: ReactChild | ReactChildren
}

const ErrorDiv: React.FC<DivProps> = ({ children, error } : DivProps): JSX.Element => {
  return (
    <Div>
      <MdError className="icon"/>
      {children && children}
      {error && error}
    </Div>
  )
}

export default ErrorDiv
