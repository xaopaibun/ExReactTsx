import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

const ProductAdapter = createEntityAdapter();

export const ProductSelectors = ProductAdapter.getSelectors((state: any) => state.ExReducer.product);
const ProductSlice = createSlice({
  name: 'listproduct',
  initialState: ProductAdapter.getInitialState({
    product:[
      {
        id : '1',
        name : 'abc'
      },
      {
        id : 'w',
        name : 'abcd'
      }
    ]
  }),
  reducers: {
    add : ProductAdapter.addOne,
    deleteItemProduct: ProductAdapter.removeOne,
  },
})

export const {  deleteItemProduct, add } = ProductSlice.actions;

const { reducer: ExReducer } = ProductSlice;

export default ExReducer;
