// @flow
import Immutable from 'seamless-immutable';
import * as types from '../actions/authActions/ActionTypes';

const initialState = Immutable({
  isNetworkConnected: true,
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.NETWORK_INFO:
      return Immutable.merge(state, {
        isNetworkConnected: action.isNetworkConnected,
      });

    default:
      return state;
  }
};
