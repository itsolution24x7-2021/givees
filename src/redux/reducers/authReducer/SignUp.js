// @flow
import Immutable from 'seamless-immutable';
import * as types from '../../actions/authActions/ActionTypes';

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: '',
  data: {},
});

export default (state: Object = initialState, action: Object) => {
  // console.log(action, 'TYPESSSS_OF_ACTIONNNNN');
  switch (action.type) {
    case types.SIGNUP.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    case types.SIGNUP.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.data,
      });
    case types.SIGNUP.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage,
      });
    case types.SIGNUP.CLEAR:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: {},
      });

    default:
      return state;
  }
};
