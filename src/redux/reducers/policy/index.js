
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
    case types.POLICY.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    case types.POLICY.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.data,
        successfull: true,
      });
    case types.POLICY.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage,
      });
    case types.POLICY:
      return initialState;
    case types.POLICY:
      return Immutable.merge(state, {
        isFetching: true,
      });
    default:
      return state;
  }
};
