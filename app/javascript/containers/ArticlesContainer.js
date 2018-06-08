import React, { Component } from 'react'
import Articles from '../components/Articles';
import TopArticle from '../components/TopPage/TopArticle';
import HomePageCategory from '../components/TopPage/HomePageCategory';
import { connect } from 'react-redux';
import apiCaller from '../utils/apiCaller';

class ArticlesContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      categories: [],
      articles: []
    }
  }

  componentDidMount() {
    apiCaller("categories.json", 'GET', null).then(res => {
      this.setState({
        categories: res.data
      })
    })
  }

  render() {
    // var { articles, categories } = this.props;
    var { articles, categories } = this.state;
    return (
      <Articles articles={articles} categories={categories}>
        {this.showTopArticle(articles)}
        {this.showHomePageCategory(categories, articles)}
      </Articles>
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

export default connect(mapStateToProps, null)(ArticlesContainer);
