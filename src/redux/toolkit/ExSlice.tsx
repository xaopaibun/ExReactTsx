import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

interface Ex {
  name: string,
  age: any,
  _id: string,
  gender: string
}
const ExAdapter = createEntityAdapter<Ex>({
  selectId: (item) => item._id,
});

const ExSlice = createSlice({
  name: 'listproduct',
  initialState: ExAdapter.getInitialState(),
  reducers: {
    deleteItem: ExAdapter.removeOne,
    ItemAdded: ExAdapter.addOne,
    ItemUpdate: ExAdapter.updateOne,
    deleteAll: ExAdapter.removeAll,
  },
})

export const ExSelectors = ExAdapter.getSelectors((state: any) => state.ExReducer);

export const { deleteItem, ItemUpdate, ItemAdded, deleteAll } = ExSlice.actions;

const { reducer: ExReducer } = ExSlice;

export default ExReducer;
