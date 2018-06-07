import React, { Component } from 'react'
import Image13 from 'images/13.jpg'

export default class Weather extends Component {
  render() {
    return (
      <div className="col-sm-3">
                <div className="center_right">
                  <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#home">NEW</a></li>
                    <li><a data-toggle="tab" href="#menu1">LATEST</a></li>
                    <li><a data-toggle="tab" href="#menu2">OLD</a></li>
                  </ul>
                  <div className="tab-content clearfix">
                    <div id="home" className="tab-pane fade in active clearfix">
                      <div className="click clearfix">
                        <div className="panel-group" id="accordion">
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">INDIAN NEW SERIES</a>
                              </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse in">
                              <div className="panel-body"><p><a href="#"><span>Che</span>(10:00 local | 12:30 GMT)</a></p></div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">ALL WORLD</a>
                              </h4>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse">
                              <div className="panel-body"><p><a href="#"><span>Pakistan</span> 212 & 364/9 (104 ov) v <span>India</span> 493</a></p></div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">OTHER'S TRIANGULAAUSTRALIA)</a>
                              </h4>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse">
                              <div className="panel-body">
                                <p className="border_bottom_1"><a href="#"><span>Zim </span> 74/6 (25/50 ov) v <span>AUSTRALIA </span></a></p>
                                <p><a href="#"><span>Ire </span> 65/4 (30.3/50 ov) v <span>AFRICA </span></a></p>
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">MORE</a>
                              </h4>
                            </div>
                            <div id="collapse4" className="panel-collapse collapse in">
                              <div className="panel-body">
                                <p className="border_bottom_1"><a href="#"><span>AUSTRALIA A</span> 219/3 (30/50 ov) v <span>PAK</span></a></p>
                                <p className="border_bottom_1"><a href="#"><span>Namibia Wome</span> 83/5 v <span>Hong Wmn</span> 94</a></p>
                                <p><a href="#"><span>Namibia Wome</span> 83/5 v <span>Hong Wmn</span> 94/7 (19/20 </a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="menu1" className="tab-pane fade clearfix">
                      <div className="click clearfix">
                        <div className="panel-group" id="accordion">
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">INDIAN NEW SERIES</a>
                              </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse in">
                              <div className="panel-body"><p><a href="#"><span>Banglore v Mumbai </span>(10:00 local | 12:30 GMT)</a></p></div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">ALL WORLD</a>
                              </h4>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse">
                              <div className="panel-body"><p><a href="#"><span>Pakistan</span> 212 & 364/9 (104 ov) v <span>India</span> 493</a></p></div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">OTHER'S TRIANGU</a>
                              </h4>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse">
                              <div className="panel-body">
                                <p className="border_bottom_1"><a href="#"><span>Zim </span> 74/6 (25/50 ov) v <span>AUSTRALIA </span></a></p>
                                <p><a href="#"><span>Ire </span> 65/4 (30.3/50 ov) v <span>AFRICA </span></a></p>
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">MORE</a>
                              </h4>
                            </div>
                            <div id="collapse4" className="panel-collapse collapse in">
                              <div className="panel-body">
                                <p className="border_bottom_1"><a href="#"><span>AUSTRALIA A</span> 219/3 (30/50 ov) v <span>PAK</span></a></p>
                                <p className="border_bottom_1"><a href="#"><span>Namibia</span> 83/5<span>Hong</span> 94/7 (19/2</a></p>
                                <p><a href="#"><span>Namibia Wome</span> 83/5 v <span>Hong Wmn</span> 94/7 (19/20</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="home_1">
                          <a className="border_right_1" href="#">Top scores pages</a>
                          <a href="#">News on Laptop</a>
                        </div>
                      </div>
                    </div>
                    <div id="menu2" className="tab-pane fade clearfix">
                      <div className="click clearfix">
                        <div className="panel-group" id="accordion">
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">INDIAN NEW SERIES</a>
                              </h4>
                            </div>
                            <div id="collapse1" className="panel-collapse collapse in">
                              <div className="panel-body"><p><a href="#"><span>Rising pune v Kolkata </span>(10:00 local | 12:30 GMT)</a></p></div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">ALL WORLD</a>
                              </h4>
                            </div>
                            <div id="collapse2" className="panel-collapse collapse">
                              <div className="panel-body"><p><a href="#"><span>Pakistan</span> 212<span>India</span> 493</a></p></div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">OTHER'S</a>
                              </h4>
                            </div>
                            <div id="collapse3" className="panel-collapse collapse">
                              <div className="panel-body">
                                <p className="border_bottom_1"><a href="#"><span>Zim </span> 74/6 (25/50 ov) v <span>AUSTRALIA </span></a></p>
                                <p><a href="#"><span>Ire </span> 65/4 (30.3/50 ov) v <span>AFRICA </span></a></p>
                              </div>
                            </div>
                          </div>
                          <div className="panel panel-default">
                            <div className="panel-heading">
                              <h4 className="panel-title">
                                <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">MORE</a>
                              </h4>
                            </div>
                            <div id="collapse4" className="panel-collapse collapse in">
                              <div className="panel-body">
                                <p className="border_bottom_1"><a href="#"><span>AUSTRALIA A</span> 219/3 (30/50 ov) v <span>PAK</span></a></p>
                                <p className="border_bottom_1"><a href="#"><span>Namibia Wome</span> 83/5 v <span>Hong Wmn</span> 94/7</a></p>
                                <p><a href="#"><span>Namibia Wome</span> 83/5 v <span>Hong Wmn</span> 94/7</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="home_1">
                          <a className="border_right_1" href="#">Top scores pages</a>
                          <a href="#">News on Laptop</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="center_right_middle">
                  <a href="#"><img src={Image13} alt="Logo" className="full-width" /></a>
                  <div className="view">
                    <h4>MOST POPULAR</h4>
                    <ul className="nav nav-tabs">
                      <li className="active"><a data-toggle="tab" href="#home1">NOW</a></li>
                      <li><a data-toggle="tab" href="#menu3">LAST WEEK</a></li>
                      <li><a data-toggle="tab" href="#menu4">LAST MONTH</a></li>
                    </ul>
                    <div className="tab-content clearfix">
                      <div id="home1" className="tab-pane fade in active clearfix">
                        <div className="click clearfix">
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">1</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Torquent Per Conubia Nostra, Per Inceptos </a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">2</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Torquent Per Conubia Nostra, Per Inceptos</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">3</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Torquent Per Conubia Nostra, Per Inceptos</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">4</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Torquent Per Conubia Nostra, Per Inceptos</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">5</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Torquent Per Conubia Nostra, Per Inceptos</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="menu3" className="tab-pane fade clearfix">
                        <div className="click clearfix">
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">1</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Fusce nec tellus sed augue semper porta</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">2</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Fusce nec tellus sed augue semper porta</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">3</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Fusce nec tellus sed augue semper porta</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">4</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Fusce nec tellus sed augue semper porta</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">5</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Fusce nec tellus sed augue semper porta</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div id="menu4" className="tab-pane fade clearfix">
                        <div className="click clearfix">
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">1</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Ligula in libero Sed dignissim lacinia nunc.</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">2</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Ligula in libero Sed dignissim lacinia nunc.</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">3</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Ligula in libero Sed dignissim lacinia nunc.</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text border_bottom_1">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">4</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Ligula in libero Sed dignissim lacinia nunc.</a></p>
                              </div>
                            </div>
                          </div>
                          <div className="clearfix clear_text">
                            <div className="col-sm-3">
                              <div className="tab_1_inner border_right_1">
                                <p className="text-center">5</p>
                              </div>
                            </div>
                            <div className="col-sm-9 tab_1_inner_1_main">
                              <div className="tab_1_inner_1 ">
                                <p><a href="#">Ligula in libero Sed dignissim lacinia nunc.</a></p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="number">
                    <h4>NUMBER ATTENDING</h4>
                    <p className="text-center"><a href="#">8</a></p>
                    <p className="p_3">Curabitursodales ligula in libero sed dignissim lacinia nunc ad litora ?</p>
                  </div>
                </div>
              </div>
    )
  }
}
