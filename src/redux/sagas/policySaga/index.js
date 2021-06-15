import {take, put, call, fork} from 'redux-saga/effects';

import ApiSauce from '../../../services/apiSauce';
import {policy_Api, initializeToken} from '../../../config/WebServices';
import * as types from '../../actions/ActionTypes';

import {success, failure} from '../../actions/Policy';

import {ErrorHelper} from '../../../helpers';

function callRequest() {
  return ApiSauce.getWithoutToken(policy_Api);
}

function* watchRequest() {
  while (true) {
    console.log('abc');
    yield take(types.POLICY.REQUEST);
    try {
      const response = yield call(callRequest);
      yield put(success(response));
    } catch (err) {
      console.log(`err in policy ========>>>>`, err);
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
