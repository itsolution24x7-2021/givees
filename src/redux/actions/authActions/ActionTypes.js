// @flow
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const CANCEL = 'CANCEL';
const CLEAR = 'CLEAR';
const UPDATERESPONSE = 'UPDATERESPONSE';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL, CLEAR, UPDATERESPONSE].forEach((type) => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const LOGIN = createRequestTypes('LOGIN');
export const SIGNUP = createRequestTypes('SIGNUP');
export const LOGOUT = createRequestTypes('LOGOUT');

// network related action type
export const NETWORK_INFO = 'NETWORK_INFO';
