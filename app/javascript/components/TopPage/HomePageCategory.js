import React, { Component } from 'react'
import TopChildArticle from './TopChildArticle';

export default class HomePageCategory extends Component {
  render() {
    return (
      <div className="center_left_1 clearfix border_bottom_1">
        <TopChildArticle />
        <TopChildArticle />
        <TopChildArticle />
      </div>
    )
  }
}
