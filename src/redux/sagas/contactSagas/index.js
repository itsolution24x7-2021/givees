import {take, put, call, fork} from 'redux-saga/effects';

import ApiSauce from '../../../services/apiSauce';
import {contact_Api, initializeToken} from '../../../config/WebServices';
import * as types from '../../actions/ActionTypes';

import {success, failure} from '../../actions/Contact';

// import { ErrorHelper } from '../../helpers';
import AsyncStorage from '@react-native-community/async-storage';

function callRequest(data) {
  console.log('callRequest ~ data', data);
  return ApiSauce.postWithToken(contact_Api, data.data, data.token);
}

async function storeToken(response) {
  try {
    await AsyncStorage.setItem('access_token', response.data.access_token);
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
    const {payload} = yield take(types.CONTACT.REQUEST);

    try {
      const response = yield call(callRequest, payload);
      // console.log('function*watchRequest -> response', response);
      // yield call(storeToken, response);
      // yield call(storeLoginResponce, response);

      yield put(success(response));
      console.log(response, '121212@@@');
    } catch (err) {
      err?.problem === 'NETWORK_ERROR'
        ? yield put(
            failure('Connection Failed, Check your internet connection!'),
          )
        : yield put(failure(err.data.message));
      // ErrorHelper.handleErrors(err, true);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
