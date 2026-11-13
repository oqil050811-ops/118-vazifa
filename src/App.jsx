
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './componets/Home.jsx'
import Mine from './componets/Mine.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mine" element={<Mine />} />
    </Routes>
  )
}

export default App
