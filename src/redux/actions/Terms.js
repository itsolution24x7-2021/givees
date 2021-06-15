// @flow

import { TERMS } from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: TERMS.REQUEST,
  };
}

export function success(data: Object) {
  return {
    data,
    type: TERMS.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: TERMS.FAILURE,
  };
}

