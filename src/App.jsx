import React from 'react'
import Login from './component/Login'
import Register from './component/Register'
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/' element={<Register/>}></Route>
      </Routes>
    </div>
  )
}
export default App