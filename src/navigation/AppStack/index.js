import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  EditProfile,
  Notification,
  Cart,
  Merchant,
  MyGivees,
  CheckOut,
  BannerCampaign,
  AddCreditCard,
  ScanQRCode,
  Delivery,
  Profile,
  FriendList,
  FriendsProfile,
  WishLists,
  Message,
  MessageDetails,
  VoucherDetail,
  VouchersDetailsRedeem,
  ReceiverVoucher,
  ShareGivees,
  ShareGiveesDetails,
  AddFriend,
  FriendAndBlock,
  MerchantDetails,
  RedeemGivees,
  ConfirmDelivery,
  PurchasedVouchers,
  ActivityDetails,
  ForgetPassword,
  SendCode,
  EnterCode,
  EnterNewPassword,
  Login,
  Empty,
  Register,
  PrivacyPolicy,
  TermsofUse,
  PaymentMethod,
  ContactUs,
  Faqs,
  QRScanCamera,
  QRCodeGenerator,
  GiveesActivity,
  ActivityAll,
} from '../../containers';

const StackNavigator = createStackNavigator();

function GiveesHomeStack({navigation}) {
  return (
    <StackNavigator.Navigator initialRouteName="PurchasedVouchers">
      <StackNavigator.Screen
        name="RedeemGivees"
        component={RedeemGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MyGivees"
        component={MyGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="BannerCampaign"
        component={BannerCampaign}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ScanQRCode"
        component={ScanQRCode}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="QRCodeGenerator"
        component={QRCodeGenerator}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Delivery"
        component={Delivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="FriendsProfile"
        component={FriendsProfile}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="VoucherDetail"
        component={VoucherDetail}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ReceiverVoucher"
        component={ReceiverVoucher}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ShareGiveesDetails"
        component={ShareGiveesDetails}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddFriend"
        component={AddFriend}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ShareGivees"
        component={ShareGivees}
        options={{headerShown: false}}
      />
     
      <StackNavigator.Screen
        name="PurchasedVouchers"
        component={PurchasedVouchers}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="checkOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="merchant"
        component={Merchant}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MerchantDetails"
        component={MerchantDetails}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
}
function MessageStack({navigation}) {
  return (
    <StackNavigator.Navigator initialRouteName="Message">
      <StackNavigator.Screen
        name="Message"
        component={Message}
        options={{headerShown: false}}
      />
      {/* <StackNavigator.Screen
        name="MessageDetails"
        component={MessageDetails}
        options={{ headerShown: false }}
      /> */}
      <StackNavigator.Screen
        name="MyGivees"
        component={MyGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="checkOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="merchant"
        component={Merchant}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MerchantDetails"
        component={MerchantDetails}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="BannerCampaign"
        component={BannerCampaign}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Delivery"
        component={Delivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="VoucherDetail"
        component={VoucherDetail}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
}

function ShopStack({navigation}) {
  return (
    <StackNavigator.Navigator initialRouteName="MyGivees">
      <StackNavigator.Screen
        name="MyGivees"
        component={MyGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="VouchersDetailsRedeem"
        component={VouchersDetailsRedeem}
        options={{headerShown: false}}
      />
      
      {/* <StackNavigator.Screen
        name="QRScanCamera"
        component={QRScanCamera}
        options={{ headerShown: false }}
      /> */}
      <StackNavigator.Screen
        name="BannerCampaign"
        component={BannerCampaign}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ScanQRCode"
        component={ScanQRCode}
        options={{headerShown: false}}
      />

      {/* <StackNavigator.Screen
        name="FriendList"
        component={FriendList}
        options={{ headerShown: false }}
      /> */}
      <StackNavigator.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="FriendsProfile"
        component={FriendsProfile}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Delivery"
        component={Delivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="VoucherDetail"
        component={VoucherDetail}
        options={{headerShown: false}}
      />
      {/* <StackNavigator.Screen
        name="ShareGiveesDetails"
        component={ShareGiveesDetails}
        options={{ headerShown: false }}
      /> */}
      <StackNavigator.Screen
        name="ReceiverVoucher"
        component={ReceiverVoucher}
        options={{headerShown: false}}
      />
      {/* <StackNavigator.Screen
        name="ShareGivees"
        component={ShareGivees}
        options={{ headerShown: false }}
      /> */}
      <StackNavigator.Screen
        name="PurchasedVouchers"
        component={PurchasedVouchers}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="checkOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="merchant"
        component={Merchant}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MerchantDetails"
        component={MerchantDetails}
        options={{headerShown: false}}
      />
           <StackNavigator.Screen
        name="ShareGivees"
        component={ShareGivees}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
}

function MerchantStack() {
  return (
    <StackNavigator.Navigator initialRouteName="merchant">
      <StackNavigator.Screen
        name="merchant"
        component={Merchant}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MerchantDetails"
        component={MerchantDetails}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
}

function NotificationStack() {
  return (
    <StackNavigator.Navigator>
      <StackNavigator.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
}

function FriendsStack() {
  return (
    <StackNavigator.Navigator initialRouteName="FriendList">
      <StackNavigator.Screen
        name="Delivery"
        component={Delivery}
        options={{headerShown: false}}
      />
        <StackNavigator.Screen
        name="Message"
        component={Message}
        options={{headerShown: false}}
      />
       <StackNavigator.Screen
        name="FriendsProfile"
        component={FriendsProfile}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="VoucherDetail"
        component={VoucherDetail}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="FriendList"
        component={FriendList}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddFriend"
        component={AddFriend}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="checkOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="merchant"
        component={Merchant}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MerchantDetails"
        component={MerchantDetails}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="BannerCampaign"
        component={BannerCampaign}
        options={{headerShown: false}}
      />
      {/* <StackNavigator.Screen
        name="MyGivees"
        component={MyGivees}
        options={{headerShown: false}}
      /> */}
    </StackNavigator.Navigator>
  );
}

function ProfileStack() {
  return (
    <StackNavigator.Navigator initialRouteName="Profile">
      <StackNavigator.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MyGivees"
        component={MyGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="WishLists"
        component={WishLists}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="FriendsProfile"
        component={FriendsProfile}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="checkOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="merchant"
        component={Merchant}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MerchantDetails"
        component={MerchantDetails}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="BannerCampaign"
        component={BannerCampaign}
        options={{headerShown: false}}
      />
      
    </StackNavigator.Navigator>
  );
}

function CartStack() {
  return (
    <StackNavigator.Navigator initialRouteName="checkOut">
      <StackNavigator.Screen
        name="checkOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{headerShown: false}}
      />
      {/* <StackNavigator.Screen name="editProfile" component={EditProfile} options={{ headerShown: false }} /> */}
    </StackNavigator.Navigator>
  );
}

function ActivityStack() {
  return (
    <StackNavigator.Navigator initialRouteName="GiveesActivity">
      <StackNavigator.Screen
        name="GiveesActivity"
        component={GiveesActivity}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ActivityDetails"
        component={ActivityDetails}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ActivityAll"
        component={ActivityAll}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="RedeemGivees"
        component={RedeemGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="home"
        component={MyGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="BannerCampaign"
        component={BannerCampaign}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ScanQRCode"
        component={ScanQRCode}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="QRCodeGenerator"
        component={QRCodeGenerator}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Delivery"
        component={Delivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="FriendsProfile"
        component={FriendsProfile}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="VoucherDetail"
        component={VoucherDetail}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ReceiverVoucher"
        component={ReceiverVoucher}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ShareGiveesDetails"
        component={ShareGiveesDetails}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddFriend"
        component={AddFriend}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ShareGivees"
        component={ShareGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PurchasedVouchers"
        component={PurchasedVouchers}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="checkOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="merchant"
        component={Merchant}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MerchantDetails"
        component={MerchantDetails}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MyGivees"
        component={MyGivees}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
}

function ContactStack() {
  return (
    <StackNavigator.Navigator initialRouteName="ContactUs">
      <StackNavigator.Screen
        name="ContactUs"
        component={ContactUs}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MyGivees"
        component={MyGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="RedeemGivees"
        component={RedeemGivees}
        options={{headerShown: false}}
      />

      <StackNavigator.Screen
        name="BannerCampaign"
        component={BannerCampaign}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ScanQRCode"
        component={ScanQRCode}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="QRCodeGenerator"
        component={QRCodeGenerator}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Delivery"
        component={Delivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="FriendsProfile"
        component={FriendsProfile}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="VoucherDetail"
        component={VoucherDetail}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ReceiverVoucher"
        component={ReceiverVoucher}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ShareGiveesDetails"
        component={ShareGiveesDetails}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddFriend"
        component={AddFriend}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ShareGivees"
        component={ShareGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PurchasedVouchers"
        component={PurchasedVouchers}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="checkOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="merchant"
        component={Merchant}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MerchantDetails"
        component={MerchantDetails}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
}

function PaymentMethodStack() {
  return (
    <StackNavigator.Navigator initialRouteName="PaymentMethod">
      <StackNavigator.Screen
        name="RedeemGivees"
        component={RedeemGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MyGivees"
        component={MyGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="BannerCampaign"
        component={BannerCampaign}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ScanQRCode"
        component={ScanQRCode}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="QRCodeGenerator"
        component={QRCodeGenerator}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="Delivery"
        component={Delivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="FriendsProfile"
        component={FriendsProfile}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="VoucherDetail"
        component={VoucherDetail}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ReceiverVoucher"
        component={ReceiverVoucher}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ShareGiveesDetails"
        component={ShareGiveesDetails}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddFriend"
        component={AddFriend}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="ShareGivees"
        component={ShareGivees}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PurchasedVouchers"
        component={PurchasedVouchers}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="checkOut"
        component={CheckOut}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="PaymentMethod"
        component={PaymentMethod}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="AddCreditCard"
        component={AddCreditCard}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="merchant"
        component={Merchant}
        options={{headerShown: false}}
      />
      <StackNavigator.Screen
        name="MerchantDetails"
        component={MerchantDetails}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
}

export {
  ShopStack,
  MerchantStack,
  NotificationStack,
  CartStack,
  GiveesHomeStack,
  MessageStack,
  FriendsStack,
  ProfileStack,
  ActivityStack,
  ContactStack,
  PaymentMethodStack,
};
