import React, { Component } from 'react'
import { connect } from 'react-redux';
import Cart from '../components/Cart';

class CartContainer extends Component {
  render() {
    var {cart} = this.props;
    return (
      <Cart>
        {this.showCartItem(cart)}
      </Cart>
    )
  }

  showCartItem(cart) {
    var result = [];
    return result;
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}
export default connect(mapStateToProps, null)(CartContainer);
