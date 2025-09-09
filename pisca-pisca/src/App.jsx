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
      index = (index + 1) % colors.length
      setColor(colors[index])
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='body'>
        <h1>pisca pisca</h1>
        <div className='square'
        style = {{
          backgroundColor: color,
          transition: "background-color 0.5s ease"
        }}></div>
      </div>
    </>
  )
}

export default App
