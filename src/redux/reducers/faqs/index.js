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
    case types.FAQS.REQUEST:
      return Immutable.merge(state, {
        isFetching: true,
      });
    case types.FAQS.SUCCESS:
      return Immutable.merge(state, {
        failure: false,
        isFetching: false,
        errorMessage: '',
        data: action.data,
        successfull: true,
      });
    case types.FAQS.FAILURE:
      return Immutable.merge(state, {
        failure: true,
        isFetching: false,
        errorMessage: action.errorMessage,
      });
    case types.FAQS:
      return initialState;
    case types.FAQS:
      return Immutable.merge(state, {
        isFetching: true,
      });
    default:
      return state;
  }
};
