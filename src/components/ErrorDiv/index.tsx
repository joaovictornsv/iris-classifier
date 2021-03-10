import React, { ReactChild, ReactChildren } from 'react'
import { Div, Icon } from './styles'

interface DivProps {
  children: ReactChild | ReactChildren
}

function Error({ children } : DivProps): JSX.Element {
  return (
    <Div>
      <Icon className="material-icons">&#xe88e;</Icon>
      {children}
    </Div>
  )
}

export default Error
