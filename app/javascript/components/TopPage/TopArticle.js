import React, { Component } from 'react'
import Image1 from 'images/1.jpg';

export default class TopArticle extends Component {
  render() {
    return (
      <div>
        <div className="center_left_top">
          <h2><a href="#">Consectetur adipiscing  Integer nec odio.</a></h2>
        </div>
        <div><a href="#"><img src={Image1} alt="Logo" className="full-width" /></a></div>
        <div className="center_left_heading clearfix">
          <p><span>02:22 </span> 'I followed Lorem's wicket' - Integer</p>
        </div>
        <div className="score clearfix  border_bottom_1">
          <div className="col-sm-12">
            <p><i className="fa fa-play-circle-o"></i>Sed nisi. Nulla quis sem at nibh elementum imperdiet.</p>
          </div>
        </div>
      </div>
    )
  }
}
