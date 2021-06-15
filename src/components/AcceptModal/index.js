import React, { useState, useEffect } from 'react';
import {
  Modal,
  TextInput,
  Text,
  Image,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { Images, Metrics } from '../../theme';
import { strings } from '../../I18n';
import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';

const AcceptModal = (props) => {
  // console.log(props.type, 'TTTTTTTTTTTTTTTTTTTTT');
  const [modalVisible, setModalVisible] = useState(props.state);

  useEffect(() => {
    setModalVisible(props.state);
  }, [props.state]);

  const PurchasedVouchers = () => {
    props.modalStateChange();

    // console.log(`props.type`, props.type);
    props.navigation.navigate(
      props.type === 'decline' ? 'MyGivees' : 'PurchasedVouchers',
    );
  };

  return (
    <ScrollView>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          props.modalStateChange();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image source={Images.questionMark} />
            <Text style={styles.modalTextEmail}>
              Are you sure you want to{' '}
              <Text
                style={{
                  color: props.type == 'decline' ? '#EF4040' : '#25E866',
                }}>
                {props.type == 'decline' ? 'decline' : 'accept'}
              </Text>{' '}
              this voucher from{' '}
              <Text style={{ color: '#3FA9F5' }}>Margje Jutter ?</Text>
            </Text>
            <View>
              {props.type == 'accept' ? (
                <TextInput
                  style={styles.textAreaStyle}
                  placeholder={'Add a note'}
                  multiline={true}
                  placeholderTextColor={"#3B3B3B"}
                  numberOfLines={8}
                  maxLength={200}
                />
              ) : null}
            </View>

            <View style={styles.bothButtonView}>
              <TouchableHighlight
                style={styles.ModalNoButton}
                onPress={() => props.modalStateChange()}>
                <Text style={styles.textStyle}>NO</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.openButton}
                onPress={() => PurchasedVouchers()}>
                <Text style={styles.textStyle}>YES</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default AcceptModal;
