import { useState } from 'react'
import './App.css'
import quotes from "./db/quote.json"
import { getRamdon } from './utils/ramdon'
import Quotebox from './components/Quotebox'

function App() {
  const [quote, setquote] = useState(getRamdon(quotes))
  const [currentbg, setcurrentbg] = useState()

  const handleChange = () => {
    setquote(getRamdon(quotes))
  }

 
  return (
    <main className='bg4'>
     <Quotebox handleChange={handleChange} quote={quote}/>
    </main>
  )
}

export default App
