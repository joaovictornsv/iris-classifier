import React, { FormEvent, useState, useEffect } from 'react'
import * as yup from 'yup'
import ButtonSubmit from '../components/ButtonSubmit'
import Form from '../components/Form'
import Input from '../components/Input'
import ErrorDiv from '../components/ErrorDiv'
import {
  Main,
  FormContainer,
  FormContent,
  FormTitle,
  ResultContainer,
  ResultContent,
  ResultBox,
  ResultTitle,
  Title,
  ImageContainer,
  Image
} from '../styles/pages'

import api from '../services/api'

import { useLoading, Bars } from '@agney/react-loading'

interface ImageProps {
  src: string;
  alt: string
}

interface ImagesCollection {
  [index: string]: ImageProps;
}

export default function Home(): JSX.Element {
  const [screenState, setScreenState] = useState<string>('Please fill out the form to predict the class')

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

  const screenStatesMessages = {
    empty: 'Please fill out the form to predict the class',
    loading: 'Loading',
    ready: 'The predict is',
    error: 'An error occurred'
  }

  const irisImages: ImagesCollection = {
    setosa: {
      src: '/images/iris_setosa.jpg',
      alt: 'Iris Setosa'
    },
    versicolor: {
      src: '/images/iris_versicolor.jpg',
      alt: 'Iris Versicolor'
    },
    virginica: {
      src: '/images/iris_virginica.jpg',
      alt: 'Iris Virginica'
    }
  }

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <Bars width="100" color="white"/>
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
      <FormContainer>
        <FormContent>
          <FormTitle>Iris Classifier</FormTitle>

          <Form onSubmit={handleSubmit}>
            <Input
              key="input_sepalLength"
              type="text"
              label="Sepal length"
              value={sepalLength}
              onChange={(e) => setSepalLength(e.target.value.replace(',', '.'))}
              required
            />

            <Input
              key="input_sepalWidth"
              type="text"
              label="Sepal width"
              value={sepalWidth}
              onChange={(e) => setSepalWidth(e.target.value.replace(',', '.'))}
              required
            />

            <Input
              key="input_petalLength"
              type="text"
              label="Petal length"
              value={petalLength}
              onChange={(e) => setPetalLength(e.target.value.replace(',', '.'))}
              required
            />

            <Input
              key="input_petalWidth"
              type="text"
              label="Petal width"
              value={petalWidth}
              onChange={(e) => setPetalWidth(e.target.value.replace(',', '.'))}
              required
            />

            {submited && errors &&
              <ErrorDiv>
                {errors.substring(17)}
              </ErrorDiv>}

            <ButtonSubmit type="submit">
              Predict
            </ButtonSubmit>

          </Form>
        </FormContent>
      </FormContainer>

      <ResultContainer id="result">
        <ResultContent>
          <Title>Result</Title>
            <ResultBox>

            {screenState === screenStatesMessages.empty &&
                (
                  <ResultTitle>
                    {screenState}
                  </ResultTitle>
                )
                }

              {screenState === screenStatesMessages.loading &&
                (
                  <>
                    <ResultTitle>
                      {screenState}
                    </ResultTitle>
                    <ImageContainer>
                      <section {...containerProps}>
                        {indicatorEl}
                      </section>
                    </ImageContainer>
                  </>
                )
                }
                {screenState === screenStatesMessages.ready &&
                (
                  <>
                    <ResultTitle>
                      {result.toUpperCase()}
                    </ResultTitle>
                    <ImageContainer>

                      <Image
                        src={irisImages[result].src}
                        alt={irisImages[result].alt}
                        draggable={false}
                      />

                    </ImageContainer>
                  </>
                )}
           </ResultBox>

        </ResultContent>
      </ResultContainer>
    </Main>
  )
}
