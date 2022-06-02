import { atom } from 'recoil'

export const historyState = atom({
  key: 'history',
  default: [
    {
      squares: Array(9).fill(null),
    },
  ],
})

export const stepNumberState = atom({
  key: 'stepNumber',
  default: 0,
})

export const xIsNextState = atom({
  key: 'xIsNext',
  default: true,
})
