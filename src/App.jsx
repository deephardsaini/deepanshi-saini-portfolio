import { useState } from 'react'
import './App.css'
// import { Accordion, Button, ButtonGroup } from '@chakra-ui/react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Project from './component/Projects/Project'
import Contact from './component/ContactUs/Contact'
// import background from "./img/placeholder.png";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='portfolio-bg'>
      
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  )
}

export default App
