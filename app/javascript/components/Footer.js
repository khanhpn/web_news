import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <div className="container">
          <div className="row">
          <div className="col-sm-7 footer_1">
          <p className="p_4"> <a href="#">OUR SITE</a>
          <a href="#"> FEEDBACK</a>
          <a href="#">CONTACT</a>
          <a href="#">ABOUT OUR SITE</a>
          <a href="#">EDUCATION</a>
          <a href="#">OUR POLICY</a>
          <a className="border_none_1" href="#">TERMS</a></p>
          </div>
          <div className="col-sm-5">
          <p className="text-right"> © 2013 YOUR WEBSITE NAME.</p>
          </div>
        </div>
        </div>
      </section>
    )
  }
}
