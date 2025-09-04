import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`O contador agora está em ${count}`)
  }, [count])

  return (
    <>
      <div className='body'>
        <h1>contador</h1>
        <div className='counter'>
          <p>contagem: {count}</p>
          <div className='buttons-main'>
            <button onClick={() => setCount((count) => count + 1)} className='add'>+</button>
            <button onClick={() => setCount((count) => count -1)} className='less'>-</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
