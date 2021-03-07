// eslint-disable-next-line no-use-before-define
import React from 'react';
import styled from 'styled-components';
import Input from '../src/components/Input';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

export default function Home() {
  return (
    <>
      <Title>My page</Title>
      <Input label="Categoria 1" />
    </>
  );
}
