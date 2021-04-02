import styled from 'styled-components'

const InputErrorBase = styled.div`
  color: ${props => props.theme.error.text};
  padding: 8px 4px 0px;
  font-size: 14px;
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: left;
`

export default InputErrorBase
