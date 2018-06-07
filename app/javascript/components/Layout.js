import React, { Component } from 'react'
import Weather from './Weather';
import Articles from './Articles';

export default class Layout extends Component {
  render() {
    return (
      <section id="center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 center">
              <Articles />
              <Weather />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
