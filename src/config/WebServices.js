// eslint-disable-next-line prettier/prettier
// export const baseUrl = 'https://givees-staging.herokuapp.com/api/';
export const baseUrl = 'http://192.168.0.211:3000/api/';
import AsyncStorage from '@react-native-community/async-storage';
// eslint-disable-next-line prettier/prettier

export const login_Api = `${baseUrl}auth/login`;
export const sign_Api = `${baseUrl}user/create`;
export const logout_Api = `${baseUrl}auth/logout`;

// About API
export const terms_Api = `${baseUrl}terms/getAllTerms_App`;
export const about_Api = `${baseUrl}about/getAllAboutsApp`;
export const policy_Api = `${baseUrl}privacypolicy/read_App`;
export const faqs_Api = `${baseUrl}faqs/getAllFaqs_App`;
export const contact_Api = `${baseUrl}contact/create`;
export const get_Country = `https://geodata.solutions/api/api.php?`;
export const get_ContactServices = `${baseUrl}contactService/getAllServicesApp`;
export const get_FriendList = `${baseUrl}friends/getAllMyFriends`;
export const update_user = (userId) =>
  `${baseUrl}user/user_detail/update/${userId}`;

export const forget_password = `${baseUrl}auth/ForgetPassword`;
export const reset_token = `${baseUrl}auth/reset/`;
export const reset_password = (userId) =>
  `${baseUrl}auth/reset_password_otp/${userId}`;
export const otp_verification_send = `${baseUrl}auth/OTPVerificationSend`;
export const otp_verification = `${baseUrl}auth/OTPVerification`;
export const not_authenticate_home = `${baseUrl}voucher/campAndAppbanners`;
export const authenticate_home = `${baseUrl}voucher/userVoucherData`;
export const unfriend_by_id = (friendId) =>
  `${baseUrl}friends/unfriendMyFriend/${friendId}`;

export async function initializeToken() {
  try {
    return AsyncStorage.getItem('access_token');
  } catch (e) {
    // error reading value
  }
}

export async function getUserInfo() {
  try {
    return await AsyncStorage.getItem('loginResponce');
  } catch (e) {
    // error reading value
  }
}

export async function setItem(key, value) {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // error reading value
  }
}

export async function getItem(key) {
  try {
    return await AsyncStorage.getItem(key);
  } catch (e) {
    // error reading value
  }
}
