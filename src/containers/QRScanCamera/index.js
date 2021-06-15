import React, { useState, useEffect } from 'react';
import {
  Modal,
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Linking,
  StyleSheet,
} from 'react-native';
// import {Images, Colors, Fonts} from '../../theme';
// import {strings} from '../../I18n';
// import styles from './style';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { WithLocalSvg } from 'react-native-svg';
import { Metrics, Images } from '../../theme';
// import SplashScreen from 'react-native-splash-screen';
const QRScanCamera = (props) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     SplashScreen.hide();
  //   }, 500);
  // }, []);

  const onSuccess = (e) => {
    Linking.openURL(e.data).catch((err) =>
      console.error('An error occured', err),
    );
  };

  return (
    <View style={{ flex: 1, height: Metrics.screenHeight * 1 }}>
      <QRCodeScanner
        onRead={(e) => console.log(e)}
        // onRead={(e) => onSuccess(e)}
        // fv
        flashMode={RNCamera.Constants.FlashMode.off}
        cameraStyle={{ height: Metrics.screenHeight * 1 }}
        topContent={
          <TouchableOpacity
            style={styles.CheckOutArrow}
            onPress={() => props.navigation.goBack()}>
            <View style={styles.CheckOutArrowImg}>
              <WithLocalSvg asset={Images.BackArrowSvg} />
            </View>
          </TouchableOpacity>
        }
        topViewStyle={styles.topView}
        // bottomViewStyle={{
        //   backgroundColor: 'red',
        //   justifyContent: 'center',
        //   position: 'absolute',
        //   zIndex: 999,
        //   bottom: 0,
        // }}
        // bottomContent={
        //   <TouchableOpacity>
        //     <Text>OK. Got it!</Text>
        //   </TouchableOpacity>
        // }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  CheckOutArrow: {
    width: '100%',
  },
  CheckOutArrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },
  topView: {
    position: 'absolute',
    zIndex: 999,
    left: Metrics.ratio(30),
    top: Metrics.ratio(30),
  },
});

export default QRScanCamera;
