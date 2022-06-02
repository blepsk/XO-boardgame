import styled from 'styled-components'

export const SquareStyled = styled.button`
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 34px;
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
