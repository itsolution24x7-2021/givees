import {combineReducers} from 'redux';

import {login, logout, signup} from './authReducer';
import about from './about';
import terms from './terms';
import faqs from './faqs';
import contact from './contact';
import home from './Home';
import {cart} from './cartReducer';
import networkInfo from './NetworkReducer';
import navigationInfo from './NavigationReducer';
import policy from './policy';
import friendList from './FriendList';

export default combineReducers({
  login,
  logout,
  signup,
  about,
  terms,
  policy,
  faqs,
  contact,
  cart,
  networkInfo,
  navigationInfo,
  home,
  friendList,
});
