import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Notes from './Notes'
import { Signup } from './Signup'

const Allroutes = () => {
  return<>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/notes' element={<Notes/>}/>

  </Routes>
  </>
}

export default Allroutes