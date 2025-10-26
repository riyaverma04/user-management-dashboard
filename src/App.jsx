import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import UserDetailsPage from './pages/UserDetailsPage'
import AddUserPage from './pages/AddUserPage' 

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/user-details" element={<UserDetailsPage/>} />
      <Route path="/add-user" element={<AddUserPage/>} />
    </Routes>

    </>
  )
}

export default App
