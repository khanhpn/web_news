import * as types from '../constants/index';

export const action = () => {
  return {
    type: types.TOGGLE_STATUS
  }
}

export const sort = (sort) => {
  return {
    type: types.SORT,
    sort
  }
}

export const fucking = (fucking) => {
  return {
    type: types.FUCK,
    fucking: fucking
  }
}

export const actAddToCart = (product, quantity) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantity
  }
}
