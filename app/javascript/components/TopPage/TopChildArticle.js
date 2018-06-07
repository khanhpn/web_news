import React, { Component } from 'react'
import Image2 from 'images/4.jpg';

export default class TopChildArticle extends Component {
  render() {
    return (
      <div className="col-sm-4 center_left_1_inner">
        <p><a href="#">WORLD SERIES 2017</a></p>
        <h3><a href="#">Class Aptent Taciti<br /> Sociosqu ad Litora</a></h3>
        <a href="#"><img src={Image2} alt="Logo" className="full-width" /></a>
        <h6><a href="#"><span><i className="fa fa-plus-square-o"></i>5 RELATED</span></a></h6>
      </div>
    )
  }
}
