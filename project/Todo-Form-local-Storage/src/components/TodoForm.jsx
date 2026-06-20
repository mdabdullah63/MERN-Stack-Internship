import React, { useState } from 'react'
import { useTodo } from "../contexts/TodoContext";
function Todoform() {
    const [todo,setTodo]= useState("")

    const {addTodo} = useTodo()

    const add=(e)=>{
       e.preventDefault()
       if(!todo) return

       addTodo({todo,completed:false})
    }
  return (
         <form onSubmit={add} className="flex gap-3">
  <input
    type="text"
    placeholder="📝 Add a new task..."
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    className="
      flex-1
      px-4 py-3
      rounded-xl
      bg-white/10
      border border-white/20
      backdrop-blur-md
      text-white
      placeholder:text-slate-400
      outline-none
      transition-all duration-300
      focus:border-cyan-400
      focus:ring-2
      focus:ring-cyan-400/30
    "
  />

  <button
    type="submit"
    className="
      px-6 py-3
      rounded-xl
      font-semibold
      text-white
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      shadow-lg
      hover:shadow-cyan-500/30
      hover:scale-105
      active:scale-95
      transition-all duration-300
    "
  >
      Add
  </button>
</form>
  )
}

export default Todoform
