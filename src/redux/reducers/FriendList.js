// @flow
import Immutable from 'seamless-immutable';
import * as types from '../actions/ActionTypes';

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: '',
  successfull: false,
  data: [],
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.FRIENDLIST.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
        data: [],
      });
    case types.FRIENDLIST.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.data,
        successfull: true,
      });
    case types.FRIENDLIST.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        data: [],
        errorMessage: action.errorMessage,
      });
    case types.FRIENDLIST:
      return initialState;
    case types.FRIENDLIST:
      return Immutable.merge(state, {
        isFetching: true,
        data: [],
      });
    default:
      return state;
  }
};
