import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const text = action.payload?.trim();

      if (!text) return;

      state.todos.push({
        id: nanoid(),
        text,
      });
      
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    updateTodo: (state, action) => {
      const { id, text } = action.payload;

      const todo = state.todos.find(
        (todo) => todo.id === id
      );

      if (todo && text.trim()) {
        todo.text = text.trim();
      }
    },
  },
});

export const {
  addTodo,
  removeTodo,
  updateTodo,
} = todoSlice.actions;

export default todoSlice.reducer;