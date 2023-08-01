import { useState } from 'react'
import './App.css'
import quotes from "./db/quote.json"
import { getRamdon } from './utils/ramdon'
import Quotebox from './components/Quotebox'

function App() {
  const [quote, setquote] = useState(getRamdon(quotes))

  const handleChange = () => {
    setquote(getRamdon(quotes))
  }

 
  return (
    <main>
     <Quotebox handleChange={handleChange} quote={quote}/>
    </main>
  )
}

export default App
