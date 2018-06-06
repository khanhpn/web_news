import * as types from '../constants/index';
import products from './products';
import cart from './cart';
import { combineReducers } from 'redux';

const myReducer = combineReducers({
  products,
  cart
});
export default myReducer;
