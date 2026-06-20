import { useState,useEffect } from 'react'
import TodoForm  from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoProvider } from "./contexts/TodoContext"
import './App.css'
import { Component } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo=(todo)=>{
    setTodos((prev)=>[{
      id:Date.now(),
      ...todo},
      ...prev])
  }
  const updateTodo=(id,todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id?todo: prevTodo )))
    // prev.map((eachValue)=>{
    //   if(eachValue.id===id){
    //     todo
    //   }
    // })
  }
  const deleteTodo=(id)=>{
    setTodos((prev)=> prev.filter((todo)=>todo.id !==id))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=>prev.map((prevTodo)=>prevTodo===id?{...prevTodo,completed:!prevTodo.completed}: prevTodo))
  }

  useEffect(()=>{

   const todos= JSON.parse( localStorage.getItem("todos"))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))

  },[todos])

  return (
<TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">

    <div className="w-full max-w-3xl backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-white mb-2">
          ✨ Todo Manager
        </h1>

        <p className="text-slate-300">
          Organize your tasks and boost productivity
        </p>
      </div>

      {/* Todo Form */}
      <div className="mb-8">
        <TodoForm />
      </div>

      {/* Stats */}
      <div className="flex justify-between items-center mb-6 bg-white/5 rounded-xl p-4">
        <span className="text-slate-300">
          Total Tasks:
          <span className="ml-2 font-bold text-white">
            {todos.length}
          </span>
        </span>

        <span className="text-green-400 font-semibold">
          Completed: {todos.filter(todo => todo.completed).length}
        </span>
      </div>

      {/* Todo List */}
      <div className="space-y-4">
        {todos.length === 0 ? (
          <div className="text-center py-10 text-slate-400">
            🚀 No tasks yet. Add your first todo.
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="transform transition duration-300 hover:scale-[1.02]"
            >
              <TodoItem todo={todo} />
            </div>
          ))
        )}
      </div>

    </div>
  </div>
</TodoProvider>
  )
}

export default App
