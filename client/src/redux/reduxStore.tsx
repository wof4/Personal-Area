import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import mainReducer from './reducers/mainReducer';

export const reducers = combineReducers({
  mainReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store;

export default store;
