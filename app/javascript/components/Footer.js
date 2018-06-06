import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer center-on-small-only">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <h5 className="title social-section-title">Social Media</h5>
                        <div className="social-section text-md-left">
                            <ul className="">
                                <li>
                                    <a className="btn-floating  btn-fb waves-effect waves-light">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-ins waves-effect waves-light">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a className="btn-floating  btn-tw waves-effect waves-light">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h5 className="title">Delivery</h5>
                        <ul>
                            <li>
                                <a>Store Delivery</a>
                            </li>
                            <li>
                                <a>Online Delivery</a>
                            </li>
                            <li>
                                <a>Delivery Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a>Tracking</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5 className="title">Need help?</h5>
                        <ul>
                            <li>
                                <a>FAQ</a>
                            </li>
                            <li>
                                <a>Contact Us</a>
                            </li>
                            <li>
                                <a>Return Policy</a>
                            </li>
                            <li>
                                <a>Product Registration</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container-fluid">
                    © 2016 Copyright:
                    <a href="http://www.MDBootstrap.com"> MDBootstrap.com </a>
                </div>
            </div>
        </footer>
    )
  }
}
