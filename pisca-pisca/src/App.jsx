import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [color, setColor] = useState("rgb(169, 196, 255)")

  useEffect(() => {
    const colors = ["rgb(204, 144, 144)","rgb(169, 196, 255)"]
    let index = 0

    const interval = setInterval(() => {
      
    })
  }, [])

  return (
    <>
      <div className='body'>
        <h1>pisca pisca</h1>
        <div className='blue'></div>
        <div className='red'></div>
      </div>
    </>
  )
}

export default App
