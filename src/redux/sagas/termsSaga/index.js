import { take, put, call, fork } from 'redux-saga/effects';

import ApiSauce from '../../../services/apiSauce';
import { terms_Api, initializeToken } from '../../../config/WebServices';
import * as types from '../../actions/ActionTypes';

import { success, failure } from '../../actions/Terms';

import { ErrorHelper } from '../../../helpers';

function callRequest() {
  return ApiSauce.getWithoutToken(terms_Api);
}

function* watchRequest() {
  while (true) {
    yield take(types.TERMS.REQUEST);

    try {
      const response = yield call(callRequest);
      yield put(success(response));
    } catch (err) {
      console.log(`err in terms ========>>>>`, err);
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
