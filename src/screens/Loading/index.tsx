import React from 'react'
import Result from '../../styles/pages/Result'
import { Lottie } from '@crello/react-lottie'

import loadingAnimation from '../../assets/animations/loading.json'

const Loading = (): JSX.Element => {
  return (
    <>
      <Result.Box.Title>
        Loading
      </Result.Box.Title>
      <Result.ImageContainer>
      <Lottie
        width="150px"
        height="150px"
        className="lottie-container basic"
        config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
      />
      </Result.ImageContainer>
    </>
  )
}

export default Loading
