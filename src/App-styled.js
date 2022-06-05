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
  :after {
    clear: both;
    content: '';
    display: table;
  }
`
export const GameBox = styled.div`
  display: flex;
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
      &:hover {
        background-color: #f24c4c;
        color: #f24c4c;
        cursor: pointer;
      }
    `}
`
