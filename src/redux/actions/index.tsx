import { createAction } from '@reduxjs/toolkit'


export const increment = createAction<number | undefined>('increment')
export const decrement = createAction<number | undefined>('decrement')


export const incrementByAmount = createAction<number>('counter/incrementByAmount')

// export const CallApiGetProduct = createAction<undefined>('CallApiGetProduct')

// export const ProductSuccess = createAction<Array<any>>('ProductSuccess')

// export const ProductError = createAction<string>('ProductSuccess')

// export const ProductActiveLove = createAction<any>('ProductActiveLove')
