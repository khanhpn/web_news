import React, { Component } from 'react'
import { connect } from 'react-redux';
import Products from '../components/Products';
import ProductItem from '../components/ProductItem';

class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return (
      <Products products={products}>
        {this.showProducts(products)}
      </Products>
    )
  }
  showProducts(products) {
    var results = null;
    if (products.length > 0) {
      results = products.map((product, index) => {
        return <ProductItem key={index} product={product} />
      });
    }
    return results;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductsContainer);
