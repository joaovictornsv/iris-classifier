import React from 'react'
import Result from '../../../styles/pages/Result'

import irisSetosa from '../../../assets/images/iris_setosa.jpg'
import irisVersicolor from '../../../assets/images/iris_versicolor.jpg'
import irisVirginica from '../../../assets/images/iris_virginica.jpg'

interface IReady {
  result: string
}

interface ImagesCollection {
  [index: string]: {
    src: string;
    alt?: string
  };
}

const irisImages: ImagesCollection = {
  setosa: {
    src: irisSetosa,
    alt: 'Iris Setosa'
  },
  versicolor: {
    src: irisVersicolor,
    alt: 'Iris Versicolor'
  },
  virginica: {
    src: irisVirginica,
    alt: 'Iris Virginica'
  }
}

const Ready = ({ result }: IReady): JSX.Element => {
  return (
    <>
      <Result.Box.Title>
        {result.toUpperCase()}
      </Result.Box.Title>
      <Result.ImageContainer>

        <Result.ImageContainer.Image
          src={irisImages[result].src}
          alt={irisImages[result].alt}
          draggable={false}
        />

      </Result.ImageContainer>
    </>
  )
}

export default Ready
