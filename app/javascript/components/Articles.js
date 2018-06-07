import React, { Component } from 'react'
import { connect } from 'react-redux';

import TopArticle from './TopPage/TopArticle';
import HomePageCategory from './TopPage/HomePageCategory';

class Articles extends Component {
  render() {
    var { articles, categories } = this.props;
    console.log(categories);
    return (
      <div className="col-sm-9">
        <div className="center_left clearfix">
          { this.showTopArticle(articles) }
          <HomePageCategory />
          <HomePageCategory />
          <HomePageCategory />
        </div>
      </div>
    )
  }

  showTopArticle(articles) {
    var result = null;
    if (articles.length > 0) {
      result = articles.find((article) => {
        console.log(article.top);
        if (article.top === true) {
          return <TopArticle key={article.id} /> ;
        }
      })
    }
    return result;
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.articles,
    categories: state.categories
  }
}

export default connect(mapStateToProps, null)(Articles);
