import 'react-native-gesture-handler';

import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawerContent from './Drawer';
import {
  Login,
  About,
  PrivacyPolicy,
  TermsofUse,
  PaymentMethod,
  ContactUs,
  GiveesActivity,
  Faqs,
  ForgetPassword,
  Register,
  MyGivees,
  AddFriend,
  EditProfile,
} from '../../containers';
import {
  MyTabs,
  GivessTab,
  MessageTab,
  ProfileTab,
  FriendsTab,
  ShopTab,
  ActivityTab,
  ContactTab,
} from '../Bottom';

import {
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
} from '../AppStack';

import {FriendList} from '../../containers';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

// const NavigationDrawerStructure = (props) => {
//     const toggleDrawer = () => {
//         props.navigationProps.toggleDrawer();
//     };
//     return (
//         <View style={{ flexDirection: 'row' }}>
//             <TouchableOpacity onPress={() => toggleDrawer()}>
//                 {/*Donute Button Image */}
//                 <EvilIcons
//                     name="navicon"
//                     color="black"
//                     size={24}
//                 />
//             </TouchableOpacity>
//         </View>
//     );
// }

function ContentForDrawer(props) {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;
  return (
    <Drawer.Navigator
      initialRouteName="Shop"
      unmountInactiveRoutes={true}
      // drawerType={isLargeScreen ? 'permanent' : 'back'}

      drawerStyle={isLargeScreen ? null : {width: '80%'}}
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="My Profile"
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
        component={ProfileStack}
      />

      <Drawer.Screen
        name="My givees"
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
        component={GiveesHomeStack}
      />
      <Drawer.Screen
        name="Friends"
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
        component={FriendsStack}
      />

      <Drawer.Screen
        name="Shop"
        component={ShopStack}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />

      <Drawer.Screen
        name="Messages"
        component={MessageStack}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />

      {/* <Drawer.Screen
        name="AddFriend"
        options={{
          headerShown: false,
        }}
        component={AddFriend}
      /> */}

      {/* <Drawer.Screen
        name="Cart"
        options={{
          headerShown: false,
          // unmountOnBlur: true,
        }}
        component={CartStack}
      /> */}

      <Drawer.Screen
        name="home"
        component={MyGivees}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />

      <Drawer.Screen
        name="Register"
        component={Register}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="About Us"
        component={About}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Privacy"
        component={PrivacyPolicy}
        options={{
          headerShown: false,
        }}
      />

      <Drawer.Screen
        name="Terms of Use"
        component={TermsofUse}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Payment Methods"
        component={PaymentMethodStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Contact Us"
        component={ContactStack}
        options={{
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Merchant"
        component={MerchantStack}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />

      <Drawer.Screen
        name="Activity Log"
        component={ActivityStack}
        options={{
          headerShown: false,
          unmountOnBlur: true,
        }}
      />
      {/* <Drawer.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      /> */}
      <Drawer.Screen
        name="FAQS"
        component={Faqs}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

export default ContentForDrawer;
