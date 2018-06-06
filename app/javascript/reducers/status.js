import * as types from '../constants/index';

var initiaState = false;

var myReducer = (state = initiaState, action) => {
  if (action.type === types.TOGGLE_STATUS) {
    state = !state;
  }
  return state;
}

export default myReducer;
