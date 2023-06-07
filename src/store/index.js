import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { combineReducers } from 'redux';
import factReducer from '../reducers/factReducer';


const rootReducer = combineReducers({
  factShow: factReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
  devTools: true,
});

export default store;
