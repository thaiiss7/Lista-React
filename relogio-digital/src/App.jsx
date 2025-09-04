import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])

  const currentTime = time.toLocaleTimeString('pt-br')

  return (
    <>
      <div className='body'>
        <h1>relógio digital</h1>
        <div className='clock'>
          {currentTime}
        </div>
      </div>
    </>
  )
}

export default App
