import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: row;

  @media(max-width: 900px) {
    flex-direction: column;
  }
`

export const FormContainer = styled.div`
  background-color: #f0f5f9;
  min-height: 100vh;
  width: 40%;
  min-width: 420px;
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-height: 450px) {
    padding: 20px 0;
    align-items: flex-start;
  }

  @media(max-width: 900px) {
    width: 100%;
    min-width: max-content;
    max-width: 100%;
    height: 600px;
    min-height: max-content;
  }
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
  padding: 20px 0;

  @media(max-height: 450px) {
    justify-content: flex-start;
  }

  @media(max-width: 900px) {
    align-items: center;
    justify-content: flex-start;
    min-height: max-content;
    padding: 50px 0;
  }
`

export const ResultContent = styled.div`
  margin-left: 50px;
  height: max-content;
  width: max-content;

  @media(max-height: 650px) {
    margin-top: 0px;
    margin-left: 30px;
  }

  @media(max-width: 1000px) {
    flex-direction: column;
    margin-left: 30px;
    margin-top: 0px;
  }

  @media(max-width: 900px) {
    margin-left: 0px;
  }
`

export const ResultBox = styled.div`
  background-color: #877cdd;
  border-radius: 8px;
  width: 420px;
  max-width: 85vw;
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

export const FormTitle = styled.h1`
  color: #6B5FBE;
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
