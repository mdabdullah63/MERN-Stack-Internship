import { useState } from "react";



function App() {
    let [count , setCount] = useState(5)
    const increae = () =>{
      setCount((prev)=>prev+1)
      setCount((prev)=>prev+1)
      setCount((prev)=>prev+1)
      setCount((prev)=>prev+1)
      setCount((prev)=>prev+1)
      console.log(count)
    }
  return (
    
    <>
    <h1 className="bg-green-500">count {count}</h1>

    <button onClick={increae}>IncreaeCount {count}</button>
    </>
  )
}

export default App
