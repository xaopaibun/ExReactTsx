import {  createReducer , createAction} from '@reduxjs/toolkit'
import { increment, decrement, incrementByAmount } from '../actions/index';



interface CounterState {
  value: number
}

const initialState = { value: 0 } as CounterState

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state, action) => {
      state.value++
    })
    .addCase(decrement, (state, action) => {
      state.value--
    })
    .addCase(incrementByAmount, (state, action) => {
      state.value += action.payload
    })
})

export default counterReducer;