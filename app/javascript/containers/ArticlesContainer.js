import React, { Component } from 'react'
import Articles from '../components/Articles';
import TopArticle from '../components/TopPage/TopArticle';
import HomePageCategory from '../components/TopPage/HomePageCategory';
import { connect } from 'react-redux';
import {actCallApiTopArticleFromServer} from '../actions/index';

class ArticlesContainer extends Component {
  render() {
    var { articles, categories, propsDispatchDetailArticle } = this.props;
    return (
      <Articles articles={articles} categories={categories}>
        {this.showTopArticle(propsDispatchDetailArticle)}
        {this.showHomePageCategory(categories, articles)}
      </Articles>
    )
  }

  componentDidMount = () => {

  }


  showTopArticle(propsDispatchDetailArticle) {
    var { top_article } = this.props;
    return <TopArticle article={top_article} propsDispatchDetailArticle={propsDispatchDetailArticle} />;
  }

  showHomePageCategory(categories, articles) {
    var results = null;
    if (categories.length > 0) {
      results = categories.map((category, index) => {
        return <HomePageCategory key={index} category={category} articles={articles} />;
      })
    }
    return results;
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    categories: state.categories,
    top_article: state.myTopArticle
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    propsDispatchDetailArticle: (article_id) => {
      dispatch(actCallApiTopArticleFromServer(article_id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesContainer);
