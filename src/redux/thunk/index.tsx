import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GetProduct } from '../../services/index';
import { AsyncThunk } from "@reduxjs/toolkit"


export const GetProductThunk = createAsyncThunk(
    'product/CallApiGetProduct',
    async () => {
        const response = await GetProduct();
        return response.data
    }
)
interface ProductState {
    product: Array<any>,
    error: string,
    isloading: boolean;
}
const initialState = { product: [], isloading: true, error: "" } as ProductState;
const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        ProductActiveLove(state, action) {
            state.product.map((item) => {
                if (item._id == action.payload) {
                    item.love = !item.love;
                }
            }
            )
            localStorage.setItem('ListProduct', JSON.stringify(state.product))
        },
        CommentsProduct(state, action) {
            state.product.map((item) => {
                if (item._id == action.payload.id) {
                    item.comments = [...item.comments, action.payload.values]
                }
            }
            )
             localStorage.setItem('ListProduct', JSON.stringify(state.product))
        },
        UpdateProductLocal(state, action){
            state.product = action.payload;
        }
    },
    extraReducers: {
        [GetProductThunk.pending.toString()]: (state) => {
            state.isloading = true;
        },
        [GetProductThunk.fulfilled.toString()]: (state, action) => {
            state.isloading = false;
            state.product = Array.from(action.payload, (item: any) => {
                return { ...item, love: false, comments: [] }
            });
        },
        [GetProductThunk.rejected.toString()]: (state, action) => {
            state.isloading = false;
            state.error = action.payload;
        }
    }
})

export const { ProductActiveLove, CommentsProduct, UpdateProductLocal } = productSlice.actions;
const { reducer: productReducer } = productSlice;
export default productReducer;