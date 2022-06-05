import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Game from './App.js'
import Profile from './Profile.js'
import { RecoilRoot } from 'recoil'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)
