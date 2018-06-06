import * as types from '../constants/index';

var initialState = [
  {
    id: 1,
    name: "iphone 6",
    price: 100,
    description: "made in by apple",
    image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: "iphone 6",
    price: 90,
    description: "made in by samsung",
    image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    inventory: 8,
    rating: 1
  },
  {
    id: 3,
    name: "iphone 6",
    price: 100,
    description: "made in by xiaomi",
    image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    inventory: 10,
    rating: 6
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
}

export default products;
