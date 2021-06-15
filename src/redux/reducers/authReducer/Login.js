// @flow
import Immutable from 'seamless-immutable';
import * as types from '../../actions/authActions/ActionTypes';

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: '',
  successfull: false,
  data: {},
});

export default (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case types.LOGIN.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    case types.LOGIN.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.data,
        successfull: true,
      });
      case types.LOGIN.UPDATERESPONSE:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.data,
        successfull: true,
      });
    case types.LOGIN.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage,
      });
    case types.LOGOUT:
      return initialState;
    case types.LOGOUT_REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    default:
      return state;
  }
};
