// @flow

import { LOGIN, LOGOUT, LOGOUT_REQUEST } from './ActionTypes';

export function request(payload) {
  return {
    payload,
    type: LOGIN.REQUEST,
  };
}

export function success(data: Object) {
  return {
    data,
    type: LOGIN.SUCCESS,
  };
}

export function failure(errorMessage: Object) {
  return {
    errorMessage,
    type: LOGIN.FAILURE,
  };
}

export function logout(payload) {
  return {
    type: LOGOUT_REQUEST,
    payload,
  };
}

export function updateLoginResponse(data: Object) {
  return {
    data,
    type: LOGIN.UPDATERESPONSE,
  };
}

export function logoutCleanup(payload) {
  return {
    type: LOGOUT,
  };
}
