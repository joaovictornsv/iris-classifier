import styled from 'styled-components'

export const Div = styled.div`
  color: ${props => props.theme.error.text};
  padding: 8px 4px 0px;
  font-size: 14px;
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: left;

  .icon {
    font-size: 18px;
    margin-right: 6px;
  }
`
