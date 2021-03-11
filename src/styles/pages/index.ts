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
  min-width: 450px;
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
  background-color: #6B5FBE;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ResultContent = styled.div`
  margin-left: 50px;
  height: max-content;
  width: max-content;
  margin-top: -100px;
`

export const ResultBox = styled.div`
  background-color: #877cdd;
  border-radius: 8px;
  width: 420px;
  height: 420px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  color: #f0f5f9;
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
`

export const ResultTitle = styled.h1`
  color: #f0f5f9;
  font-size: 26px;
  margin: 0 0 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`

export const ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Image = styled.img`
  height: 260px;
  width: auto;
`
