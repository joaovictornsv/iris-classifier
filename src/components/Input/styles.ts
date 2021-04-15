/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { DefaultTheme, StyledComponentBase } from 'styled-components'
import { Field } from 'formik'

interface IInputBase extends StyledComponentBase<any, DefaultTheme> {
  Label?: any;
  Container?: any;
}

const InputBase: IInputBase = styled(Field)`
  border: 1px solid ${props => props.invalid ? props => props.theme.error.text : props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.font.primary};
  height: 36px;
  padding: 12px;
  width: 300px;
  border-radius: 8px;
  outline: none;
  font-size: 18px;

  &:focus {
    border: 1px solid ${props => props.theme.font.primary};
  }

  &:invalid {
    border: 1px solid ${props => props.theme.error.text} !important;
  }
`

InputBase.Label = styled.label`
  color: ${props => props.theme.font.primary};
  font-size: 16px;
  margin-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
`

InputBase.Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  &:nth-child(1) {
    margin-top: 0;
  }
  width: max-content;
`

export default InputBase
