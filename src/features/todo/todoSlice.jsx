import { createSlice, nanoid } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    todos: [
        {
            id: 1,
            text: "Hello Redux Toolkit"
        }
    ]
}


export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo:(state, action)=>{
            const updatedText = action.payload.text
            const todoItem = state.todos.find((todo)=>todo.id === action.payload.id)
            todoItem.text = updatedText
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer