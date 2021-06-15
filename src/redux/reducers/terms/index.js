
// @flow
import Immutable from 'seamless-immutable';
import * as types from '../../actions/ActionTypes';

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: '',
  successfull: false,
  data: {},
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.TERMS.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    case types.TERMS.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.data,
        successfull: true,
      });
    case types.TERMS.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage,
      });
    case types.TERMS:
      return initialState;
    case types.TERMS:
      return Immutable.merge(state, {
        isFetching: true,
      });
    default:
      return state;
  }
};
