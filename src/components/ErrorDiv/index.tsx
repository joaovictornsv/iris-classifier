import React, { ReactChild, ReactChildren } from 'react'
import { MdError } from 'react-icons/md'
import { Div } from './styles'

interface DivProps {
  children: ReactChild | ReactChildren
}

const ErrorDiv: React.FC<DivProps> = ({ children } : DivProps): JSX.Element => {
  return (
    <Div>
      <MdError className="icon"/>
      {children}
    </Div>
  )
}

export default ErrorDiv
