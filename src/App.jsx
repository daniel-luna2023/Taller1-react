import { useState } from 'react'
import './App.css'
import quotes from "./db/quote.json"
import { getRamdon } from './utils/ramdon'
import Quotebox from './components/Quotebox'


const listBg = ["bg1", "bg2", "bg3", "bg4"]



//otro listado, otro boton, el mismo currentbg para hacer el cambio del quote



function App() {
  const [quote, setquote] = useState(getRamdon(quotes))
  const [currentbg, setcurrentbg] = useState(getRamdon(listBg))

  const handleChange = () => {
    setquote(getRamdon(quotes))
    setcurrentbg(getRamdon(listBg))
  }

 
  return (
    <main className={`App ${currentbg}`}>
     <Quotebox handleChange={handleChange} quote={quote}/>
    </main>
  )
}

export default App
