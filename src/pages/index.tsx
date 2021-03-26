import React, { FormEvent, useState, lazy, Suspense } from 'react'
import * as yup from 'yup'
import Switch from '@material-ui/core/Switch'

import { Input, ButtonSubmit, ErrorDiv } from '../components'
import Main from '../styles/pages/Main'
import Form from '../styles/pages/Form'
import Result from '../styles/pages/Result'

import { predictClass } from '../services/api'

import Empty from '../screens/Empty'

// Interfaces

interface IShowError {
  error: string;
}

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

const ShowError = ({ error }: IShowError): JSX.Element => {
  return (
    <ErrorDiv>
      {error}
    </ErrorDiv>
  )
}

const Ready = lazy(() => import('../screens/Ready'))
const Loading = lazy(() => import('../screens/Loading'))
const ErrorScreen = lazy(() => import('../screens/ErrorScreen'))

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
        <Switch
          color='default'
          disableRipple
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

                {screenState === screenStatesMessages.loading && (
                  <Suspense fallback={<Result.Box.Title>Rendering...</Result.Box.Title>}>
                    <Loading />
                  </Suspense>
                )}

                {screenState === screenStatesMessages.ready && (
                  <Suspense fallback={<Result.Box.Title>Rendering...</Result.Box.Title>}>
                    <Ready result={result} />
                  </Suspense>
                )}

                {screenState === screenStatesMessages.error && (
                  <Suspense fallback={<Result.Box.Title>Rendering...</Result.Box.Title>}>
                    <ErrorScreen />
                  </Suspense>
                )}
           </Result.Box>

        </Result.Content>
      </Result>

    </Main>
  )
}
