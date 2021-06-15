// @flow
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';
const CANCEL = 'CANCEL';

function createRequestTypes(base) {
  const res = {};
  [REQUEST, SUCCESS, FAILURE, CANCEL].forEach((type) => {
    res[type] = `${base}_${type}`;
  });
  return res;
}

export const ABOUT = createRequestTypes('ABOUT');
export const TERMS = createRequestTypes('TERMS');
export const POLICY = createRequestTypes('POLICY');
export const FAQS = createRequestTypes('FAQS');
export const CONTACT = createRequestTypes('CONTACT');
export const HOME = createRequestTypes('HOME');
export const FRIENDLIST = createRequestTypes('FRIENDLIST');

// network related action type
export const NETWORK_INFO = 'NETWORK_INFO';
export const NAVIGATION_INFO = 'NAVIGATION_INFO';
