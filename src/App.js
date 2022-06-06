import './App.css'
import React from 'react'
import { useRecoilState } from 'recoil'
import {
  historyState as historyAtom,
  stepNumberState as stepNumberAtom,
  xIsNextState as xIsNextAtom,
  rankBoardState as rankBoardAtom,
  winNameState as winNameAtom,
} from './Atom'
import { SquareStyled, BoardRow, GameBox, GameInfo, Button, Input } from './App-styled'
import { Link } from 'react-router-dom'

function Square(props) {
  return <SquareStyled onClick={props.onClick}>{props.value}</SquareStyled>
}

function Board(props) {
  const renderSquare = (i) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />
  }

  return (
    <div>
      <BoardRow>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </BoardRow>
      <BoardRow>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </BoardRow>
      <BoardRow>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </BoardRow>
      <Button primary>
        <Link to="/Profile">Go back to Profile</Link>
      </Button>
    </div>
  )
}

function Game() {
  const [history, SetHistory] = useRecoilState(historyAtom)
  const [stepNumber, SetStepNumber] = useRecoilState(stepNumberAtom)
  const [xIsNext, SetxIsNext] = useRecoilState(xIsNextAtom)
  const [rankBoard, SetRankBoard] = useRecoilState(rankBoardAtom)
  const [winName, SetWinName] = useRecoilState(winNameAtom)

  function handleClick(i) {
    const histories = history.slice(0, stepNumber + 1)
    const current = histories[histories.length - 1]
    const squares = current.squares.slice()
    if (calculateWinner(squares) || squares[i]) {
      return
    }
    squares[i] = xIsNext ? 'X' : 'O'
    SetHistory(
      histories.concat([
        {
          squares: squares,
        },
      ]),
    )
    SetStepNumber(histories.length)
    SetxIsNext(!xIsNext)
  }

  const jumpTo = (step) => {
    SetStepNumber(step)
    SetxIsNext(step % 2 === 0)
  }

  const current = history[stepNumber]
  const winner = calculateWinner(current.squares)

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start'
    return (
      <li key={move}>
        <Button onClick={() => jumpTo(move)}>{desc}</Button>
      </li>
    )
  })

  function reset() {
    SetStepNumber(0)
    SetHistory([
      {
        squares: Array(9).fill(null),
      },
    ])
  }

  const onChangeWinName = (e) => {
    SetWinName(e.target.value)
  }

  function handleSubmit() {
    const existMemberIdx = rankBoard.findIndex((board) => board.Name === winName)
    let newRankBoard = []

    if (existMemberIdx !== -1) {
      const member = rankBoard[existMemberIdx]
      newRankBoard = replaceItemAtIndex(rankBoard, existMemberIdx, { ...member, Score: member.Score + 1 })
    } else {
      const member = { Name: winName, Score: 1 }
      newRankBoard = [...rankBoard, member]
    }

    newRankBoard = newRankBoard.sort((a, b) => b.Score - a.Score)

    SetRankBoard(newRankBoard)
    SetStepNumber(0)
    SetHistory([
      {
        squares: Array(9).fill(null),
      },
    ])
  }

  let status

  if (winner) {
    status = 'Winner: ' + winner
  } else if (!winner && stepNumber < 9) {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O')
  }
  console.log(winName)

  return (
    <GameBox>
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      {!winner && stepNumber === 9 && (
        <Button reset onClick={reset}>
          Reset the Game
        </Button>
      )}
      <GameInfo>
        <div className="status">
          {status}
          {!winner && stepNumber === 9 && <div className="status">Draw</div>}
        </div>
        {winner && (
          <div>
            <Button reset onClick={reset}>
              Reset the Game
            </Button>
            <Input value={winName} onChange={onChangeWinName} />
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
        )}

        <ol>{!winner && stepNumber < 9 && moves}</ol>
      </GameInfo>
      <div className="table">
        <div className="scoreboad">Score Board</div>
        <table>
          <thead>
            <tr>
              <th className="tablehead">Name</th>
              <th className="tablehead">Score</th>
            </tr>
          </thead>
          <tbody>
            {rankBoard.map((i) => (
              <tr>
                <td>{i.Name}</td>
                <td> {i.Score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </GameBox>
  )
}

// ========================================

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)]
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

export default Game
