import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import DrawerItems from './Custom';
import {Images, Metrics, Colors, Fonts} from '../../theme';
import {ActivityIndicator} from '../../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {WithLocalSvg} from 'react-native-svg';

import {useDispatch, useSelector} from 'react-redux';

import {
  useScrollToTop,
  useNavigationState,
  StackActions,
  useRoute,
} from '@react-navigation/native';

function DrawerContent(props) {
  const ref = React.useRef(null);

  // const route = useRoute();
  // const navState = useNavigationState((state) => state);
  // const prevRoute = getPreviousRouteFromState({state: navState});

  useScrollToTop(ref);

  const loginResponse = useSelector((state) => {
    return state.login;
  });

  const logoutResponse = useSelector((state) => {
    return state.logout;
  });

  const loginResponseImage = useSelector((state) => {
    if (state.login?.data?.data) {
      // setProfileImage(state.login?.data?.data[0]?.imgs.imageUrl);
      return state.login?.data?.data[0]?.imgs?.imageUrl;
    }
  });

  const inserts = useSafeAreaInsets();

  const onPressTouch = () => {
    ref.current?.scrollTo({
      y: 0,
      animated: true,
    });
  };

  const resetAction = StackActions.popToTop();
  // const resetAction = StackActions.reset({
  //   index: 0,
  //   actions: [NavigationActions.navigate({routeName: ''})],
  //   key: null,
  // });

  useEffect(() => {
    logoutResponse.failure === true && logoutResponse.isFetching === false
      ? null
      : (props.navigation.closeDrawer(),
        // props.navigation.dispatch(resetAction):
        props.navigation.navigate('Shop', {
          screen: 'MyGivees',
        }));
  }, [logoutResponse]);

  const renderNav = () =>
    loginResponse.data?.data
      ? ['My Profile', 'My givees', 'Friends', 'Shop', 'Messages']
      : ['Shop'];
  return (
    <View style={{backgroundColor: '#F7F7F7', flex: 1}}>
      {logoutResponse.isFetching === true && (
        <ActivityIndicator
          isLoading={true}
          size="large"
          color={Colors.primary}
        />
      )}
      {/* DrawerTopBackground */}
      <ScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        {...props}
        contentContainerStyle={{paddingTop: inserts.top}}>
        <View style={{...styles.drawerContent}}>
          <View>
            {/* header profile drawer image */}
            <ImageBackground
              source={Images.DrawerTopBackground}
              resizeMode={'cover'}
              style={{
                flex: 1,
                // width: Metrics.screenWidth * ,
                // height: Metrics.screenHeight * 0.2,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: Metrics.ratio(16),
                  marginLeft: Metrics.ratio(15),
                  marginRight: Metrics.ratio(17),
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <View
                    style={{
                      marginRight: Metrics.ratio(10),
                      flexDirection: 'row',
                      marginTop: Metrics.ratio(15),
                    }}>
                    <Image
                      source={Images.logo}
                      resizeMode={'contain'}
                      style={{
                        height: Metrics.ratio(46),
                        width: Metrics.ratio(43),
                      }}
                    />
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: Metrics.ratio(10),
                    }}>
                    <WithLocalSvg asset={Images.SideImageOnDrawer} />
                  </View>
                </View>

                <TouchableOpacity
                  disabled={loginResponse?.data?.accessToken ? false : true}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: Metrics.ratio(7),
                    backgroundColor: '#3FA9F5',
                  }}
                  onPress={() =>
                    props.navigation.navigate('My Profile', {
                      screen: 'Profile',
                    })
                  }>
                  <Image
                    source={
                      loginResponseImage
                        ? {uri: loginResponseImage}
                        : Images.logoProfile
                    }
                    style={{
                      width: Metrics.ratio(49),
                      height: Metrics.ratio(49),
                      marginLeft: 5,
                      borderWidth: loginResponseImage ? 2 : 0,
                      borderColor: 'white',
                      padding: 2,
                      borderRadius: loginResponseImage ? 200 : 0,
                    }}
                    resizeMode={loginResponseImage ? 'cover' : 'contain'}
                  />
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          <View style={{paddingVertical: 10, backgroundColor: 'white'}}>
            {renderNav().map((item, index) => {
              return (
                <DrawerItems
                  title={item}
                  key={index}
                  navigation={props.navigation}
                  focused={
                    loginResponse.data?.data
                      ? props.state.index === index
                        ? true
                        : false
                      : true
                  }
                  props={props}
                />
              );
            })}
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#F7F7F7',
          }}>
          <DrawerItems title="Activity Log" navigation={props.navigation} />
          <DrawerItems title="Payment Methods" navigation={props.navigation} />
          <DrawerItems title="Terms of Use" navigation={props.navigation} />
          <DrawerItems title="Privacy" navigation={props.navigation} />
          <DrawerItems title="About Us" navigation={props.navigation} />
          <DrawerItems title="Contact Us" navigation={props.navigation} />
          <DrawerItems title="FAQS" navigation={props.navigation} />
          {loginResponse?.data?.accessToken ? (
            <DrawerItems
              onPressTouch={onPressTouch}
              title="Logout"
              navigation={props.navigation}
            />
          ) : (
            <DrawerItems title="Login" navigation={props.navigation} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  underline: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: 'white',
  },
  userInfoScreen: {
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    // marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  prefence: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // paddingVertical: 12,
    // paddingHorizontal: 16,
  },
});

export default DrawerContent;
