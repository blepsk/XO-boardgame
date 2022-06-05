import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Game from './App.js'
import Profile from './Profile.js'
import { RecoilRoot } from 'recoil'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Profile />
      <Game />
    </RecoilRoot>
  </React.StrictMode>,
)
