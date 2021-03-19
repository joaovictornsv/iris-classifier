import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid #6B5FBE;
  background-color: #f0f5f9;
  color: #1e2022;
  height: 36px;
  padding: 12px;
  width: 300px;
  border-radius: 8px;
  outline: none;
  font-size: 18px;

  &:focus {
    border: 1px solid #1e2022;
  }
`
export const Label = styled.label`
  color: #1e2022;
  font-size: 18px;
  margin-bottom: 5px;
  font-family: 'Montserrat', sans-serif;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: max-content;
`
