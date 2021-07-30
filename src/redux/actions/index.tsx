import { createAction } from '@reduxjs/toolkit'


export const increment = createAction<number | undefined>('increment')
export const decrement = createAction<number | undefined>('decrement')


export const incrementByAmount = createAction<number>('counter/incrementByAmount')


