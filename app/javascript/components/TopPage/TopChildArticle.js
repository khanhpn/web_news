import React, { Component } from 'react'

export default class TopChildArticle extends Component {
  render() {
    var { article, category } = this.props;
    return (
      <div className="col-sm-4 center_left_1_inner">
        <p><a href="#">WORLD SERIES 2017</a></p>
        <h3><a href="#">{article.title}</a></h3>
        <a href="#"><img src={article.imageThumnail} alt="Logo" className="full-width" /></a>
        <h6><a href="#"><span><i className="fa fa-plus-square-o"></i>5 RELATED</span></a></h6>
      </div>
    )
  }
}
