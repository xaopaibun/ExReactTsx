import { configureStore } from '@reduxjs/toolkit'
import {applyMiddleware} from "redux";
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'

const store = configureStore({ reducer: rootReducer,middleware: [thunk] })
export default  store;