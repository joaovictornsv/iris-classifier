import styled from 'styled-components'

export const Input = styled.input`
  border: 1px solid #440a67;
  background-color: #f0f5f9;
  color: #1e2022;
  height: 46px;
  padding: 12px;
  width: 300px;
  border-radius: 8px;
  outline: none;
  font-size: 18px;

  &:focus {
    border: 1px solid #1e2022;
  }
`
export const Label = styled.span`
  color: #1e2022;
  font-size: 22px;
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 20px;
  width: max-content;
`
