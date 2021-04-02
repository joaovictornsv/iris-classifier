/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { DefaultTheme, StyledComponentBase } from 'styled-components'
import { Form } from 'formik'
interface IForm extends StyledComponentBase<any, DefaultTheme> {
  Container?: any;
  Content?: any;
  Title?: any;
}

const FormBase: IForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  width: 100%;
  max-width: 400px
`

FormBase.Container = styled.div`
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  width: 40%;
  min-width: 420px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-height: 450px) {
    padding: 20px 0;
  }

  @media(max-width: 900px) {
    width: 100%;
    min-width: max-content;
    max-width: 100%;
    height: 600px;
    min-height: max-content;
  }
`

FormBase.Content = styled.div`
  height: max-content;
  width: max-content;
  margin: auto 0;
  padding-bottom: 40px
`

FormBase.Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 30px;
  font-family: 'Montserrat', sans-serif;
`

export default FormBase
