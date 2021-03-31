import React, { FormEvent, useState, lazy, Suspense } from 'react'
import * as yup from 'yup'

import { Input, ButtonSubmit, ThemeSwitch } from '../components'
import Main from '../styles/pages/Main'
import Form from '../styles/pages/Form'
import Result from '../styles/pages/Result'

import { predictClass } from '../services/api'

import Empty from '../screens/Empty'

// Interfaces

interface IHome {
  toggleTheme(): void;
}

// Global consts

const screenStatesMessages = {
  empty: 'empty',
  loading: 'loading',
  ready: 'ready',
  error: 'error'
}

// Secondary Screens

const ErrorDiv = lazy(() => import('../components/ErrorDiv'))
const Ready = lazy(() => import('../screens/Ready'))
const Loading = lazy(() => import('../screens/Loading'))
const ErrorScreen = lazy(() => import('../screens/ErrorScreen'))

const FallbackScreen = (): JSX.Element => {
  return (
    <Result.Box.Title>
      Rendering...
    </Result.Box.Title>
  )
}

// Principal Screen

export default function Home({ toggleTheme }: IHome): JSX.Element {
  const [screenState, setScreenState] = useState<string>(screenStatesMessages.empty)

  const [sepalLength, setSepalLength] = useState<string>('')
  const [sepalWidth, setSepalWidth] = useState<string>('')
  const [petalLength, setPetalLength] = useState<string>('')
  const [petalWidth, setPetalWidth] = useState<string>('')

  const [result, setResult] = useState<string>('')
  const [submited, setSubmited] = useState<boolean>(false)
  const [errors, setErrors] = useState<string>('')

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

        const response = (await predictClass(dataRequest)).data.type

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
        <ThemeSwitch
          onChange={toggleTheme}
        />
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

            {submited && errors && (
               <Suspense fallback={<FallbackScreen />}>
                <ErrorDiv error={errors.substring(17)} />
              </Suspense>
            )
            }

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

              {screenState === screenStatesMessages.loading && (
                <Suspense fallback={<FallbackScreen />}>
                  <Loading />
                </Suspense>
              )}

              {screenState === screenStatesMessages.ready && (
                <Suspense fallback={<FallbackScreen />}>
                  <Ready result={result} />
                </Suspense>
              )}

              {screenState === screenStatesMessages.error && (
                <Suspense fallback={<FallbackScreen />}>
                  <ErrorScreen />
                </Suspense>
              )}
           </Result.Box>

        </Result.Content>
      </Result>

    </Main>
  )
}
