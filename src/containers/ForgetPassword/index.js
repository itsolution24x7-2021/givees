// @flow
import React, {useRef, useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {WithLocalSvg} from 'react-native-svg';

import {strings} from '../../I18n';
import ModalPopup from '../../components/Modal';
import {Images, Metrics, Colors} from '../../theme';
import styles from './style';
import {emailRegex, validate} from '../../services/validation';
import {
  CustomTextInput,
  ActivityIndicator,
  CustomPhoneInput,
} from '../../components';
import {useDropDown} from '../../components/Toast';
import {createResource} from '../../config/simpleApiCall';
import ApiSauce from '../../services/apiSauce';
import {
  forget_password,
  reset_token,
  otp_verification_send,
  otp_verification,
} from '../../config/WebServices';

let errors = {
  emailErr: 'Email not valid',
};

const ForgetPassword = (props) => {
  const [modal, setModal] = useState(false);

  const createRef = {
    emailInputRef: useRef(null),
  };
  let [email, setUserEmail] = useState('');
  let [phoneNumer, setPhoneNumer] = useState('');
  let [validatePhoneNumber, setValidatePhoneNumber] = useState(false);
  let [emailError, setEmailError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const phoneInputTxt = useRef<PhoneInput>(null);

  const {ref} = useDropDown();

  const param = props.route?.params?.forget_type;

  const onChangeInput = (value, state, errorState, regex, errorMessage) => {
    let error = validate(value, regex, errorMessage);
    state(value);
    errorState(error);
  };

  const renderInputFields = () => {
    return (
      <View
        style={{
          paddingHorizontal: Metrics.screenWidth * 0.05,
          marginTop: Metrics.screenHeight * 0.03,
        }}></View>
    );
  };

  const modalStateChange = () => {
    setModal(false);
  };

  const onConfirm = async () => {
    try {
      var response = null;

      response = await ApiSauce.post(forget_password, {email});

      'message' in response && response.message !== 'Please Enter A email'
        ? (setLoading(false), setModal(true))
        : (setLoading(false), setEmailError(response.message));
    } catch (error) {
      console.log(`error`, error.data.message);
      setLoading(false), setEmailError(error.data.message);
    }

    setModal(true);
  };

  const handlePhoneInput = (value, validate, countryCode) => {
    setPhoneNumer(countryCode + value);
    setValidatePhoneNumber(validate);
  };

  const handleForgetPassword = async () => {
    setLoading(true);

    // API CALLING
    try {
      let info = await createResource(
        forget_password,
        email ? {email} : {phone: phoneNumer},
        '',
      );
      setLoading(false);
      ref.current.alertWithType('success', 'Successful', info.message);

      param !== 'ph'
        ? props.navigation.navigate('Login')
        : props.navigation.navigate('EnterCode', {userDetails: info.userInfo});
    } catch (error) {
      setLoading(false);
      ref.current.alertWithType('error', 'Error', error.message);
    }
  };
  const renderBodyContent = () => {
    return (
      <ScrollView style={styles.ScrollStyle}>
        <ActivityIndicator
          opacity={0.85}
          isLoading={isLoading}
          size="large"
          color={Colors.primary}
        />

        <View
          style={{
            justifyContent: 'space-between',
            height: Metrics.screenHeight * 0.7,
          }}>
          <View>
            <Text style={styles.headingForget}>
              {strings('Auth.ForgotText')}
            </Text>

            {/* {renderBannerImg()} */}

            {/* {renderInputFields()} */}
            <View style={{paddingHorizontal: Metrics.screenWidth * 0.05}}>
              {param !== 'ph' ? (
                <CustomTextInput
                  returnKeyType="next"
                  enablesReturnKeyAutomaticallly={true}
                  placeholder="Enter Registered Email"
                  editable={true}
                  refrence={createRef.emailInputRef}
                  value={email}
                  onChangeInput={(value) =>
                    onChangeInput(
                      value,
                      setUserEmail,
                      setEmailError,
                      emailRegex,
                      errors.emailErr,
                    )
                  }
                  onSubmitRef={createRef.passwordInputRef}
                  onSubmit={(onSubmitRef) => {
                    console.log(`object`);
                  }}
                  onSubmit={() => handleForgetPassword()}
                  emailError={emailError}
                />
              ) : (
                <CustomPhoneInput
                  errorValidation={true}
                  codeText={false}
                  handlePhoneInput={handlePhoneInput}
                  phoneInputTxt={phoneInputTxt}
                />
              )}
            </View>
          </View>

          {/* <ModalPopup
            subheading="Email has been verified."
            state={modal}
            modalStateChange={modalStateChange}
            navigation={props.navigation}
            route={props.route.name}
          /> */}

          <TouchableOpacity
            style={{
              ...styles.ButtonStyleConfirm,
              backgroundColor: validatePhoneNumber ? '#3fa8f5' : '#8F93A2',
            }}
            disabled={validatePhoneNumber ? false : true}
            onPress={() => {
              handleForgetPassword();
            }}>
            <Text style={styles.ConfirmTextStyle}>
              {strings('Auth.confirmEmail')}{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Image source={Images.background} style={styles.BackgroundStyle} />
      {/* {isLoading && (
        <ActivityIndicator
          isLoading={true}
          size="large"
          color={Colors.primary}
        />
      )} */}

      <View
        style={{
          flexDirection: 'row',
          height: Metrics.screenHeight * 0.25,
          justifyContent: 'center',
          alignItems: 'center',
          width: Metrics.screenWidth * 1,
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: Metrics.ratio(10),
            top: Metrics.ratio(5),
          }}
          disabled={!email && validatePhoneNumber ? true : false}
          onPress={() => props.navigation.goBack()}>
          {/* <Image style={styles.BackArrowStyle} source={Images.BackArrow} /> */}

          <View style={styles.BackArrowStyle}>
            <WithLocalSvg asset={Images.BackArrowSvg} />
          </View>
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.LogoStyle}
          source={Images.logo}
        />
      </View>

      {renderBodyContent()}
      {/* </ImageBackground> */}

      <ModalPopup
        subheading="Your Email has been verified."
        state={modal}
        modalStateChange={modalStateChange}
        navigation={props.navigation}
      />
    </View>
  );
};

const mapStateToProps = () => ({});

const actions = {};

export default connect(mapStateToProps, actions)(ForgetPassword);
