// @flow
import Immutable from 'seamless-immutable';
import * as types from '../actions/ActionTypes';

const initialState = Immutable({
  isFocused: null,
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.NAVIGATION_INFO:
      return Immutable.merge(state, {
        isFocused: action.isFocused,
      });

    default:
      return state;
  }
};
