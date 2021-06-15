import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../../containers/Home';
import EditProfile from '../../containers/EditProfile';
import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {
  ShopStack,
  MerchantStack,
  NotificationStack,
  CartStack,
  GiveesHomeStack,
  MessageStack,
  FriendsStack,
  ProfileStack,
  AddFriendsStack,
  ActivityStack,
  ContactStack,
} from '../AppStack';
import {Metrics, Images, Colors} from '../../theme';
import {CheckOut, GiveesActivity} from '../../containers';
import {WithLocalSvg} from 'react-native-svg';

const Tab = createBottomTabNavigator();

const Empty = (props) => {
  return <View />;
};

function ShopTab({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'grey',
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
          height: Metrics.screenHeight * 0.09,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          overflow: 'hidden',
          borderColor: 'transparent',
          paddingHorizontal: Metrics.ratio(20),
        },
      }}>
      <Tab.Screen
        name="Navigator"
        component={Empty}
        options={{
          tabBarLabel: 'Navigator',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={
                  color === Colors.primary
                    ? Images.MenuIconBlue
                    : Images.MenuIcon
                }
              />
            </TouchableOpacity>
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
          },
        })}
      />

      <Tab.Screen
        name="Shop"
        component={ShopStack}
        options={{
          tabBarLabel: 'Shop',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.HomeIconBlue : Images.HomeIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Merchant"
        component={MerchantStack}
        options={{
          tabBarLabel: 'Merchant',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <WithLocalSvg
              asset={
                color === Colors.primary
                  ? Images.MerchantSelected
                  : Images.MerchantUnSelected
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notification',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary
                  ? Images.NotificationIconBlue
                  : Images.NotificationIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.CartIconBlue : Images.CartIcon
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function GivessTab({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName="GiveesHome"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'grey',
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
          height: Metrics.screenHeight * 0.09,

          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
          overflow: 'hidden',
          paddingHorizontal: Metrics.ratio(20),
        },
      }}>
      <Tab.Screen
        name="Navigator"
        component={Empty}
        options={{
          tabBarLabel: 'Navigator',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={
                  color === Colors.primary
                    ? Images.MenuIconBlue
                    : Images.MenuIcon
                }
              />
            </TouchableOpacity>
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name="GiveesHome"
        component={GiveesHomeStack}
        options={{
          tabBarLabel: 'GiveesHome',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.HomeIconBlue : Images.HomeIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Merchant"
        component={MerchantStack}
        options={{
          tabBarLabel: 'Merchant',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <WithLocalSvg
              asset={
                color === Colors.primary
                  ? Images.MerchantSelected
                  : Images.MerchantUnSelected
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notification',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary
                  ? Images.NotificationIconBlue
                  : Images.NotificationIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.CartIconBlue : Images.CartIcon
              }
            />
          ),
        }}
      />
      {/* <Tab.Screen
        name="AddFriend"
        component={AddFriendsStack}
        options={{
          tabBarIcon: ({ color, size }) => <Image source={Images.CartIcon} />,
        }}
      /> */}
    </Tab.Navigator>
  );
}
function MessageTab({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName="Message"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'grey',
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
          height: Metrics.screenHeight * 0.09,

          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
          overflow: 'hidden',
          paddingHorizontal: Metrics.ratio(20),
        },
      }}>
      <Tab.Screen
        name="Navigator"
        component={Empty}
        options={{
          tabBarLabel: 'Navigator',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={
                  color === Colors.primary
                    ? Images.MenuIconBlue
                    : Images.MenuIcon
                }
              />
            </TouchableOpacity>
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name="Message"
        component={MessageStack}
        options={{
          tabBarLabel: 'Message',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.HomeIconBlue : Images.HomeIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Merchant"
        component={MerchantStack}
        options={{
          tabBarLabel: 'Merchant',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <WithLocalSvg
              asset={
                color === Colors.primary
                  ? Images.MerchantSelected
                  : Images.MerchantUnSelected
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notification',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary
                  ? Images.NotificationIconBlue
                  : Images.NotificationIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.CartIconBlue : Images.CartIcon
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function FriendsTab({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName="Friends"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'grey',
        showLabel: false,
        keyboardHidesTabBar: true,
        style: {
          position: 'absolute',
          height: Metrics.screenHeight * 0.09,

          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
          overflow: 'hidden',
          paddingHorizontal: Metrics.ratio(20),
        },
      }}>
      <Tab.Screen
        name="Navigator"
        component={Empty}
        options={{
          tabBarLabel: 'Navigator',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={
                  color === Colors.primary
                    ? Images.MenuIconBlue
                    : Images.MenuIcon
                }
              />
            </TouchableOpacity>
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name="Friends"
        component={FriendsStack}
        options={{
          tabBarLabel: 'Friends',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.HomeIconBlue : Images.HomeIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Merchant"
        component={MerchantStack}
        options={{
          tabBarLabel: 'Merchant',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <WithLocalSvg
              asset={
                color === Colors.primary
                  ? Images.MerchantSelected
                  : Images.MerchantUnSelected
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notification',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary
                  ? Images.NotificationIconBlue
                  : Images.NotificationIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.CartIconBlue : Images.CartIcon
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function ProfileTab({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'grey',
        showLabel: false,
        keyboardHidesTabBar: true,
        unmountOnBlur: true,
        style: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
          overflow: 'hidden',
          position: 'absolute',
          paddingHorizontal: Metrics.ratio(20),
          height: Metrics.screenHeight * 0.09,
        },
      }}>
      <Tab.Screen
        name="Navigator"
        component={Empty}
        options={{
          tabBarLabel: 'Navigator',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={
                  color === Colors.primary
                    ? Images.MenuIconBlue
                    : Images.MenuIcon
                }
              />
            </TouchableOpacity>
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.HomeIconBlue : Images.HomeIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Merchant"
        component={MerchantStack}
        options={{
          tabBarLabel: 'Merchant',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <WithLocalSvg
              asset={
                color === Colors.primary
                  ? Images.MerchantSelected
                  : Images.MerchantUnSelected
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notification',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary
                  ? Images.NotificationIconBlue
                  : Images.NotificationIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.CartIconBlue : Images.CartIcon
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function ActivityTab({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName="GiveesTabActivity"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'grey',
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
          overflow: 'hidden',
          position: 'absolute',
          height: Metrics.screenHeight * 0.09,
          paddingHorizontal: Metrics.ratio(20),
        },
      }}>
      <Tab.Screen
        name="Navigator"
        component={Empty}
        options={{
          tabBarLabel: 'Navigator',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={
                  color === Colors.primary
                    ? Images.MenuIconBlue
                    : Images.MenuIcon
                }
              />
            </TouchableOpacity>
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name="GiveesTabActivity"
        component={ActivityStack}
        options={{
          tabBarLabel: 'GiveesTabActivity',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.HomeIconBlue : Images.HomeIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Merchant"
        component={MerchantStack}
        options={{
          tabBarLabel: 'Merchant',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <WithLocalSvg
              asset={
                color === Colors.primary
                  ? Images.MerchantSelected
                  : Images.MerchantUnSelected
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notification',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary
                  ? Images.NotificationIconBlue
                  : Images.NotificationIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.CartIconBlue : Images.CartIcon
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function ContactTab({navigation, route}) {
  return (
    <Tab.Navigator
      initialRouteName="ContactUs"
      tabBarOptions={{
        activeTintColor: Colors.primary,
        inactiveTintColor: 'grey',
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          backgroundColor: 'white',
          overflow: 'hidden',
          position: 'absolute',
          height: Metrics.screenHeight * 0.09,
          paddingHorizontal: Metrics.ratio(20),
        },
      }}>
      <Tab.Screen
        name="Navigator"
        component={Empty}
        options={{
          tabBarLabel: 'Navigator',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                source={
                  color === Colors.primary
                    ? Images.MenuIconBlue
                    : Images.MenuIcon
                }
              />
            </TouchableOpacity>
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: (event) => {
            event.preventDefault();
          },
        })}
      />
      <Tab.Screen
        name="ContactUs"
        component={ContactStack}
        options={{
          tabBarLabel: 'ContactUs',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.HomeIconBlue : Images.HomeIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Merchant"
        component={MerchantStack}
        options={{
          tabBarLabel: 'Merchant',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <WithLocalSvg
              asset={
                color === Colors.primary
                  ? Images.MerchantSelected
                  : Images.MerchantUnSelected
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationStack}
        options={{
          tabBarLabel: 'Notification',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary
                  ? Images.NotificationIconBlue
                  : Images.NotificationIcon
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          unmountOnBlur: true,
          tabBarIcon: ({color, size}) => (
            <Image
              source={
                color === Colors.primary ? Images.CartIconBlue : Images.CartIcon
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export {
  ShopTab,
  GivessTab,
  MessageTab,
  FriendsTab,
  ProfileTab,
  ActivityTab,
  ContactTab,
};
