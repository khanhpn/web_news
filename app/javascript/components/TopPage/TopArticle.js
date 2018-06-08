import React, { Component } from 'react'

export default class TopArticle extends Component {
  render() {
    var { article } = this.props;
    return (
      <div>
        <div className="center_left_top">
          <h2><a href="#">{article.title}</a></h2>
        </div>
        <div><a href="#"><img src={article.imageThumnail} alt="Logo" className="full-width" /></a></div>
        <div className="center_left_heading clearfix">
          <p><span>{article.dateCreatedAt} </span> 'I followed Lorem's wicket' - Integer</p>
        </div>
        <div className="score clearfix  border_bottom_1">
          <div className="col-sm-12">
            <p><i className="fa fa-play-circle-o"></i>{article.shortDescription}</p>
          </div>
        </div>
      </div>
    )
  }
}
