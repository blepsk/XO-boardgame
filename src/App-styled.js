import styled, { css } from 'styled-components'

export const SquareStyled = styled.button`
  background: #293462;
  color: #f24c4c;
  border: 2px solid black;
  float: left;
  font-size: 42px;
  font-weight: bold;
  line-height: 34px;
  height: 75px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 75px;
  &:focus {
    outline: none;
  }
`
export const BoardRow = styled.div`
  display: flex;
  :after {
    clear: both;
    content: '';
    display: table;
  }
`
export const GameBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`

export const GameInfo = styled.div`
  margin-left: 20px;
`
export const Button = styled.button`
  background-color: white;
  color: #f24c4c;
  font-size: 15px;
  border: 2px solid #293462;
  border-radius: 5px;
  height: 30px;
  margin: 3px;
  &:hover {
    background-color: #293462;
    color: #f24c4c;
    cursor: pointer;
  }
  ${(props) =>
    props.primary &&
    css`
      background: #ec9b3b;
      border: 3px solid #f24c4c;
      color: black;
      margin: 15px;
      &:hover {
        background-color: #f24c4c;
        color: #f24c4c;
        cursor: pointer;
      }
    `}
  ${(props) =>
    props.reset &&
    css`
      margin: 15px;
    `}
`
export const Input = styled.input`
  height: 25px;
  width: 250px;
  border-color: rgba(185, 185, 185, 0.301);
  border-radius: 7px;
  margin: 5px;
`
