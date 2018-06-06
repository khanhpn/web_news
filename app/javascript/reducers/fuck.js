import * as types from '../constants/index';

var initialState = {
  life: true,
  work: false
}
var myReducer = (state = initialState, action) => {
  if (action.type === types.FUCK) {
    state = action.fucking
  }
  return state
}

export default myReducer;
