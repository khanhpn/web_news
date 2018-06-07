import React, { Component } from 'react'
import Image8 from 'images/8.jpg';
import Image9 from 'images/9.jpg';
import Image10 from 'images/10.jpg';
import Image11 from 'images/11.jpg';
import Image12 from 'images/12.jpg';

export default class ArticlesNewest extends Component {
  render() {
    return (
      <div className="col-sm-3">
        <div className="center_middle">
                  <div className="center_middle_1">
                    <h5><a href="#">WRITER'S PICKS</a></h5>
                    <a href="#"><img src={Image8} alt="Logo" className="full-width" /></a>
                    <div className="center_middle_1_inner">
                      <h4><a href="#">Lorem ipsum dolor sit amet, elit</a></h4>
                      <p><a href="#">Sed cursus an nibh elementum imperdiet.</a></p>
                      <h6><a href="#">ABCD dapibus diam Nulla</a></h6>
                    </div>
                  </div>
                  <div className="center_middle_1">
                    <h3><a href="#">Vestibulum lacinia arcu eget nulla</a></h3>
                    <p><i className="fa fa-play-circle-o"></i>Lor adipiscing elit. Integer nec odio. Praesent libero.</p>
                    <a href="#"><img src={Image9} alt="Logo" className="full-width" /></a>
                    <div className="center_middle_1_inner">
                      <h4><a href="#">Lorem ipsum dolor sit amet, elit</a></h4>
                      <p>Class aptent taciti sociosqu a</p>
                    </div>
                  </div>
                  <div className="center_middle_1">
                    <h3><a href="#">Duis  Praesent mauris?</a></h3>
                    <p className="p_2"><a href="#"> Dsce nec tellus sed augue semper porta Mauris massa?</a></p>
                    <p className="p_1"><a href="#">Sed cursus ante dapibus diam  </a></p>
                    <a href="#"><img src={Image10} alt="Logo" className="full-width" /></a>
                    <div className="center_middle_1_inner">
                      <h4><a href="#">Class aptent taciti sociosqu litora torquent</a></h4>
                      <p>Ceos. Curabitursossim lacinia nunc.</p>
                    </div>
                  </div>
                  <div className="center_middle_1">
                    <h3><a href="#">Duis Praesent mauris?</a></h3>
                    <p className="p_2"><a href="#"> Curabitursodm lacinia nunc.</a></p>
                    <p className="p_1"><a href="#">Sed cursus ante dapibus diam</a></p>
                    <a href="#"><img src={Image11} alt="Logo" className="full-width" /></a>
                    <div className="center_middle_1_inner">
                      <h4><a href="#">Class apitora torquent</a></h4>
                      <p>per inceptos himenaeos. Cucinia nunc.</p>
                    </div>
                  </div>
                  <div className="center_middle_1">
                    <h3><a href="#"> Litora torquent per conubia nostra, per inceptos  </a></h3>
                    <p className="p_2"><a href="#">Vestibulum lacin sociosqu ad litora torquent </a></p>
                    <p className="p_1"><a href="#">Sed cursus ante dapibus diam</a></p>
                    <a href="#"><img src={Image12} alt="Logo" className="full-width" /></a>
                    <div className="center_middle_1_inner">
                      <h4><a href="#">Litora torquent per  nostra, per inceptos</a></h4>
                      <p>Class aptent ts ligula in libero. Sed dignissim lacinia nunc.</p>
                    </div>
                    <div className="center_middle_1_inner_1">
                      <a className="tag_1" href="#">EXTRA</a>
                      <a className="tag_2" href="#">THE NEWS WEEKLY</a>
                    </div>
                  </div>
        </div>
      </div>
    )
  }
}
