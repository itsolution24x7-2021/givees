import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  Register,
  ForgetPassword,
  SendCode,
  EnterCode,
  EnterNewPassword,
  About,
  PrivacyPolicy,
  TermsofUse,
  Empty,
  CheckOut,
  BannerCampaign,
  AddCreditCard,
  ScanQRCode,
  EditProfile,
  MessageDetails,
  ContactUs,
  Faqs,
  QRScanCamera,
} from '../../containers';
import ContentForDrawer from '../Drawer/Content';
import {GiveesHomeStack} from '../AppStack';

const AuthStack = createStackNavigator();
const AuthStackScreen = (props) => {
  return (
    <AuthStack.Navigator headerMode="none" initialRouteName="Drawer">
      <AuthStack.Screen name="Drawer" component={ContentForDrawer} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
      <AuthStack.Screen name="SendCode" component={SendCode} />
      <AuthStack.Screen name="EnterCode" component={EnterCode} />
      <AuthStack.Screen name="EnterNewPassword" component={EnterNewPassword} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Empty" component={Empty} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <AuthStack.Screen name="TermsofUse" component={TermsofUse} />
      <AuthStack.Screen name="GiveesHome" component={GiveesHomeStack} />
      {/* <AuthStack.Screen name="ContactUs" component={ContactUs} /> */}
      <AuthStack.Screen name="Faqs" component={Faqs} />
      <AuthStack.Screen name="MessageDetails" component={MessageDetails} />
      <AuthStack.Screen name="QRScanCamera" component={QRScanCamera} />
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
