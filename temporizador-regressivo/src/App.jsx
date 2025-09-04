import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [active, setActive] = useState(false)
  const [timeInput, setTimeInput] = useState('')

  useEffect(() => {
    let interval

    if (active && count > 0)
    {
      interval = setInterval(() =>{
        setCount((prev) => prev - 1)
      }, 1000)
    }

      return () => clearInterval(interval)
    }, [active, count])

  const start = () => {
    const seg = parseInt(timeInput) || 0
    if (seg > 0)
    {
      setCount(seg)
      setActive(true)
    }
  }

  const minutos = String(Math.floor(count / 60)).padStart(2, "0");
  const segundos = String(count % 60).padStart(2, "0");

  return (
    <>
      <div className='body'>
        <h1>temporizador regressivo</h1>
        <div className='temporizador'>
          <div className='container'>
            <p>{minutos}:{segundos}</p>
            <input type="number" value={timeInput} onChange={(e) => setTimeInput(e.target.value)} />
            <button onClick={start}>Iniciar</button>
            <div className='message'>Tempo esgotado!</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
