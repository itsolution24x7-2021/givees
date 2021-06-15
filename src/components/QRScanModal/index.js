import React, { useState, useEffect } from 'react';
import {
  Modal,
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import { Images, Colors, Fonts } from '../../theme';
import { strings } from '../../I18n';
import styles from './style';

const QRSacanModal = (props) => {
  const [modalVisible, setModalVisible] = useState(props.state);

  useEffect(() => {
    // setModalVisible(props.state);

    console.log(`props.state`, props.state);

    props.state === false && props.navigation.navigate('QRScanCamera');

    // return setModalVisible(false);
  }, [props.state]);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.state}
        // onRequestClose={() => {
        //   props.modalStateChange(null);
        //   console.log(`props.state in modal`, props.state);
        // }}
      >
        <View
          // onPress={() => (
          //   props.navigation.navigate('QRScanCamera'),
          //   props.modalStateChange(!props.state)
          // )}
          style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={Images.QRCodeLoadingIcon} />

            <Text style={styles.modalTextHeading}>{props.subheading}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default QRSacanModal;
