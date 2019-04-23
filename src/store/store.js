import { createStore, applyMiddleware } from 'redux';
import appReducer, { initialState } from '../reducers/app';
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  appReducer,
  initialState,
  applyMiddleware(thunkMiddleware)
);

export default store;
