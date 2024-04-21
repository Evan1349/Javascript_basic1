import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <MyButton count={count} setCount={setCount} />
    <MyButton count={count} setCount={setCount} />
    </>
  )
}

export default App
