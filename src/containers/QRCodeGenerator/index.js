// @flow
import {connect, useSelector, useDispatch} from 'react-redux';
import React, {useRef, useState, useEffect} from 'react';
import {View} from 'react-native';
import {Images, Metrics, Colors, Fonts} from '../../theme';
import styles from './style';
import {GoBackHeader, Footer} from '../../components';

import QRCode from 'react-native-qrcode-generator';

const TermsofUse = (props) => {
  return (
    <Footer route={props?.route?.name}>
    <View style={styles.container}>
      <GoBackHeader heading="Scan QR Code" goBack={props.navigation.goBack} />
      <View style={styles.mainView}>
        <View style={styles.qrView}>
          <QRCode
            value={'My Givees'}
            size={Metrics.screenHeight * 0.4}
            bgColor="#000"
            fgColor="white"
          />
        </View>
      </View>
    </View>
    </Footer>
  );
};
export default TermsofUse;
