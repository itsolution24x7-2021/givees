// @flow
import Immutable from 'seamless-immutable';
import * as types from '../../actions/cartActions/ActionTypes';
import { addItemToCart, removeItemFromCart } from '../../../services/cart.util';

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: '',
  successfull: false,
  data: [],
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.CART.ADD_TO_CART:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.payload,
        successfull: true,
      });
    case types.CART.REMOVE_CART_ITEM:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.payload,
        successfull: true,
      });
    case types.CART.REMOVE_FROM_CART:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.payload,
        successfull: true,
      });

    default:
      return state;
  }
};
