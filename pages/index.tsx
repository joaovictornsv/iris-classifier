// eslint-disable-next-line no-use-before-define
import React, { FormEvent, useState } from 'react';
import ButtonSubmit from '../src/components/ButtonSubmit';
import Form from '../src/components/Form';
import Input from '../src/components/Input';
import {
  Main,
  FormContainer,
  FormContent,
  ResultContainer,
  ResultContent,
  Title,
  Image
} from '../src/styles/pages'

import api from '../src/services/api'

export default function Home() {
  const [ sepalLength, setSepalLength ] = useState<number>(0);
  const [ sepalWidth, setSepalWidth ] = useState<number>(0);
  const [ petalLength, setPetalLength ] = useState<number>(0);
  const [ petalWidth, setPetalWidth ] = useState<number>(0);

  const [ result, setResult ] = useState<string | null >(null)

  const irisImages = {
    setosa: {
      src: '/images/iris_setosa.jpg',
      alt: 'Iris Setosa'
    },
    versicolor: '/images/iris_versicolor.jpg',
    virginica: '/images/iris_virginica.jpg'
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const data = {
      sepal_length: sepalLength,
      sepal_width: sepalWidth,
      petal_length: petalLength,
      petal_width: petalWidth
    }
    console.log(data)

    await api.post('/predict', data)
      .then(response => console.log(response.data))
  }

  return (
    <Main>
      <FormContainer>
        <FormContent>
          <Form onSubmit={handleSubmit}>
            <Input
              key="input_sepalLength"
              type="number" 
              step={0.1}
              min={0} 
              label="Sepal length"
              value={sepalLength}
              onChange={(e) => setSepalLength(Number(e.target.value))}
              required
            />

            <Input
              key="input_sepalWidth"
              type="number" 
              step={0.1}
              min={0} 
              label="Sepal width"
              value={sepalWidth}
              onChange={(e) => setSepalWidth(Number(e.target.value))}
              required
            />

            <Input
              key="input_petalLength"
              type="number" 
              step={0.1}
              min={0} 
              label="Petal length"
              value={petalLength}
              onChange={(e) => setPetalLength(Number(e.target.value))}
              required
            />

            <Input
              key="input_petalWidth"
              type="number" 
              step={0.1}
              min={0} 
              label="Petal width"
              value={petalWidth}
              onChange={(e) => setPetalWidth(Number(e.target.value))}
              required
            />

            <ButtonSubmit label="Predict" type="submit"/>
          </Form>
        </FormContent>
      </FormContainer>

      <ResultContainer>
        <ResultContent>
          <Title>Resultado</Title>
          <Image src={irisImages.setosa.src}
            alt={irisImages.setosa.alt}
          />
          {result && <h1>{result}</h1>}
        </ResultContent>
      </ResultContainer>
    </Main>
  );
}
