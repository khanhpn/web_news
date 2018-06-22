import * as Types from '../constants/ActionTypes';
import callApi from '../utils/apiCaller';


export const actCallApiTopArticleFromServer = (article_id) => {
  return (dispatch) => {
    return callApi(`articles/top_article/${article_id}.json`, "GET", {id: article_id}).then((response) => {
      dispatch(actShowDetailArticle(response.data));
    })
  }
}

export const actShowDetailArticle = (article) => {
  return {
    type: Types.TOP_ARTICLE,
    article
  }
}
