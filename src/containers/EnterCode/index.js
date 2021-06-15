import React, {useState} from 'react';

import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {WithLocalSvg} from 'react-native-svg';

import {CustomTextInput, ActivityIndicator} from '../../components';
import {emailRegex, validate, NameRegex} from '../../services/validation';
import {Images, Metrics, Colors} from '../../theme';
import styles from './style';
import {strings} from '../../I18n';
import {otp_verification} from '../../config/WebServices';
import {createResource} from '../../config/simpleApiCall';
import {useDropDown} from '../../components/Toast';

let errors = {
  codeError: 'Code not valid',
};

const EnterCode = (props) => {
  let [code, setCode] = useState('');
  let [codeError, setCodeError] = useState('');

  const {ref} = useDropDown();

  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const param = props.route?.params?.userDetails;
  console.log('EnterCode ~ param', param);

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

  const onConfirm = async () => {
    setLoading(true);

    // API CALLING
    try {
      let payload = {
        userId: param?.userId,
        phone: param?.phoneNumber,
        code,
      };

      let info = await createResource(otp_verification, payload, '');
      setLoading(false);
      ref.current.alertWithType('success', 'Successful', info.message);

      props.navigation.navigate('EnterNewPassword', {userDetails: param});
    } catch (error) {
      setLoading(false);
      ref.current.alertWithType('error', 'Error', error.message);
    }

    // try {
    //   var response = null;

    //   response = await ApiSauce.post(forget_password, { email });

    //   'message' in response && response.message !== 'Please Enter A email'
    //     ? (setLoading(false), setModal(true))
    //     : (setLoading(false), setEmailError(response.message));
    // } catch (error) {
    //   console.log(`error`, error.data.message);
    //   setLoading(false), setEmailError(error.data.message);
    // }

    // setModal(true);
  };

  //   const renderBannerImg = () => {
  //     return (
  //     <View>
  //         <Image
  //           style={{height: Metrics.ratio(200), width: null, marginBottom:Metrics.ratio(20)}}
  //           resizeMode="contain"
  //           source={Images.BannerForget}
  //         />
  //       </View>
  //     );
  // };

  const renderBodyContent = () => {
    return (
      <ScrollView style={styles.ScrollCode}>
        {/* <Text style={styles.headingForget}>{strings('Auth.ForgotText')}</Text> */}
        <View
          style={{
            justifyContent: 'space-between',
            height: Metrics.screenHeight * 0.7,
          }}>
          <View>
            <Text style={styles.headingForget}>Forgot Password</Text>

            {/* {renderBannerImg()} */}

            <View style={{paddingHorizontal: Metrics.screenWidth * 0.05}}>
              <CustomTextInput
                placeholder={'Enter Code'}
                onSubmit={(onSubmitRef) => {
                  console.log(`object`);
                }}
                onChangeInput={(value) =>
                  onChangeInput(
                    value,
                    setCode,
                    setCodeError,
                    NameRegex,
                    errors.codeError,
                  )
                }
                onSubmit={(onSubmitRef) => {
                  console.log(`object`);
                }}
                emailError={codeError}
              />
            </View>
          </View>

          <TouchableOpacity
            style={styles.ButtonStyleConfirm}
            onPress={() => onConfirm()}
            // onPress={() => props.navigation.navigate('EnterNewPassword')}
          >
            <Text style={styles.ConfirmTextStyle}>
              {' '}
              {strings('Auth.confirmEmail')}{' '}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          height: Metrics.screenHeight * 0.4,
          width: Metrics.screenWidth,
          position: 'absolute',
        }}
        source={Images.background}
      />
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
          {/* <Image style={styles.BackArrowImg} source={Images.BackArrow} /> */}

          <View style={styles.BackArrowImg}>
            <WithLocalSvg asset={Images.BackArrowSvg} />
          </View>
        </TouchableOpacity>
        <Image
          resizeMode="contain"
          style={styles.logoImg}
          source={Images.logo}
        />
      </View>

      {renderBodyContent()}
    </View>
  );
};

export default EnterCode;
