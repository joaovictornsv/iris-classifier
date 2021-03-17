import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: row;

  @media(max-width: 900px) {
    flex-direction: column;
  }
`

export default Main
