import React, { Component } from 'react'
import TopArticle from './TopPage/TopArticle';
import HomePageCategory from './TopPage/HomePageCategory';

class Articles extends Component {
  render() {
    return (
      <div className="col-sm-9">
        <div className="center_left clearfix">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Articles;
