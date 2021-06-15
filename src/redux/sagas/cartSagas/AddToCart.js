import {take, put, call, fork} from 'redux-saga/effects';

import ApiSauce from '../../../services/apiSauce';
import {login_Api, initializeToken} from '../../../config/WebServices';
import * as types from '../../actions/cartActions/ActionTypes';

import {success, failure} from '../../actions/cartActions/ActionTypes';

import {ErrorHelper} from '../../../helpers';
import AsyncStorage from '@react-native-community/async-storage';

function callRequest(data) {}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(types.ADD_TO_CART.REQUEST);
    console.log('!!!!!!!!!!!!!!!payload', payload);

    try {
      yield put(success(payload));
    } catch (err) {
      console.log(`err in login ========>>>>`, err);
      yield put(failure(err.data.message));
      // ErrorHelper.handleErrors(err.data.message, true);
    }
  }
}

export default function* root() {
  yield fork(watchRequest);
}
