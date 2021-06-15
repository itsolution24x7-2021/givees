// @flow

import {CONTACT} from './ActionTypes';

export function request(payload) {
  console.log(payload, 'PAYYYYYYYYYYYYYYY');
  return {
    payload,
    type: CONTACT.REQUEST,
  };
}

export function success(data: Object) {
  return {
    data,
    type: CONTACT.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: CONTACT.FAILURE,
  };
}
