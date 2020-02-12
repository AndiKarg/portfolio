import React from 'react'
import ReactDOM from 'react-dom'
import Smartphone from './components/smartphone/Smartphone'
import './styles.css'
import Logo from './assets/img/ak-logo.png'

function App() {
  return (
    <>
      <div className="logo" style={{ backgroundImage: 'url(' + Logo + ')' }}></div>
      <div className="smartphone">
        <Smartphone></Smartphone>
      </div>
      <div className="about">Hier kommt about me</div>
      <div className="projects">Hier kommen meine Projekte</div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
