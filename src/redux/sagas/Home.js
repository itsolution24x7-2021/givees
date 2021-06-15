import {take, put, call, fork} from 'redux-saga/effects';

import ApiSauce from '../../services/apiSauce';
import {
  not_authenticate_home,
  initializeToken,
  authenticate_home,
} from '../../config/WebServices';
import * as types from '../actions/ActionTypes';

import {success, failure} from '../actions/Home';

function callRequest() {
  initializeToken().then((user_token) => {
    if (user_token) {
      return ApiSauce.getWithToken(authenticate_home, user_token);
    } else {
      return ApiSauce.getWithoutToken(not_authenticate_home);
    }
  });
}

function* watchRequest() {
  while (true) {
    yield take(types.HOME.REQUEST);

    try {
      const response = yield call(callRequest);
      yield put(success(response));
    } catch (err) {
      console.log(`err in about ========>>>>`, err);
      err?.problem === 'NETWORK_ERROR'
        ? yield put(
            failure('Connection Failed, Check your internet connection!'),
          )
        : yield put(failure(err.data.message));
      // ErrorHelper.handleErrors(err.data.message, true);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
