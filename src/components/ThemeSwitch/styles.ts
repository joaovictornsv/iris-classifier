import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 40px;
  max-width: 90%;
  width: 100%;
  margin: 10px 0 30px;

  @media(max-width: 900px) {
    justify-content: center;
  }
`

export const SwitchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  background-color: ${props => props.theme.colors.primary};
  padding: 10px;
  border-radius: 8px;
`

export const Label = styled.label`
  font-size: 18px;
  color: ${props => props.theme.font.primary};
`
