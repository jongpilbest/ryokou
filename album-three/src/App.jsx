import { useState,useRef } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Page/About'
import React from 'react'
import First from './Page/First'
import Live from './Page/Live'
import Nav from './Page/Nav'
function App() {

  const inputRef = useRef(null);
 
  return (
    <BrowserRouter>
    <Nav ref={inputRef} ></Nav>
    <Routes>
      <Route path="/" element={
         <First click={(visible)=>{
          if(visible==false){
            console.log('false?')
            inputRef.current.style.visibility='hidden'
          inputRef.current.style.height='5vh'
          }
          else{
            console.log('true?')
            inputRef.current.style.visibility='visible'
            inputRef.current.style.height='9vh'
          }
          
         }}></First>
       
    } />
      <Route path="/About" 
      element={

<About></About>

      } />
         <Route path="/Live" 
      element={

<Live></Live>

      } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
