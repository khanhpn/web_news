import React, { Component } from 'react'

export default class TopHeader extends Component {
  render() {
    return (
      <section id="top_header">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 top_header_1 text-right">
              <p> Sed cursus ante dapibus diam. Sed nisi Nulla quis sem.
                <a href="#"> Internet Devices</a>
                <a href="#">  Duis sagittis </a>
                <a href="#"> Mobile & Laptop</a>
                <a href="#">Android Phone </a>
                </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
