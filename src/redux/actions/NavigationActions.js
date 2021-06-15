import * as types from './ActionTypes';

export function navigationActions(isFocused) {
  //   console.log(`isNetworkConnected in action`, isNetworkConnected);
  return {
    type: types.NAVIGATION_INFO,
    isFocused,
  };
}
