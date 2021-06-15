// @flow
import Immutable from 'seamless-immutable';
import * as types from '../../actions/ActionTypes';

const initialState = Immutable({
  failure: false,
  isFetching: false,
  errorMessage: '',
  data: {},
});

export default (state: Object = initialState, action: Object) => {
  // console.log(action, 'TYPESSSS_OF_ACTIONNNNN');
  switch (action.type) {
    case types.CONTACT.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    case types.CONTACT.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.data,
      });
    case types.CONTACT.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage,
      });

    default:
      return state;
  }
};
