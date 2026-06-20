import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();

    const text = input.trim();

    if (!text) return;

    dispatch(addTodo(text));
    setInput("");
    
  };

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        maxLength={100}
        onChange={(e) => setInput(e.target.value)}
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />

      <button
        type="submit"
        disabled={input.trim().length === 0}
        className={`text-white border-0 py-2 px-6 rounded text-lg ${
          input.trim().length === 0
            ? "bg-gray-500 cursor-not-allowed"
            : "bg-indigo-500 hover:bg-indigo-600"
        }`}
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;