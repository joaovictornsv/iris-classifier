import styled from 'styled-components'

export const Div = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 90%;
  width: 100%;
  margin-top: 8px;

  .icon {
    color: ${props => props.theme.font.primary};
    margin-left: 4px;
  }

  .sun {
    font-size: 24px;
  }

  .moon {
    font-size: 20px;
  }

  .lottie {
    svg {
      path {
        stroke: ${props => props.theme.font.primary};
        stroke-width: 1.5px;
      }
    }
  }
`
