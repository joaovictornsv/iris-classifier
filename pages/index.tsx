// eslint-disable-next-line no-use-before-define
import React, { FormEvent, useState } from 'react';
import * as yup from 'yup';
import ButtonSubmit from '../src/components/ButtonSubmit';
import Form from '../src/components/Form';
import Input from '../src/components/Input';
import ErrorDiv from '../src/components/ErrorDiv';
import {
  Main,
  FormContainer,
  FormContent,
  ResultContainer,
  ResultContent,
  Title,
  ImageContainer,
  Image
} from '../src/styles/pages'

import api from '../src/services/api';

interface ImageProps {
  src: string;
  alt: string
}

interface ImagesCollection {
  [index: string]: any | ImageProps;
}

export default function Home() {
  const [ screenState, setScreenState ] = useState<string>('You will see the result here')

  const [ sepalLength, setSepalLength ] = useState<string>('');
  const [ sepalWidth, setSepalWidth ] = useState<string>('');
  const [ petalLength, setPetalLength ] = useState<string>('');
  const [ petalWidth, setPetalWidth ] = useState<string>('');

  const [ result, setResult ] = useState<string>('')
  const [formDataIsValid, setFormDataIsValid] = useState<boolean>(false)
  const [submited, setSubmited] = useState<boolean>(false)
  const [errors, setErrors] = useState<string>('')

  const validation = yup.object().shape({
    sepal_length: yup.number().min(0).required().typeError('Sepal length must be a number'),
    sepal_width: yup.number().min(0).required().typeError('Sepal width must be a number'),
    petal_length: yup.number().min(0).required().typeError('Petal length must be a number'),
    petal_width: yup.number().min(0).required().typeError('Petal width must be a number'),
  })

  const screenStatesMessages = {
    empty: 'You will see the result here',
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
 

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmited(true);

    const dataRequest = {
      sepal_length: Number(sepalLength),
      sepal_width: Number(sepalWidth),
      petal_length: Number(petalLength),
      petal_width: Number(petalWidth),
    }

    setResult('')
    setScreenState(screenStatesMessages.loading)

    await validation.validate(dataRequest)
      .then(() => {
        setFormDataIsValid(true)
        setErrors('')
      })
      .catch((err) => {
        setErrors(err.toString())
        setFormDataIsValid(false)
      });

    if (formDataIsValid) {
      try{
        const response = await (await api.post('/predict', dataRequest)).data.type

        if (!response) {
          throw Error('An error occurred')
        }

        setResult(response)
        setScreenState(screenStatesMessages.ready)
      }
      

      catch {
        setScreenState(screenStatesMessages.error)
      }
    }
      
  }

  return (
    <Main>
      <FormContainer>
        <FormContent>
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

            <ButtonSubmit label="Predict" type="submit"/>
            
          </Form>
        </FormContent>
      </FormContainer>

      <ResultContainer>
        <ResultContent>
          <Title>Resultado</Title>
          <div>{screenState}</div>
          {result && (
            <>
            <Title>{result.toUpperCase()}</Title>
              <ImageContainer>
                <Image
                  src={irisImages[result].src}
                  alt={irisImages[result].alt}
                />
              </ImageContainer>
            </>
          )}
          
        </ResultContent>
      </ResultContainer>
    </Main>
  );
}
