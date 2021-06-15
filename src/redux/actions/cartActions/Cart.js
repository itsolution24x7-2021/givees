// @flow

import { CART } from './ActionTypes';
import { addItemToCart, removeItemFromCart } from '../../../services/cart.util';

export const addToCart = (cartArray, item) => ({
  type: CART.ADD_TO_CART,
  payload: addItemToCart(cartArray, item),
});

export const deleteFromCart = (cartArray, item) => ({
  type: CART.REMOVE_FROM_CART,
  payload: cartArray.filter((cartItem) => cartItem.id !== item.id),
});

export const deleteItemFromCart = (cartArray, item) => ({
  type: CART.REMOVE_CART_ITEM,
  payload: removeItemFromCart(cartArray, item),
});
