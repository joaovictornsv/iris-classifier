/* eslint-disable @typescript-eslint/no-explicit-any */
import styled, { DefaultTheme, StyledComponentBase } from 'styled-components'

interface IResult extends StyledComponentBase<any, DefaultTheme> {
  Content?: any;
  Title?: any;
  Box?: any | {
    Title?: any;
  };
  ImageContainer?: any | {
    Image?: any;
  };
}

const Result: IResult = styled.div`
  background-color: ${({ theme }) => theme.title === 'light'
                      ? ({ theme }) => theme.colors.primary
                      : '#2d2f33'};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;

  @media(max-height: 450px) {
    justify-content: flex-start;
  }

  @media(max-width: 900px) {
    align-items: center;
    justify-content: flex-start;
    min-height: max-content;
    padding: 50px 0;
  }
`

Result.Content = styled.div`
  margin-left: 50px;
  height: max-content;
  width: max-content;

  @media(max-height: 650px) {
    margin-top: 0px;
    margin-left: 30px;
  }

  @media(max-width: 1000px) {
    flex-direction: column;
    margin-left: 30px;
    margin-top: 0px;
  }

  @media(max-width: 900px) {
    margin-left: 0px;
  }
`

Result.Box = styled.div`
  background-color: ${props => props.theme.colors.primaryLight};
  border-radius: 8px;
  width: 420px;
  max-width: 85vw;
  height: 420px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

Result.Title = styled.h1`
  color: #f0f5f9;
  font-size: 26px;
  margin-top: 0;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
`

Result.Box.Title = styled.h1`
  color: #f0f5f9;
  font-size: 26px;
  margin: 0 0 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
`

Result.ImageContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
`

Result.ImageContainer.Image = styled.img`
  height: 260px;
  width: auto;
`

export default Result
