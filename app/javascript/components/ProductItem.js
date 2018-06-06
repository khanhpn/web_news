import React, { Component } from 'react'

export default class ProductItem extends Component {
  displayStar(star) {
    var result = [];
    for (let index = 0; index < star; index++) {
      result.push(<li key={index}><i className="fa fa-star"></i></li>);
    }
    return result;
  }

  render() {
    var { product } = this.props;
    return (
      <div className="col-md-3">
                <div className="card text-center card-cascade narrower">
                  <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid test" alt="" />
                    <a><div className="mask waves-light waves-effect waves-light"></div></a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">
                    <strong><a>{product.name}</a></strong>
                    </h4>
                    <ul className="rating star">
                      {this.displayStar(product.rating)}
                    </ul>
                    <p className="card-text">{product.description}</p>
                    <div className="card-footer">
              <span className="left">{product.price}$</span>
                      <span className="right">
                        <a className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                          <i className="fa fa-shopping-cart"></i>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
    )
  }
}
