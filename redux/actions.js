import axios from "axios"

// action types
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_TODOS = 'SET_TODOS'

// action creators
export const addTodo = (title) => ({
    type: ADD_TODO,
    todo: {
        title,
        done: false,
        id: (new Date()).toISOString() + (Math.floor(Math.random() * 1000)),
    }
})
export const removeTodo = (id) => ({ type: REMOVE_TODO, id })
export const editTodo = (todo) => ({ type: EDIT_TODO, todo })
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, id })
export const setTodos = (todos) => ({ type: SET_TODOS, todos })

export const getTodos = () => async (dispatch) => {
    try {
        const response = await axios.get('http://localhost:3000/state.json')
        const todos = response.data.data
        dispatch(setTodos(todos))
    } catch {}
}