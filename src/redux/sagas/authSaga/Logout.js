import {take, put, call, fork} from 'redux-saga/effects';

import ApiSauce from '../../../services/apiSauce';
import {logout_Api, initializeToken} from '../../../config/WebServices';
import * as types from '../../actions/authActions/ActionTypes';

import {success, failure} from '../../actions/authActions/Logout';

import {ErrorHelper} from '../../../helpers';
import AsyncStorage from '@react-native-community/async-storage';

function callRequest(data) {
  return ApiSauce.postWithToken(logout_Api, {}, data);
}

async function removeToken() {
  try {
    await AsyncStorage.removeItem('access_token');
    await initializeToken();
  } catch (e) {}
}

async function removeLoginResponce() {
  try {
    await AsyncStorage.removeItem('loginResponce');
  } catch (e) {}
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(types.LOGOUT.REQUEST);

    try {
      const response = yield call(callRequest, payload);

      yield call(removeToken);
      yield call(removeLoginResponce);

      // yield put(logoutCleanup());
      yield put(success());
    } catch (err) {
      err?.problem === 'NETWORK_ERROR'
        ? (yield put(
            failure('Connection Failed, Check your internet connection!'),
          ),
          yield call(removeToken),
          yield call(removeLoginResponce))
        : (yield put(failure(err.data.message)),
          yield call(removeToken),
          yield call(removeLoginResponce));

      // ErrorHelper.handleErrors(err, true);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
