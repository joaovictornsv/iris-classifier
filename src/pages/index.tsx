import React, { FormEvent, useState, useEffect } from 'react'
import * as yup from 'yup'
import { Lottie } from '@crello/react-lottie'
import ButtonSubmit from '../components/ButtonSubmit'
import Input from '../components/Input'
import ErrorDiv from '../components/ErrorDiv'
import Main from '../styles/pages/Main'
import Form from '../styles/pages/Form'
import Result from '../styles/pages/Result'

import irisSetosa from '../assets/images/iris_setosa.jpg'
import irisVersicolor from '../assets/images/iris_versicolor.jpg'
import irisVirginica from '../assets/images/iris_virginica.jpg'

import loadingAnimation from '../assets/animations/loading.json'

import api from '../services/api'

// Interfaces

interface ImagesCollection {
  [index: string]: {
    src: string;
    alt?: string
  };
}

interface IReady {
  result: string
}

interface IShowError {
  error: string;
}

// Global consts

const screenStatesMessages = {
  empty: 'Please fill out the form to predict the class',
  loading: 'Loading',
  ready: 'The predict is',
  error: 'An error occurred'
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

// Secondary Screens

const ShowError = ({ error }: IShowError): JSX.Element => {
  return (
    <ErrorDiv>
      {error}
    </ErrorDiv>
  )
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

const Empty = (): JSX.Element => {
  return (
    <Result.Box.Title>
      {screenStatesMessages.empty}
    </Result.Box.Title>
  )
}

const Loading = (): JSX.Element => {
  return (
    <>
      <Result.Box.Title>
        {screenStatesMessages.loading}
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

const ErrorScreen = (): JSX.Element => {
  return (
    <Result.Box.Title>
      {screenStatesMessages.error}
    </Result.Box.Title>
  )
}

// Principal Screen

export default function Home(): JSX.Element {
  const [screenState, setScreenState] = useState<string>(screenStatesMessages.empty)

  const [sepalLength, setSepalLength] = useState<string>('')
  const [sepalWidth, setSepalWidth] = useState<string>('')
  const [petalLength, setPetalLength] = useState<string>('')
  const [petalWidth, setPetalWidth] = useState<string>('')

  const [result, setResult] = useState<string>('')
  const [submited, setSubmited] = useState<boolean>(false)
  const [errors, setErrors] = useState<string>('')

  useEffect(() => {
    api.get('/')
      .then(response => console.log(response.data))
      .catch(err => console.error(err))
  }, [])

  const validation = yup.object().shape({
    sepal_length: yup.number().min(0).required().typeError('Sepal length must be a number'),
    sepal_width: yup.number().min(0).required().typeError('Sepal width must be a number'),
    petal_length: yup.number().min(0).required().typeError('Petal length must be a number'),
    petal_width: yup.number().min(0).required().typeError('Petal width must be a number')
  })

  async function handleSubmit(e: FormEvent) {
    setScreenState(screenStatesMessages.empty)

    e.preventDefault()
    setSubmited(true)

    const dataRequest = {
      sepal_length: Number(sepalLength),
      sepal_width: Number(sepalWidth),
      petal_length: Number(petalLength),
      petal_width: Number(petalWidth)
    }

    let dataValidated = false
    await validation.validate(dataRequest)
      .then(() => {
        dataValidated = true
        setErrors('')
      })
      .catch((err) => {
        dataValidated = false
        setErrors(err.toString())
      })

    if (dataValidated) {
      try {
        setScreenState(screenStatesMessages.loading)
        window.scrollTo(0, document.body.scrollHeight)

        const response = await (await api.post('/api/predict', dataRequest)).data.type

        if (!response) {
          throw Error('An error occurred')
        }

        setResult(response)
        setScreenState(screenStatesMessages.ready)
      } catch {
        setScreenState(screenStatesMessages.error)
      }
    }
  }

  return (
    <Main>

      <Form.Container>
        <Form.Content>
          <Form.Title>Iris Classifier</Form.Title>

          <Form onSubmit={handleSubmit}>
            <Input
              id="input_sepalLength"
              key="input_sepalLength"
              type="text"
              label="Sepal length"
              value={sepalLength}
              onChange={(e) => setSepalLength(e.target.value.replace(',', '.'))}
              required
            />

            <Input
              key="input_sepalWidth"
              id="input_sepalWidth"
              type="text"
              label="Sepal width"
              value={sepalWidth}
              onChange={(e) => setSepalWidth(e.target.value.replace(',', '.'))}
              required
            />

            <Input
              key="input_petalLength"
              id="input_petalLength"
              type="text"
              label="Petal length"
              value={petalLength}
              onChange={(e) => setPetalLength(e.target.value.replace(',', '.'))}
              required
            />

            <Input
              key="input_petalWidth"
              id="input_petalWidth"
              type="text"
              label="Petal width"
              value={petalWidth}
              onChange={(e) => setPetalWidth(e.target.value.replace(',', '.'))}
              required
            />

            {submited && errors && <ShowError error={errors.substring(17)} />}

            <ButtonSubmit type="submit">
              Predict
            </ButtonSubmit>

          </Form>
        </Form.Content>
      </Form.Container>

      <Result id="result">
        <Result.Content>
          <Result.Title>Result</Result.Title>

            <Result.Box>

              {screenState === screenStatesMessages.empty && <Empty/>}

              {screenState === screenStatesMessages.loading && <Loading/>}

              {screenState === screenStatesMessages.ready && <Ready result={result} />}

              {screenState === screenStatesMessages.error && <ErrorScreen />}

           </Result.Box>

        </Result.Content>
      </Result>

    </Main>
  )
}
