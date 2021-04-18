import React from 'react'
import { Lottie } from '@crello/react-lottie'

import animation404 from '../../../assets/animations/404.json'
import { Container, Message } from './styles'

const Widget404 = (): JSX.Element => {
  return (
    <Container>
      <Lottie
        width="150px"
        height="150px"
        className="lottie-container basic lottie"
        config={{ animationData: animation404, loop: true, autoplay: true }}
      />

      <Message>
        Está perdido? Pegue o caminho de volta clicando <a href="https://iris-classifier.vercel.app">aqui</a>.
      </Message>
    </Container>
  )
}

export default Widget404
