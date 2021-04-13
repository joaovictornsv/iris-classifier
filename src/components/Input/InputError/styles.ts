import styled from 'styled-components'

const InputErrorBase = styled.div`
  color: ${props => props.theme.error.text};
  padding: 4px 4px 0px;
  font-size: 13px;
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: left;
  height: 18px;
`

export default InputErrorBase
