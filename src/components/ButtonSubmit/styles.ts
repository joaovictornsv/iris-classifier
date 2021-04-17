import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => props.theme.colors.submit};
  color: ${props => props.theme.font.primary};
  font-size: 18px;
  font-weight: bold;
  outline: none;
  border: none;
  width: 150px;
  height: 36px;
  margin: 14px 0px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${props => props.theme.colors.submitDark};
  }
`
