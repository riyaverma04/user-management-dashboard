
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/HomePage.jsx"
import UserDetails from './pages/UserDetailPage.jsx'
import AddUserPage from './pages/AddUserPage.jsx'
import { fetchUserById } from './Api.jsx'

import './App.css'

function App() {
 

  return (
    <>
    <div className="App">
      <h1>User Management Dashboard

      </h1>
      </div>

      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/user-details/:id" element={<UserDetails />} />
          <Route path="/add-user" element={<AddUserPage />} />
        </Routes>
     
      </>

  )
}

export default App
