import { take, put, call, fork } from 'redux-saga/effects';

import ApiSauce from '../../../services/apiSauce';
import { about_Api, initializeToken } from '../../../config/WebServices';
import * as types from '../../actions/ActionTypes';

import { success, failure } from '../../actions/About';

import { ErrorHelper } from '../../../helpers';
import AsyncStorage from '@react-native-community/async-storage';

function callRequest() {
  console.log('Saga called about us?');
  return ApiSauce.getWithoutToken(about_Api);
}

function* watchRequest() {
  while (true) {
    yield take(types.ABOUT.REQUEST);

    try {
      const response = yield call(callRequest);
      console.log(response, 'abcabcabc');
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
