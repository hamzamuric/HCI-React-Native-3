import { todosReducer } from './redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Todos from './Todos';

const initialState = [
  { id: 1, title: 'todo1', done: false },
  { id: 2, title: 'todo2', done: true },
  { id: 3, title: 'todo3', done: false },
]

const store = createStore(todosReducer, initialState)

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}