import {connect} from 'react-redux';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';
import DropdownAlert from 'react-native-dropdownalert';

import ContentForDrawer from './Drawer/Content';
import AppStack from './AppStack';
import AuthStackScreen from './AuthStack';
import BottomTab from '../navigation/Bottom/Custom';
import {ActivityIndicator} from '../components';
import {Images, Metrics, Colors, Fonts} from '../theme';
import {initializeToken, getItem} from '../config/WebServices';
import {addToCart} from '../redux/actions/cartActions/Cart';

class AppNavigator extends Component {
  constructor() {
    super();
    this.state = {isAuthenticated: ''};
  }

  async initializeToken() {
    try {
      return await AsyncStorage.getItem('access_token');
    } catch (e) {
      // error reading value
    }
  }

  async componentDidMount() {
    let token = await initializeToken();
    let cart = await getItem('cart');

    this.props.getCarts(JSON.parse(cart));
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // console.log(nextProps?.login?.data?.accessToken, 'asdasdasdasdasdasdsdasd');

    if (prevState.login?.data?.token !== nextProps.login?.data?.token) {
      return {
        isAuthenticated: nextProps?.login?.data?.accessToken,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps?.networkInfo?.isNetworkConnected !==
      this.props.networkInfo?.isNetworkConnected
    ) {
      this.props.networkInfo?.isNetworkConnected === false &&
        this.dropDownAlertRef.alertWithType(
          'error',
          'Connection Error',
          'Make sure you are connected with internet!',
        );
    }
  }

  render() {
    const {isAuthenticated} = this.state;
    var res = '';

    if ('data' in this.props.login.data) {
      res = true;
    } else {
      res = false;
    }

    return (
      <NavigationContainer>
        {/* <ActivityIndicator
            isLoading={true}
            size="large"
            color={Colors.primary}
          /> */}

        <AuthStackScreen isAuthenticated={this.props.login.data.accessToken} />

        {/* <ContentForDrawer isAuthenticated={this.props.login.data.accessToken} /> */}
        {/* {res ? <ContentForDrawer /> : <AuthStackScreen />} */}
        {/* <BottomTab/> */}
        {/* <ContentForDrawer /> */}

        <DropdownAlert
          inactiveStatusBarStyle={'light-content'}
          inactiveStatusBarBackgroundColor={Colors.primary}
          ref={(ref) => (this.dropDownAlertRef = ref)}
        />
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
  networkInfo: state.networkInfo,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getCarts: (info) => {
      dispatch(addToCart(info, null));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);
