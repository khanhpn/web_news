import { combineReducers } from 'redux';
import articles from './articles';
import categories from './categories';

const appReducers = combineReducers({
  articles: articles,
  categories: categories
});

export default appReducers;
