import { useState } from 'react'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card userName="Md Abdullah" Age={21} />
      <Card userName="MOHAN RAM" Age={22} />
    </>
  )
}

export default App