import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: row;
`

export const FormContainer = styled.div`
  background-color: #f0f5f9;
  height: 100%;
  min-height: 100vh;
  width: 40%;
  min-width: 500px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormContent = styled.div`
  height: max-content;
  width: max-content;
`

export const ResultContainer = styled.div`
  background-color: #93329e;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`

export const ResultContent = styled.div`
  margin-top: 50px;
  margin-left: 50px;
  height: max-content;
  width: max-content;
`

export const Title = styled.h1`
  color: #f0f5f9;
  font-size: 46px;
  font-family: 'Montserrat', sans-serif;
`

export const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 300px;
  width: auto;
`
