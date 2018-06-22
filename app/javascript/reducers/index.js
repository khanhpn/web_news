import { combineReducers } from 'redux';
import articles from './articles';
import categories from './categories';
import myTopArticle from './top_article';

const appReducers = combineReducers({
  articles: articles,
  categories: categories,
  myTopArticle
});

export default appReducers;
