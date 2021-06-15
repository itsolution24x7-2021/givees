import {take, put, call, fork} from 'redux-saga/effects';

import ApiSauce from '../../services/apiSauce';
import {get_FriendList, initializeToken} from '../../config/WebServices';
import * as types from '../actions/ActionTypes';

import {success, failure} from '../actions/FriendList';

import {ErrorHelper} from '../../helpers';

function callRequest(data) {
  return ApiSauce.getWithToken(get_FriendList, data.token);
}

function* watchRequest() {
  while (true) {
    const {payload} = yield take(types.FRIENDLIST.REQUEST);

    try {
      const response = yield call(callRequest, payload);
      console.log(
        '🚀 ~ file: FriendListSaga.js ~ line 21 ~ function*watchRequest ~ response',
        response,
      );
      yield put(success(response));
    } catch (err) {
      console.log(`err in FRIENDLIST ========>>>>`, err);
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
