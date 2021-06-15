import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import {Colors, Metrics, Fonts, Images} from '../../theme';
import {connect} from 'react-redux';
import {request as LogoutRequest} from '../../redux/actions/authActions/Logout';
import {navigationActions} from '../../redux/actions/NavigationActions';
import {WithLocalSvg} from 'react-native-svg';

class DrawerItem extends React.Component {
  renderIcon = () => {
    const {title, focused} = this.props;
    // alert(focused)
    switch (title) {
      case 'My Profile':
        return (
          <View style={{paddingLeft: Metrics.ratio(10)}}>
            {focused ? (
              <Image source={Images.MyProfileWhite} />
            ) : (
              <Image source={Images.MyProfileBlack} />
            )}
          </View>
        );
      case 'My givees':
        return (
          <View style={{paddingLeft: Metrics.ratio(10)}}>
            {focused ? (
              <Image source={Images.GiveesWhite} />
            ) : (
              <Image source={Images.GiveesBlack} />
            )}
          </View>
        );

      case 'Friends':
        return (
          <View style={{paddingLeft: Metrics.ratio(10)}}>
            {focused ? (
              <Image source={Images.FriendListWhite} />
            ) : (
              <Image source={Images.FriendListBlack} />
            )}
          </View>
        );

      case 'Shop':
        return (
          <View style={{paddingLeft: Metrics.ratio(10)}}>
            {focused ? (
              <Image source={Images.ShopWhite} />
            ) : (
              <Image source={Images.ShopBlack} />
            )}
          </View>
        );
      case 'Messages':
        return (
          <View style={{paddingLeft: Metrics.ratio(10)}}>
            {focused ? (
              <Image source={Images.MessagesWhite} />
            ) : (
              <Image source={Images.MessagesBlack} />
            )}
          </View>
        );
      case 'Logout':
        return (
          <View
            style={{
              marginLeft: Metrics.ratio(15),
              marginRight: Metrics.ratio(3),
            }}>
            <WithLocalSvg asset={Images.Logout} />
          </View>
          // <Icon
          //   name="logout"
          //   color={focused ? 'red' : 'red'}
          //   size={30}
          //   style={{ marginLeft: Metrics.ratio(15) }}
          // />
        );
      default:
        return null;
    }
  };

  focuseDrawer = (item) => {
    const {focusedAction} = this.props;
    // console.log(`item`, focusedAction);
    focusedAction(item);
  };

  navigateToFocusedHome = (title) => {
    const {navigation} = this.props;
    title === 'Shop'
      ? navigation.navigate('Shop', {screen: 'MyGivees'})
      : title === 'My Profile'
      ? navigation.navigate('My Profile', {screen: 'Profile'})
      : title === 'Friends'
      ? navigation.navigate('Friends', {screen: 'FriendList'})
      : title === 'Messages'
      ? navigation.navigate('Messages', {screen: 'Message'})
      : title === 'Activity Log'
      ? navigation.navigate('Activity Log', {
          screen: 'GiveesTabActivity',
        })
      : title === 'Contact Us'
      ? navigation.navigate('Contact Us', {screen: 'ContactUs'})
      : title === 'My givees' &&
        navigation.navigate('My givees', {screen: 'PurchasedVouchers'});
  };

  render() {
    const {focused, title, navigation, props, logOut, token} = this.props;
    console.log(`focused in drawer`, focused);
    if (focused) this.focuseDrawer(title);
    return (
      <TouchableOpacity
        style={{height: 50}}
        // onPress={() =>
        //     title == "Log Out" ? navigation.navigate("Login") : title == "Inbox" ? navigation.navigate("Message")
        //         : navigation.navigate(title)
        // }

        onPress={() =>
          title === 'Logout'
            ? (this.props.onPressTouch(), logOut(token))
            : (focused
                ? this.navigateToFocusedHome(title)
                : navigation.navigate(title),
              // navigation.reset({
              //   index: 0,
              //   routes: [{name: title}],
              // }),
              title === 'Login' && navigation.closeDrawer(),
              navigation.navigate(title))
        }>
        <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
          <View style={[focused ? styles.viewActive : styles.viewInActive]}>
            {this.renderIcon()}
            {title === 'Logout' ? (
              <Text
                style={{
                  color: 'red',
                  fontFamily: Fonts.type.ArialBold,
                  fontSize: Fonts.size.small,
                }}>
                {title}
              </Text>
            ) : (
              <Text style={[focused ? styles.activeStyle : styles.inactive]}>
                {title}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  inactive: {
    color: 'black',
    marginTop: 2,
    marginLeft: 10,
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.xSmall,
  },

  activeIcon: {
    color: '#009C84',
    height: 15,
    width: 15,
  },
  inActiveIcon: {
    color: 'white',
    height: 15,
    width: 15,
  },

  activeStyle: {
    borderRadius: 30,
    marginTop: 2,
    color: 'white',
    marginLeft: 10,
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.small,
  },
  viewActive: {
    flexDirection: 'row',
    alignContent: 'stretch',
    backgroundColor: '#3FA9F5',
    flex: 1,
    height: 45,
    alignItems: 'center',
    borderRadius: 20,
    // paddingLeft: 10,
    marginHorizontal: 10,
  },
  viewInActive: {
    flexDirection: 'row',
    alignContent: 'stretch',
    flex: 1,
    height: 40,
    alignItems: 'center',
    // paddingLeft: 10,
    marginHorizontal: 10,
  },
});

const mapStateToProps = function (state) {
  return {
    token: state.login.data.accessToken,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // logOut: (todoId) => console.log("object",todoId),
    logOut: (todoId) => dispatch(LogoutRequest(todoId)),
    focusedAction: (focused) => dispatch(navigationActions(focused)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerItem);
