import React from 'react'
import AddTodo from './components/addTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  return (
    <div>
      <h1>This is Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App
