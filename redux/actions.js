// action types
export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const EDIT_TODO = 'EDIT_TODO'

// action creators
export const addTodo = (todo) => ({ type: ADD_TODO, todo })
export const removeTodo = (id) => ({ type: REMOVE_TODO, id })
export const editTodo = (todo) => ({ type: EDIT_TODO, todo })