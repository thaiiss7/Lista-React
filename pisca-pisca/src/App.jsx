import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(`O contador agora está em ${count}`)
    document.title = `Contador: ${count}`
  }, [count])

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
