// @flow

import {FAQS} from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: FAQS.REQUEST,
  };
}

export function success(data: Object) {
  return {
    data,
    type: FAQS.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: FAQS.FAILURE,
  };
}
