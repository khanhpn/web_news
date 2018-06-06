import React, { Component } from 'react'
import Header from '../components/Header';
import ProductsContainer from '../containers/ProductsContainer';
import CartContainer from '../containers/CartContainer';
import Footer from '../components/Footer';
import Message from '../components/Message';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <ProductsContainer />
          <Message />
          <CartContainer />
        </div>
        <Footer />
      </div>
    )
  }
}
