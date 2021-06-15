import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {Images, Metrics, Colors} from '../../theme';
import {CustomTextInput, ActivityIndicator} from '../../components';
import {emailRegex, passwordRegex, validate} from '../../services/validation';
import styles from './styles';
import {strings} from '../../I18n';
import {reset_password} from '../../config/WebServices';
import {createResource} from '../../config/simpleApiCall';
import {useDropDown} from '../../components/Toast';

import {WithLocalSvg} from 'react-native-svg';

let errors = {
  passwordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  confirmpasswordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
};

const EnterNewPassword = (props) => {
  const createRef = {
    newPassInputRef: useRef(null),
    ConfirmPassInputRef: useRef(null),
  };

  const {ref} = useDropDown();

  let [newPassword, setNewPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [passwordError, setpasswordError] = useState('');
  let [confirmPasswordError, setConfirmpasswordError] = useState('');
  const [isLoading, setLoading] = useState(false);

  const param = props.route?.params?.userDetails;
  console.log('Reset Password ~ param', param);

  const onConfirm = async () => {
    // API CALLING
    try {
      let payload = {
        password: newPassword,
      };

      if (newPassword !== confirmPassword) {
        ref.current.alertWithType('error', 'Error', 'Your Passwords Not Same');
      } else {
        setLoading(true);

        let info = await createResource(
          reset_password(param?.userId),
          payload,
          '',
        );
        setLoading(false);
        ref.current.alertWithType('success', 'Successful', info.message);

        props.navigation.navigate('Login');
      }
    } catch (error) {
      setLoading(false);
      ref.current.alertWithType('error', 'Error', error.message);
    }
  };

  const onChangeInput = async (
    value,
    state,
    errorState,
    regex,
    errorMessage,
  ) => {
    let error = await validate(value, regex, errorMessage);
    state(value);
    errorState(error);
  };

  const renderTextInput = () => {
    return (
      <View>
        <View style={{paddingHorizontal: Metrics.screenWidth * 0.05}}>
          <CustomTextInput
            inputLeftIcon={Images.Password}
            inputRightIcon={Images.eyeShowPass}
            inputRightHideIcon={Images.eyeHidePass}
            secureTextEntry={true}
            returnKeyType="next"
            enablesReturnKeyAutomaticallly={true}
            placeholder={'Enter New Password'}
            editable={true}
            refrence={createRef.newPassInputRef}
            value={newPassword}
            onChangeInput={(value) =>
              onChangeInput(
                value,
                setNewPassword,
                setpasswordError,
                passwordRegex,
                errors.passwordErr,
              )
            }
            // onChangeInput={(value) => console.log('rsf')}
            onSubmitRef={'onDone'}
            onSubmit={(onSubmitRef) => {
              console.log('sdf');
            }}
            emailError={passwordError}
          />
        </View>
        <View style={{paddingHorizontal: Metrics.screenWidth * 0.05}}>
          <CustomTextInput
            inputLeftIcon={Images.Password}
            inputRightIcon={Images.eyeShowPass}
            inputRightHideIcon={Images.eyeHidePass}
            secureTextEntry={true}
            returnKeyType="next"
            enablesReturnKeyAutomaticallly={true}
            placeholder={'Enter Confirm Password'}
            editable={true}
            refrence={createRef.ConfirmPassInputRef}
            value={confirmPassword}
            onChangeInput={(value) =>
              onChangeInput(
                value,
                setConfirmPassword,
                setConfirmpasswordError,
                passwordRegex,
                errors.confirmpasswordErr,
              )
            }
            // onChangeInput={(value) => console.log('rsf')}
            onSubmitRef={'onDone'}
            onSubmit={(onSubmitRef) => {
              console.log('sdf');
            }}
            emailError={confirmPasswordError}
          />
        </View>
      </View>
    );
  };

  const renderBodyContent = () => {
    return (
      <ScrollView style={styles.ScrollStyle}>
        {/* <Text style={styles.headingForget}>{strings('Auth.ForgotText')}</Text> */}

        <View
          style={{
            justifyContent: 'space-between',
            height: Metrics.screenHeight * 0.7,
          }}>
          <View>
            <Text style={styles.headingForget}>Forgot Password</Text>
            {renderTextInput()}
          </View>

          <TouchableOpacity
            // onPress={() => (setLoading(true), onConfirm())}
            onPress={() => onConfirm()}
            style={styles.ButtonStyleConfirm}>
            <Text style={styles.ConfirmTextStyle}>
              {/* {strings('Auth.login')} */}
              CONFIRM
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Image style={styles.BackgroundStyle} source={Images.background} />
      {isLoading && (
        <ActivityIndicator
          isLoading={true}
          size="large"
          color={Colors.primary}
        />
      )}

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
    </View>
  );
};

export default EnterNewPassword;
