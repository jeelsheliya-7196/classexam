import { createContext, useState } from 'react'
import './App.css'
import Header from './Componets/Header/Header.jsx'
import From from './Componets/From/From.jsx';
import Home from './Componets/Home/Home.jsx';
import { Route, Routes } from 'react-router';
import Viewdata from './Componets/Viewdata/Viewdata.jsx';
import Edit from './Componets/Edit/Edit'


// const menu = ["Home"]
export const list = createContext();
function App() {

  return (
    <>
    <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/view' element={<Viewdata />} />
        <Route path='/from' element={<From />} />
        <Route path='/edit' element={<Edit />} />
    

      </Routes>
    </>
  )
}

export default App
