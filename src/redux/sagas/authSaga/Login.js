import { take, put, call, fork } from 'redux-saga/effects';

import ApiSauce from '../../../services/apiSauce';
import { login_Api, initializeToken } from '../../../config/WebServices';
import * as types from '../../actions/authActions/ActionTypes';

import { success, failure } from '../../actions/authActions/Login';

import { ErrorHelper } from '../../../helpers';
import AsyncStorage from '@react-native-community/async-storage';

function callRequest(data) {
  return ApiSauce.post(login_Api, data);
}

async function storeToken(response) {
  try {
    await AsyncStorage.setItem('access_token', response.accessToken);
    await initializeToken();
  } catch (e) {}
}

async function storeLoginResponce(response) {
  try {
    await AsyncStorage.setItem('loginResponce', JSON.stringify(response));
  } catch (e) {}
}

function* watchRequest() {
  while (true) {
    const { payload } = yield take(types.LOGIN.REQUEST);

    try {
      const response = yield call(callRequest, payload);

      yield call(storeToken, response);
      yield call(storeLoginResponce, response);

      yield put(success(response));
    } catch (err) {
      // console.log(`err in login ========>>>>`, err);
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
