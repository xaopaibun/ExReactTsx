import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk'
import { ItemAdded, ItemUpdate } from 'redux/toolkit/ExSlice';
import { makeid } from 'untils/until';

const store = configureStore({ reducer: rootReducer, middleware: [thunk] })

for (let i = 0; i < 10; i++) {
    store.dispatch(ItemAdded({ _id: i + "", name: makeid(5), age: 21, gender: 'male' }))
}

console.log(store.getState().ExReducer)
export default store;