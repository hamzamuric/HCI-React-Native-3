import { todosReducer } from './redux/reducers';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import Todos from './Todos';
import thunk from 'redux-thunk';
import { getTodos } from './redux/actions';

const initialState = []

const store = createStore(todosReducer, initialState, applyMiddleware(thunk))

store.dispatch(getTodos())

export default function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}