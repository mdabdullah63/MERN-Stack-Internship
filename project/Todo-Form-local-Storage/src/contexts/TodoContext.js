import { createContext,useContext } from 'react'


export const TodoContext= createContext({
    todos:[
        {
            id: 1,
            todo:"todo Msg",
            completed: false,
        }
    ],
    // theme: dark
    addtodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider

export default TodoContext