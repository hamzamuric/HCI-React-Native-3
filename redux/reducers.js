/*
    todos: [
        { id: 1, title: 'todo1', done: false },
        { id: 2, title: 'todo2', done: true },
        { id: 3, title: 'todo3', done: false },
    ]
*/

// dispatch({ type: 'ADD_TODO', todo: todo })
// dispatch({ type: 'EDIT_TODO', todo: todo })
// dispatch({ type: 'REMOVE_TODO', id: id })
import {ADD_TODO, REMOVE_TODO, EDIT_TODO} from './actions'

export function todosReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo]
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case EDIT_TODO:
            return state.map(todo => todo.id === action.todo.id ? action.todo : todo)
        default:
            return state
    }
}