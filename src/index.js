import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {
  AppRegistry,
  StatusBar,
  PermissionsAndroid,
  Platform,
  AppState,
  BackHandler,
  NativeModules,
  View,
  ReactNative,
  I18nManager,
  ImageBackground,
  Alert,
} from 'react-native';

import RNReactNativeLocale from 'react-native-locale-listener';
import SplashScreen from 'react-native-splash-screen';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import {useDispatch, connect} from 'react-redux';

import Navigator from '../src/navigation';
import configureStore from './redux/store';
import {DataHelper, NotificationsHelper} from './helpers';
import Utils from './util';
import NetworkInfo from './services/NetworkInfo';
import {networkInfoListener} from './redux/actions/NetworkInfoActions';
import {Colors, Images} from './theme';
import {strings, languageInitialize} from './I18n';
import {DropDownComponentProvider} from './components/Toast';
import {getItem} from './config/WebServices';
import {addToCart} from './redux/actions/cartActions/Cart';

const reducers = require('./redux/reducers').default;

class App extends Component {
  state = {
    isLoading: true,
    showVerUpdateModal: false,
    appConfigData: {},
    // reducers, newState
    showNavigator: false,
    store: configureStore(reducers, (newState) => {
      this.setState({isLoading: false}, () => {
        // DataHelper.setStore(this.state.store);
        this.onLoadingComplete();
      });
    }),
  };

  componentDidMount() {
    // if (Utils.isPlatformAndroid()) NativeModules.SplashScreen.hide();

    // BackHandler.addEventListener('hardwareBackPress', () => null);

    console.disableYellowBox = true;
    // NetworkInfo.networkInfoListener(
    //   this.state.store.dispatch,
    //   networkInfoListener,
    // );

    // NotificationsHelper.appMount();

    // RNReactNativeLocale.addLocaleListener(this.changeLayout);

    // if (Utils.isPlatformAndroid()) {
    // }

    // DeviceEventEmitter.addListener('LayoutDirection', (event: Event) => {
    //   console.log(event);
    //   if (event == true) {
    //     if (!I18nManager.isRTL) {
    //       I18nManager.forceRTL(true);
    //       RNRestart.Restart();
    //     }
    //   } else {
    //     if (I18nManager.isRTL) {
    //       I18nManager.forceRTL(false);
    //       RNRestart.Restart();
    //     }
    //   }
    // });

    setTimeout(() => {
      SplashScreen.hide();
    }, 500);

    setTimeout(() => {
      this.setState({
        showNavigator: true,
      });
    }, 100);
  }

  async componentWillMount() {
   
    // NetworkInfo.removeNetworkInfoListener(
    //   this.state.store.dispatch,
    //   networkInfoListener
    // );
  }

  reporter = (error) => {
    // Logic for reporting to devs
    // Example : Log issues to github issues using github apis.
    console.log(error); // sample
  };

  errorHandler = (e, isFatal) => {
    if (isFatal) {
      this.reporter(e);
      Alert.alert(
        'Unexpected error occurred',
        `
          Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
  
          We have reported this to our team ! Please close the app and start again!
          `,
        [
          {
            text: 'Close',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
        ],
      );
    } else {
      console.log(e); // So that we can see it in the ADB logs in case of Android if needed
    }
  };

  nativeErrorCallback = (errorString) => {
    Alert.alert('Native Exception', errorString);
    console.log(errorString, 'errorString errorString ');
  };

  changeLayout(language) {
    // RNRestart.Restart();
  }

  onLoadingComplete = () => {
    NetworkInfo.networkInfoListener(
      this.state.store.dispatch,
      networkInfoListener,
    );
    AppState.addEventListener('change', this._handleAppStateChange);
    languageInitialize();
    setJSExceptionHandler(this.errorHandler, true);
    setNativeExceptionHandler(this.nativeErrorCallback, false);
  };

  _handleAppStateChange = (nextAppState) => {
    console.log('nextAppState', nextAppState);
  };

  render() {
    const {showNavigator} = this.state;

    return (
      <ImageBackground style={{flex: 1}} source={Images.Splash}>
        <Provider store={this.state.store}>
          <DropDownComponentProvider>
            <StatusBar
              backgroundColor={Colors.primary}
              barStyle="light-content"
            />
            {!!showNavigator && <Navigator />}
          </DropDownComponentProvider>
        </Provider>
      </ImageBackground>
    );
  }
}

export default App;
