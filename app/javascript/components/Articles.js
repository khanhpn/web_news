import React, { Component } from 'react'
import { connect } from 'react-redux';

import TopArticle from './TopPage/TopArticle';
import HomePageCategory from './TopPage/HomePageCategory';

class Articles extends Component {
  render() {
    var { articles, categories } = this.props;
    return (
      <div className="col-sm-9">
        <div className="center_left clearfix">
          { this.showTopArticle(articles) }
          { this.showHomePageCategory(categories, articles) }
        </div>
      </div>
    )
  }

  showTopArticle(articles) {
    var result = null;
    if (articles.length > 0) {
      result = articles.find(article => article.top === true);
      return <TopArticle article={result} /> ;
    }
    return result;
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
    categories: state.categories
  }
}

export default connect(mapStateToProps, null)(Articles);
