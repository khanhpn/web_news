import * as Types from '../constants/ActionTypes';
var initialState = [];

var myTopArticle = (state = initialState, action) => {
  switch (action.type) {
    case Types.TOP_ARTICLE:
      state.push(action.article);
      return [...state];
    default:
      return [...state];
  }
}

export default myTopArticle;
