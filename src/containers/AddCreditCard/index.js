// @flow
import {connect} from 'react-redux';
import React, {useRef, useState, useEffect} from 'react';
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
import {Images, Metrics, Colors, Fonts} from '../../theme';
import {CustomTextInput, GoBackHeader,Footer} from '../../components';
import styles from './style';
import DatePicker from 'react-native-datepicker';
import {strings} from '../../I18n';
import {WithLocalSvg, SvgUri} from 'react-native-svg';
import ModalPopup from '../../components/Modal';

const AddCreditCard = (props) => {
  const [modal, setModal] = useState(false);

  const modalStateChange = () => {
    setModal(false);
  };
  return (
    <Footer route={props?.route?.name}>
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
      }}>
      <GoBackHeader
        heading="Add Credit Card"
        goBack={props.navigation.goBack}
      />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{
          paddingBottom: Metrics.screenHeight * 0.09,
        }}>
        <View style={styles.mainContainer}>
          <View style={styles.CreditCardStyle}>
            <CustomTextInput
              placeholder={'Name'}
              onChangeInput={(value) => console.log(`value`, value)}
              onSubmit={(onSubmitRef) => {
                console.log(`onsubmitRef`, onSubmitRef);
              }}
            />
            <CustomTextInput
              placeholder={'Credit Card Number'}
              customInputStyle={{
                marginTop: -Metrics.ratio(5),
              }}
              onChangeInput={(value) => console.log(`value`, value)}
              onSubmit={(onSubmitRef) => {
                console.log(`onsubmitRef`, onSubmitRef);
              }}
            />

            <View style={styles.FLName}>
              <View style={styles.datepickerView}>
                <View
                  style={{
                    paddingHorizontal: Metrics.ratio(15),
                    backgroundColor: '#f0f1f6',
                    // marginTop: Metrics.ratio(5),
                    borderRadius: Metrics.ratio(30),
                    height: Metrics.ratio(50),
                    borderColor: '#d8dde9',
                    borderWidth: 0.5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: -Metrics.ratio(5),
                  }}>
                  <DatePicker
                    iconComponent={
                      <View style={styles.customDateIcon}>
                        <WithLocalSvg asset={Images.DateIcon} />
                      </View>
                    }
                    placeholder="Exp. Date"
                    style={{
                      paddingRight: Metrics.ratio(10),
                      // width: '100%',
                      flex: 1,
                    }}
                    customStyles={{
                      placeholderText: {
                        color: '#3B3B3B',
                        fontSize: Fonts.size.fifteen,
                        // fontFamily: Fonts.type.Arial,
                      },
                      dateInput: {
                        borderWidth: 0,
                        // backgroundColor: "red",
                        // top: 5,
                        left: -23,
                      },
                    }}
                  />
                </View>
                {/* <CustomTextInput
                  placeholder={'Exp. Date'}
                  customInputStyle={{
                    marginTop: -Metrics.ratio(5),
                  }}
                  inputRightIcon={Images.DateIcon}
                  secureTextEntry={true}
                  returnKeyType="next"
                  onChangeInput={(value) => console.log(`value`, value)}
                  onSubmit={(onSubmitRef) => {
                    console.log(`onsubmitRef`, onSubmitRef);
                  }}
                /> */}
              </View>

              <CustomTextInput
                placeholder={'CVV'}
                customInputStyle={{
                  width: Metrics.screenWidth * 0.45,
                  marginTop: -Metrics.ratio(5),
                }}
                onChangeInput={(value) => console.log(`value`, value)}
                onSubmit={(onSubmitRef) => {
                  console.log(`onsubmitRef`, onSubmitRef);
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.CheckoutBtn}
            onPress={() => {
              setModal(true);
              // props.navigation.navigate('MyGivees');
            }}>
            <View style={{width: '90%'}}>
              <Text style={styles.CheckoutBtnText}>CONFIRM PAYMENT</Text>
            </View>

            <View style={styles.CheckoutImg}>
              <Image
                style={{
                  width: Metrics.ratio(32),
                  height: Metrics.ratio(32),
                }}
                resizeMode="contain"
                source={Images.CircleNext}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <ModalPopup
        state={modal}
        modalStateChange={modalStateChange}
        navigation={props.navigation}
        route={props.route.name}
        subheading="Purchased givees has been added"
      />
    </View>
    </Footer>
  );
};

export default AddCreditCard;
