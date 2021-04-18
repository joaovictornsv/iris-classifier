/* eslint-disable camelcase */
import React, { useState, lazy, Suspense } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'

import { Input, ButtonSubmit, ThemeSwitch } from '../components'
import Main from '../styles/pages/Main'
import Form from '../styles/pages/Form'
import Result from '../styles/pages/Result'
import ParticlesBackground from '../styles/pages/Result/Particles/index.jsx'

import { predictClass } from '../services/api'

import Empty from '../screens/Empty'

// Interfaces

interface IHome {
  toggleTheme(value: string): void;
  actualTheme: string;
}

interface FormValues {
  sepal_length: string,
  sepal_width: string,
  petal_length: string,
  petal_width: string
}

// Global consts

const screenStatesMessages = {
  empty: 'empty',
  loading: 'loading',
  ready: 'ready',
  error: 'error'
}

// Secondary Screens

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

export default function Home({ toggleTheme, actualTheme }: IHome): JSX.Element {
  const [screenState, setScreenState] = useState<string>(screenStatesMessages.empty)

  const [result, setResult] = useState<string>('')

  const initialFormValues: FormValues = {
    sepal_length: '',
    sepal_width: '',
    petal_length: '',
    petal_width: ''
  }

  const validation = yup.object().shape({
    sepal_length: yup.number().min(0, 'Number must be greater than or equal to 0').required('This field is required').typeError('This field must be a number'),
    sepal_width: yup.number().min(0, 'Number must be greater than or equal to 0').required('This field is required').typeError('This field must be a number'),
    petal_length: yup.number().min(0, 'Number must be greater than or equal to 0').required('This field is required').typeError('This field must be a number'),
    petal_width: yup.number().min(0, 'Number must be greater than or equal to 0').required('This field is required').typeError('This field must be a number')
  })

  async function handleSubmit(values: FormValues) {
    setScreenState(screenStatesMessages.empty)

    const dataRequest = {
      sepal_length: Number(values.sepal_length),
      sepal_width: Number(values.sepal_width),
      petal_length: Number(values.petal_length),
      petal_width: Number(values.petal_width)
    }

    let dataValidated = false
    await validation.validate(dataRequest)
      .then(() => {
        dataValidated = true
        // setErrors('')
      })
      .catch(() => {
        dataValidated = false
        // setErrors(err.toString())
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
          actualTheme={actualTheme}
        />
        <Form.Content>
          <Form.Title>Iris Classifier</Form.Title>

            <Formik
              initialValues={initialFormValues}
              validationSchema={validation}
              onSubmit={ values => handleSubmit(values)}
              validateOnChange={false}
              validateOnBlur={false}
            >
              {({ errors, values }) => (
              <Form translate="en" >
                <Input
                  name="sepal_length"
                  type="text"
                  label="Sepal Length"
                  value={values.sepal_length}
                  errors={errors?.sepal_length}
                />

                <Input
                  name="sepal_width"
                  type="text"
                  label="Sepal width"
                  value={values.sepal_width}
                  errors={errors?.sepal_width}
                />

                <Input
                  name="petal_length"
                  type="text"
                  label="Petal length"
                  value={values.petal_length}
                  errors={errors?.petal_length}
                />

                <Input
                  name="petal_width"
                  type="text"
                  label="Petal width"
                  value={values.petal_width}
                  errors={errors?.petal_width}
                />

                {/* {submited && errors && (
                  <Suspense fallback={<FallbackScreen />}>
                    <ErrorDiv error={errors.substring(17)} />
                  </Suspense>
                )
                } */}

                <ButtonSubmit type="submit">
                  Predict
                </ButtonSubmit>

              </Form>
              )}
            </Formik>
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
        <ParticlesBackground />
      </Result>

    </Main>
  )
}
