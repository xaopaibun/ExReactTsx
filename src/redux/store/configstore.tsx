import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'
import { ItemAdded, } from 'redux/toolkit/ExSlice';

const store = configureStore({ reducer: rootReducer,middleware: [thunk] })

store.dispatch(ItemAdded({ _id : '1', name : "Quy", age : 21, gender  : 'male'}))
store.dispatch(ItemAdded({ _id : '2', name : "Nam", age : 22 , gender :'female'}))
store.dispatch(ItemAdded({ _id : '3', name : "Hi", age : 26, gender :"other"}))
store.dispatch(ItemAdded({ _id : '4', name : "Haha", age : 23, gender:"female" }))
export default  store;