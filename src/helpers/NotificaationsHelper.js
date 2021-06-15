import {Alert, Platform} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import messaging from '@react-native-firebase/messaging';

class NotificationsHelper {
  appMount = () => {
    // this.initializeFCM();
    this.checkPermission();
    // this.getInitialNotification();
  };

  async checkPermission() {
    let enabled = await messaging().hasPermission();
    if (enabled) {
      this.getToken();
    } else {
      this.requestPermission();
    }
  }

  async requestPermission() {
    try {
      let granted = await messaging().requestPermission({
        alert: true,
        announcement: true,
        badge: true,
        carPlay: true,
        provisional: false,
        sound: true,
      });
      console.log('LOG: USER HAS PERMISSIONS', granted);
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('LOG: USER HAS REJECTED PERMISSIONS');
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    if (!false) {
      fcmToken = await messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem(
          'fcmToken',
          fcmToken,
        );
      }
    }
  }
}
export default new NotificationsHelper();