import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'
import TicTacToe from './pages/tictactoe'
import ChatbotWebsite from './pages/Chatbot'
import PatientManagement from './pages/Hospital'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/projects/Tic-Tac-Toe' element={<TicTacToe />} />
        <Route path='/projects/Chatbot' element={<ChatbotWebsite />} />
        <Route path='/projects/hospital' element={<PatientManagement />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
