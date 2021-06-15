// @flow
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
const ADD_TO_CART = 'ADD_TO_CART';

function createRequestTypes(base) {
  const res = {};
  [REMOVE_FROM_CART, REMOVE_CART_ITEM, ADD_TO_CART].forEach((type) => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const CART = createRequestTypes('CART');
