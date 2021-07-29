import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'


interface Ex {
    _id: any,
  name: any,
  age: any,
  gender: any
}
const ExAdapter = createEntityAdapter<Ex>({
  selectId: (item) => item._id,
});

const ExSlice = createSlice({
  name: 'listproduct',
  initialState: ExAdapter.getInitialState({
    itemEdit:{}
  }),
  reducers: {
    deleteItem: ExAdapter.removeOne,
    ItemAdded: ExAdapter.addOne,
    ItemUpdate: ExAdapter.updateOne,
    deleteAll: ExAdapter.removeAll,
    itemEdit(state, action){
      state.itemEdit = action.payload; 
    }
  },
})

export const ExSelectors = ExAdapter.getSelectors((state: any) => state.ExReducer);

export const { deleteItem, ItemUpdate, ItemAdded, deleteAll, itemEdit} = ExSlice.actions;

const { reducer: ExReducer } = ExSlice;

export default ExReducer;
