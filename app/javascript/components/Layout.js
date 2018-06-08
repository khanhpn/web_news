import React, { Component } from 'react'
import Weather from './Weather';
import ArticlesContainer from '../containers/ArticlesContainer';

export default class Layout extends Component {
  render() {
    return (
      <section id="center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 center">
              <ArticlesContainer />
              <Weather />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
