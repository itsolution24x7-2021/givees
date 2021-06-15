// @flow
import Immutable from 'seamless-immutable';
import * as types from '../../actions/authActions/ActionTypes';

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: '',
  successfull: false,
});

export default (state: Object = initialState, action: Object) => {
  // console.log(action, 'TYPESSSS_OF_ACTIONNNNN');
  switch (action.type) {
    case types.LOGOUT.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    case types.LOGOUT.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        successfull: true,
      });
    case types.LOGOUT.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage,
      });

    default:
      return state;
  }
};
