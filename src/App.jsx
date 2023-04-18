import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import News from './Pages/News'
import Trading from './Pages/Trading'
import Charts from './Pages/Charts'

const App = () => {
  return (
    <Sidebar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/charts' element={<Charts />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/:id' element={<News />} />
        <Route path='/trading' element={<Trading />} />
      </Routes>
    </Sidebar>
  )
}

export default App