import { ADD_TODO, REMOVE_TODO, EDIT_TODO, TOGGLE_TODO, SET_TODOS } from './actions'

export function todosReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.todo]
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.id)
        case EDIT_TODO:
            return state.map(todo => todo.id === action.todo.id ? action.todo : todo)
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo)
        case SET_TODOS:
            return action.todos
        default:
            return state
    }
}