import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote => {
        setQuote(quote.content)
        setAuthor(quote.author)
      })
    )

  }
    ,[]);

  let generateQuote = () => {
    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(
      (quote => {
        setQuote(quote.content)
        setAuthor(quote.author)
      })
    )

  }

  return (
    <>
    <div className="quote">
      <h1> {quote}</h1>
      <small> - {author} -</small>
    </div>
    <button className="generate" onClick={generateQuote}>Generate New Quote</button>
    </>
  )
}

export default App