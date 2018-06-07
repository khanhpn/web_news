// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Main from '../components/Main';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import appReducers from '../reducers/index';


const store = createStore(
  appReducers
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Main />
    </Provider>,
      document.body.appendChild(document.createElement('div')),
    )
  })
