import React, {useState, useEffect} from 'react';
import {
  Modal,
  Text,
  Image,
  View,
  TouchableHighlight,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {Images, Colors, Fonts} from '../../theme';
import {strings} from '../../I18n';
import styles from './style';

const ModalPopup = (props) => {
  const [modalVisible, setModalVisible] = useState(props.state);

  useEffect(() => {
    setModalVisible(props.state);
  }, [props.state]);

  const sendCode = () => {
    props.modalStateChange();

    props.route === 'AddCreditCard'
      ? props.navigation.navigate('Shop', {screen: 'MyGivees'})
      : props.navigation.navigate('EnterCode');
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      // onRequestClose={() => {
      //   Alert.alert('Modal has been closed.');
      // }}
    >
      <TouchableOpacity
        style={styles.centeredView}
        onPress={() => props.modalStateChange()}
        activeOpacity={1}
        // onStartShouldSetResponder={() => props.modalStateChange()}
        // onMoveShouldSetResponder={() => props.modalStateChange()}
      >
        <View>
          <View style={styles.modalView}>
            <Image source={Images.ModalSuccess} />
            {props.route === 'AddCreditCard' ? (
              <Text
                style={{
                  fontSize: Fonts.size.xLarge,
                  color: '#3FA9F5',
                  fontFamily: Fonts.type.ArialBold,
                }}>
                Payment successful.
              </Text>
            ) : null}
            <Text style={styles.modalTextEmail}>{props.subheading}</Text>

            <View></View>
          </View>

          <TouchableOpacity
            style={styles.openButton}
            //   onPress={() => {
            //  props.modalStateChange()
            //   }}
            onPress={sendCode}>
            <Text style={styles.textStyle}>{strings('Modal.Oky')}</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalPopup;
