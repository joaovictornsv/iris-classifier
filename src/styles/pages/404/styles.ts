import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Message = styled.p`
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }
`
