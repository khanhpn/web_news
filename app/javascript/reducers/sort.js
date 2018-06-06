import * as types from '../constants/index';

var initiaState = {
  by: 'name',
  value: 1
};

var myReducer = (state = initiaState, action) => {
  console.log(action);
  if (action.type === types.SORT) {
    state = action.sort;
  }
  return state;
}

export default myReducer;
