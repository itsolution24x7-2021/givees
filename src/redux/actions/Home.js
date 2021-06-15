// @flow

import {HOME} from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: HOME.REQUEST,
  };
}

export function success(data: Object) {
  return {
    data,
    type: HOME.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: HOME.FAILURE,
  };
}
