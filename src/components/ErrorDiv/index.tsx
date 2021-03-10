import React, { ReactChild, ReactChildren } from 'react';
import { Div } from './styles'

interface DivProps {
  children: ReactChild | ReactChildren
}

function Error ({ children } : DivProps) {
  return(
    <Div>
      <span className="material-icons">&#xe88e;</span>
      {children}
    </Div>
  )
}


export default Error;