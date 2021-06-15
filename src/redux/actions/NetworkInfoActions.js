// @flow
import * as types from './authActions/ActionTypes';

export function networkInfoListener(isNetworkConnected: boolean = false) {
  console.log(`isNetworkConnected in action`, isNetworkConnected);
  return {
    type: types.NETWORK_INFO,
    isNetworkConnected,
  };
}
