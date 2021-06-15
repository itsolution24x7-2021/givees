import {login, signUp, Logout} from './authSaga';
import about from './about';
import terms from './termsSaga';
import policy from './policySaga';
import faqs from './faqsSaga';
import contact from './contactSagas';
import friendList from './FriendListSaga';
import home from './Home';

import {fork} from 'redux-saga/effects';

export default function* rootSaga() {
  yield fork(login);
  yield fork(signUp);
  yield fork(Logout);
  yield fork(about);
  yield fork(terms);
  yield fork(policy);
  yield fork(faqs);
  yield fork(contact);
  yield fork(friendList);
  yield fork(home);
}
