import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Briefcase, GraduationCap } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import Navbar from './components/Navbar/navbar';
import TextIncial from './components/Texto-Inicial/Textstart'
import About from './components/Section/About';
import Projetos from './components/Projetos/projetos';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <TextIncial/>
      <About/>
      <Projetos/>
    </>
  )

}


export default App
