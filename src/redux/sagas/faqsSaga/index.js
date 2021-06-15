import {take, put, call, fork} from 'redux-saga/effects';

import ApiSauce from '../../../services/apiSauce';
import {faqs_Api, initializeToken} from '../../../config/WebServices';
import * as types from '../../actions/ActionTypes';

import {success, failure} from '../../actions/Faqs';

import {ErrorHelper} from '../../../helpers';

function callRequest() {
  return ApiSauce.getWithoutToken(faqs_Api);
}

function* watchRequest() {
  while (true) {
    console.log('abc');
    yield take(types.FAQS.REQUEST);
    try {
      const response = yield call(callRequest);
      console.log(response, 'responser22esponseresponse');
      yield put(success(response));
    } catch (err) {
      console.log(`err in FAQS ========>>>>`, err);
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
