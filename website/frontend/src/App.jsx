import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import data from './assets/sample_data.json'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>
          WATTPAD
        </h1>
      </header>
      <main className="container">
        {data.works.map((x, i) =>
          <WorkHeadline {...x} key={i} />
        )}
      </main>
    </>
  )
}

function WorkHeadline({work_title, published, tag}) {
  return (
    <article>
      <header>
        <span className="tag"> {tag} </span>
        <time> {published} </time>
      </header>
      <h2>{work_title}</h2>
    </article>
  )
}

export default App
