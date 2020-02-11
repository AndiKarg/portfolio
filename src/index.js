import React from 'react'
import ReactDOM from 'react-dom'
import Smartphone from './components/smartphone/Smartphone'
import Slider from './components/slider/projectslider'
import './styles.css'

function App() {
  return (
    <>
      <div className="smartphone">
        <Smartphone></Smartphone>
      </div>
      <div className="projects">
        Hier kommen meine Projekte
        <Slider></Slider>
      </div>
      <div className="about">Hier kommt about me</div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
