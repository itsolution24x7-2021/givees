// @flow

import {SIGNUP} from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: SIGNUP.REQUEST,
  };
}

export function success(data: Object) {
  return {
    data,
    type: SIGNUP.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: SIGNUP.FAILURE,
  };
}

export function clearData() {
  return {
    type: SIGNUP.CLEAR,
  };
}
