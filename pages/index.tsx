// eslint-disable-next-line no-use-before-define
import React, { FormEvent } from 'react';
import ButtonSubmit from '../src/components/ButtonSubmit';
import Form from '../src/components/Form';
import Input from '../src/components/Input';

export default function Home() {
  const categories = ["Sepal length", "Sepal width", "Petal length", "Petal width"]

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        {categories.map(category => {
          return <Input type="number" step={0.1} min={0} label={category} required/>
        })}

        <ButtonSubmit label="Predict" type="submit"/>
      </Form>
    </>
  );
}
