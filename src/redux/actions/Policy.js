// @flow

import { POLICY } from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: POLICY.REQUEST,
  };
}

export function success(data: Object) {
  return {
    data,
    type: POLICY.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: POLICY.FAILURE,
  };
}

