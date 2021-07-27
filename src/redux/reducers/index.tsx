
import { combineReducers } from "redux";
import counterReducer from './counterReducer';
// import homeReducer from "./homeReducer";
import productReducer from '../thunk/index';

const rootReducer = combineReducers({
    counterReducer,

    productReducer
  });
export default rootReducer;