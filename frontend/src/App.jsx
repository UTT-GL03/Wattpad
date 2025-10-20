import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import data from './assets/sample_data.json'
import WorkHeadlines from './WorkHeadlines.jsx'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <header>
        <h1>
          WATTPAD
        </h1>
      </header>
      <Routes>
        <Route path="/" element= {<WorkHeadlines/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
