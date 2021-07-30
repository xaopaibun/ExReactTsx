import {
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'

interface initState {
  itemEdit: any,
  isShowModal: boolean,
}
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
  name: 'listtodo',
  initialState: ExAdapter.getInitialState<initState>({
    itemEdit: {}, isShowModal: false,
  }),
  reducers: {
    deleteItem: ExAdapter.removeOne,
    ItemAdded: ExAdapter.addOne,
    ItemUpdate: ExAdapter.updateOne,
    deleteAll: ExAdapter.removeAll,
    showModal(state) {
      state.isShowModal = !state.isShowModal;
    },
    itemEdit(state, action) {
      state.itemEdit = action.payload;
    }
  },
})
export const ExSelectors = ExAdapter.getSelectors((state: any) => state.ExReducer);
export const { deleteItem, ItemUpdate, ItemAdded, deleteAll, itemEdit, showModal } = ExSlice.actions;
const { reducer: ExReducer } = ExSlice;

export default ExReducer;
