import React, { Component } from 'react'
import TopChildArticle from './TopChildArticle';

export default class HomePageCategory extends Component {
  render() {
    var { category, articles } = this.props;
    return (
      <div className="center_left_1 clearfix border_bottom_1">
        {this.showArticle(articles, category)}
      </div>
    )
  }

  showArticle(articles, category) {
    var results = null;
    if (articles.length > 0) {
      results = articles.slice(0,3).map((article, index) => {
        return <TopChildArticle article={article} key={index} category={category} />;
      })
    }
    return results;
  }
}
