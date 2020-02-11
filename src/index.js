import React from 'react'
import ReactDOM from 'react-dom'
import Smartphone from './components/smartphone/Smartphone'
import './styles.css'

function App() {
  return (
    <>
      <div className="smartphone">
        <Smartphone></Smartphone>
      </div>
      <div className="about">Hier kommt about me</div>
      <div className="projects">Hier kommen meine Projekte</div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
