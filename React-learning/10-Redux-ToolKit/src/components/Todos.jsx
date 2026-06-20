import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  const [editId, setEditId] = useState(null)
  const [editText, setEditText] = useState('')

  const handleSave = (id) => {
    if (!editText.trim()) return

    dispatch(
      updateTodo({
        id,
        text: editText,
      })
    )

    setEditId(null)
    setEditText('')
  }

  return (
    <ul className="list-none">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
        >
          {editId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="bg-white text-black px-2 py-1 rounded"
            />
          ) : (
            <div className="text-white">{todo.text}</div>
          )}

          <div className="flex gap-2">
            {editId === todo.id ? (
              <button
                onClick={() => handleSave(todo.id)}
                className="text-white bg-green-500 border-0 py-1 px-4 hover:bg-green-600 rounded"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditId(todo.id)
                  setEditText(todo.text)
                }}
                className="text-white bg-blue-500 border-0 py-1 px-4 hover:bg-blue-600 rounded"
              >
                Edit
              </button>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 hover:bg-red-600 rounded"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Todos