// @flow
import { connect } from 'react-redux';
import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { Images, Metrics, Colors, Fonts } from '../../theme';
import { CustomTextInput } from '../../components';
import styles from './style';
import { strings } from '../../I18n';
import { Header } from '../../components';

const ScanQRCode = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Header
        goBackWithHeading
        heading="Scan QR Code"
        navigation={props.navigation}
      />

      <View style={styles.scanStyle}>
        <Image
          style={{ height: Metrics.ratio(150), width: 200 }}
          resizeMode="contain"
          source={Images.QRCode}
        />
      </View>
    </View>
  );
};

export default ScanQRCode;
