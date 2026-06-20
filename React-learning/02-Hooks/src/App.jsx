import { useState } from 'react'
import './App.css'

function App() {

  const addValue = () => {
    console.log("value:", counter);
    // counter=counter+1;
    // setCounter(counter + 1) 
      // setCounter(counter + 1) work but not better
    setCounter(prev => prev + 1)
  }
  const removeValue = () => {
    // counter=counter-1; work but not good
    // setCounter(counter - 1) work but not better
    setCounter(prev => prev - 1)// better concept

  }
  //array destructuring
  // use state is used to update the variable as well as UI at same time 
  // useState → create state
  // [state, setState] → value + updater
  // setState() → update → re-render → UI change
  // prev => prev + 1 → always safe update
  let [counter, setCounter] = useState(12)
  return (
    <>
      <div>hello react</div>
      <div>counter value: {counter}</div>
      <br />
      <button onClick={addValue}> add value:{counter}</button>
      <br />
      <button onClick={removeValue}>remove value:{counter}</button>
      <Task />
    </>
  )
}
function Task() {
  const inc = () => {
    const nextValue = countHandle + 1
    if (nextValue >= 20) {
      setCount(20)
      setMessage("You hit the max limit")
    } else {
      setCount(nextValue)
      setMessage("")
    }
  }
  const dec = () => {
    const nextValue = countHandle - 1

    if (nextValue <= 0) {
      setCount(0)
      setMessage("You hit the min limit")
    } else {
      setCount(nextValue)
      setMessage("")
    }
  }
  let [countHandle, setCount] = useState(5)
  const [message, setMessage] = useState("")
  return (
    <>
      <p style={{ color: "red" }}>{message}</p>
      <h1>Hello task</h1>
      <br />
      <button onClick={inc} disabled={countHandle >= 20}>Increment:{countHandle}</button>
      <br />
      <button onClick={dec} disabled={countHandle <= 0}>Decrement:{countHandle}</button>
    </>
  )
}

export default App
