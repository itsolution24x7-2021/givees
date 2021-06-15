// @flow

import { ABOUT } from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: ABOUT.REQUEST,
  };
}

export function success(data: Object) {
  return {
    data,
    type: ABOUT.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: ABOUT.FAILURE,
  };
}

