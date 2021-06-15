import React, { useState, useEffect } from 'react';
import {
  Modal,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Images, Colors, Metrics } from '../../theme';
import { strings } from '../../I18n';
import styles from './style';
import { ButtonWithIcon } from '../../components';

const PromoCodeVoucher = (props) => {
  const [modalVisible, setModalVisible] = useState(false);

  // alert(modalVisible)

  useEffect(() => {
    setModalVisible(props.state);
  }, [props.state]);

  const close = () => {
    console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC');
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={close}>
      <TouchableOpacity
        style={styles.centeredView}
        onPress={() => props.changeState(false)}>
        <View style={styles.modalView}>
          <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.modalTextEmail}>Have Promo Code?</Text>
          </View>
          <View
            style={{
              backgroundColor: '#F0F2F7',
              borderRadius: 50,
              marginHorizontal: 10,
            }}>
            <TextInput
              placeholder="Enter Promo Code"
              style={{
                marginLeft: 20,
                color: 'black',
              }}
              placeholderTextColor={'#3B3B3B'}
            />
          </View>
          <ButtonWithIcon
            image={Images.Discount_Icon_With_Backgrond}
            buttonText="GET DISCOUNT"
            color="#FFAA00"
            method={() => props.changeState(false)}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default PromoCodeVoucher;
