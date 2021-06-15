// @flow

import {FRIENDLIST} from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: FRIENDLIST.REQUEST,
  };
}

export function success(data: Object) {
  return {
    data,
    type: FRIENDLIST.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: FRIENDLIST.FAILURE,
  };
}
