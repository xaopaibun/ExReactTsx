
import { combineReducers } from "redux";
import counterReducer from './counterReducer';
// import homeReducer from "./homeReducer";
import productReducer from '../thunk/index';
import ExReducer from '../toolkit/ExSlice';

const rootReducer = combineReducers({
    counterReducer,
    ExReducer,
    productReducer
  });
  
export default rootReducer;