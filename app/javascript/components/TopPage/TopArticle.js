import React, { Component } from 'react'

export default class TopArticle extends Component {
  render() {
    var { article, propsDispatchDetailArticle } = this.props;
    if (article.length > 0) {
      article = article[0];
    }
    return (
      <div>
        <div className="center_left_top">
          <h2><a href="#" onClick={() => this.showTitleArticle(article.id)}>{article.title}</a></h2>
        </div>
        <div><a href="#"><img src={article.thumbnail_image} alt="Logo" className="full-width" /></a></div>
        <div className="center_left_heading clearfix">
          <p><span>{article.created_at} </span> 'I followed Lorem's wicket' - Integer</p>
        </div>
        <div className="score clearfix  border_bottom_1">
          <div className="col-sm-12">
            <p><i className="fa fa-play-circle-o"></i>{article.short_description}</p>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.propsDispatchDetailArticle(1800);
  }


  showTitleArticle = (id) => {
    this.props.propsDispatchDetailArticle(id);
  }
}
