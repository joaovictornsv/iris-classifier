import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background};
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

  .lottie {
    svg {
      path {
        stroke: ${props => props.theme.font.primary};
        fill: ${props => props.theme.font.primary};
      }
    }
  }
  
`
export const Message = styled.p`
  margin: 0;
  padding: 0;
  color: ${props => props.theme.font.primary};

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${props => props.theme.colors.primary};
  }
`
