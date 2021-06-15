// @flow
import React, {useState, useEffect, useMemo} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './Style';
import {Metrics, Images, Fonts} from '../../theme';
import {WithLocalSvg} from 'react-native-svg';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const Footer = ({children, route}) => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const navigationResponse = useSelector((state) => {
    return state.navigationInfo.isFocused;
  });

  // const [activeTab, setActiveTab] = useState(0);
  const [activeTabId, setActiveTabId] = useState(0);
  const [bottomOptions, setBottomOptions] = useState([
    {
      onPress: () => navigation.openDrawer(),
      imgActive: Images.MenuIconBlue,
      imgInActive: Images.MenuIcon,
      status: 0,
      screen: 'drawer',
    },
    {
      onPress: () =>
        navigationResponse === 'Shop'
          ? navigation.navigate('Shop', {screen: 'MyGivees'})
          : navigation.navigate('Shop'),
      imgActive: Images.HomeIconBlue,
      imgInActive: Images.HomeIcon,
      status: 1,
      screen: 'home',
    },
    {
      onPress: () => navigation.navigate('merchant'),
      imgActive: Images.MerchantSelected,
      imgInActive: Images.MerchantUnSelected,
      status: 0,
      screen: 'merchant',
    },
    {
      onPress: () => navigation.navigate('notification'),
      imgActive: Images.NotificationIconBlue,
      imgInActive: Images.NotificationIcon,
      status: 0,
      screen: 'notification',
    },
    {
      onPress: () => navigation.navigate('checkOut'),
      imgActive: Images.CartIconBlue,
      imgInActive: Images.CartIcon,
      status: 0,
      screen: 'cart',
    },
  ]);

  const homeRoutes = [
    'RedeemGivees',
    'home',
    'ScanQRCode',
    'QRCodeGenerator',
    'ShareGiveesDetails',
    'VoucherDetail',
    'ReceiverVoucher',
    'ShareGivees',
    'PurchasedVouchers',
    'Message',
    'MyGivees',
    'VouchersDetailsRedeem',
    'BannerCampaign',
    'Delivery',
    'ConfirmDelivery',
    'FriendsProfile',
    'FriendList',
    'AddFriend',
    'Profile',
    'EditProfile',
    'WishLists',
    'GiveesActivity',
    'ActivityDetails',
    'ActivityAll',
    'ContactUs',
  ];
  const merchantRoutes = ['merchant', 'MerchantDetails'];
  const notificationRoutes = ['notification'];
  const cartRoutes = ['checkOut', 'PaymentMethod', 'AddCreditCard'];

  useEffect(() => {
    activeRoute();
  }, [activeTabId]);

  const activeRoute = () => {
    setActiveTabId(route);
    const i = checkRoute(route);
    let updateState = [...bottomOptions];
    updateState[i] = {...bottomOptions[i], status: 1};
    for (let index = 0; index < updateState.length; index++) {
      if (index !== i) {
        updateState[index].status = 0;
      }
    }
    setBottomOptions(updateState);
  };

  const checkRoute = (route) => {
    if (homeRoutes.includes(route)) {
      return 1;
    } else if (merchantRoutes.includes(route)) {
      return 2;
    } else if (notificationRoutes.includes(route)) {
      return 3;
    } else if (cartRoutes.includes(route)) {
      return 4;
    } else {
      return null;
    }
  };

  const activeStatus = (i) => {
    if (i !== 0) {
      let updateState = [...bottomOptions];
      updateState[i] = {...bottomOptions[i], status: 1};
      for (let index = 0; index < updateState.length; index++) {
        if (index !== i) {
          updateState[index].status = 0;
        }
      }
      console.log(`updateState[i]`, updateState);
      setBottomOptions(updateState);
    } else {
      null;
    }
  };

  return (
    <View style={styles.container}>
      {children}
      <View style={styles.footer}>
        {bottomOptions.map((v, i) => {
          return (
            <TouchableOpacity
              style={styles.btnView}
              onPress={() => (setActiveTabId(i), activeStatus(i), v.onPress())}>
              {i === 2 ? (
                <WithLocalSvg
                  asset={v.status === 1 ? v.imgActive : v.imgInActive}
                />
              ) : (
                <Image source={v.status === 1 ? v.imgActive : v.imgInActive} />
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Footer;
