// @flow
import React, {useRef, useState, useEffect} from 'react';

import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import styles from './styles';
import {strings} from '../../I18n';
import {useDropDown} from '../../components/Toast';
import {Images, Metrics, Colors} from '../../theme';
import {CustomTextInput, ActivityIndicator} from '../../components';
import {request as clearData} from '../../redux/actions/authActions/SignUp';
import {request as loginReuest} from '../../redux/actions/authActions/Login';
import {emailRegex, passwordRegex, validate} from '../../services/validation';

let errors = {
  emailErr: 'Email not valid',
  passwordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
};

const Login = ({navigation}) => {
  const createRef = {
    emailInputRef: useRef(null),
    passwordInputRef: useRef(null),
    toastRef: useRef(null),
  };
  let [email, setUserEmail] = useState('');
  let [password, setUserPassword] = useState('');
  // let [email, setUserEmail] = useState('asadansari62@gmail.com');
  // let [password, setUserPassword] = useState('Sarim@123');

  //for local
  // let [email, setUserEmail] = useState('merchant1@gmail.com');
  // let [password, setUserPassword] = useState('password');
  let [emailError, setEmailError] = useState('');
  let [passwordError, setpasswordError] = useState('');
  const dispatch = useDispatch();
  const loginResponse = useSelector((state) => {
    return state.login;
  });

  const {ref} = useDropDown();

  useEffect(() => {
    if (loginResponse.successfull) {
      navigation.goBack();
    }

    loginResponse.failure === true && loginResponse.isFetching === false
      ? ref.current.alertWithType('error', 'Error', loginResponse.errorMessage)
      : null;
  }, [loginResponse]);

  useEffect(() => {
    dispatch(clearData());
  }, []);

  const handleLogin = async () => {
    try {
      let payload = {
        email: email,
        password: password,
      };
      await dispatch(loginReuest(payload));
    } catch (err) {
      console.log(err, 'error');
    }
  };

  const handleValidation = () => {
    console.log('validation');
  };

  const onSubmit = (value) => {
    if (value === 'onDone') {
      handleValidation();
    } else {
      value.current.focus();
    }
  };

  const onChangeInput = async (
    value,
    state,
    errorState,
    regex,
    errorMessage,
  ) => {
    let error = validate(value, regex, errorMessage);
    console.log('11111111',error, 'info');
    state(value);
    errorState(error);
  };

  const handleErrors = () => {
    if (
      !emailError  &&
      !passwordError  &&
      email !== '' &&
      password !== ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  const renderLoginFields = () => {
    return (
      <View>
        <CustomTextInput
          inputLeftIcon={Images.Email}
          returnKeyType="next"
          enablesReturnKeyAutomaticallly={true}
          placeholder="Email ID"
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
            onSubmit(onSubmitRef);
          }}
          emailError={emailError}
        />

        <CustomTextInput
          inputLeftIcon={Images.Password}
          inputRightIcon={Images.eyeShowPass}
          inputRightHideIcon={Images.eyeHidePass}
          secureTextEntry={true}
          returnKeyType="next"
          enablesReturnKeyAutomaticallly={true}
          placeholder={'Password'}
          editable={true}
          refrence={createRef.passwordInputRef}
          value={password}
          onChangeInput={(value) =>
            onChangeInput(
              value,
              setUserPassword,
              setpasswordError,
              passwordRegex,
              errors.passwordErr,
            )
          }
          onSubmitRef={'onDone'}
          onSubmit={(onSubmitRef) => {
            onSubmit(onSubmitRef);
          }}
          emailError={passwordError}
        />
      </View>
    );
  };

  const renderSocialTab = () => {
    return (
      <View>
        <TouchableOpacity style={styles.facebook}>
          <Image
            style={{width: Metrics.ratio(22)}}
            resizeMode="contain"
            source={Images.Facebook}
          />
          <Text style={styles.facebookText}>
            {strings('Auth.facebookLogin')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.google}>
          <Image
            style={{width: Metrics.ratio(22)}}
            resizeMode="contain"
            source={Images.Google}
          />
          <Text style={styles.googleText}>{strings('Auth.googleLogin')}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBodyContent = () => {
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.ScrollViewStyle}>
        <Text style={styles.heading}> {strings('Auth.LOGIN')}</Text>

        {renderLoginFields()}
        {/* ForgetPassword */}
        <TouchableOpacity onPress={() => navigation.navigate('SendCode')}>
          <Text style={styles.forgot}>{strings('Auth.forgetPassword')}</Text>
        </TouchableOpacity>

        <View
          style={{
            ...styles.loginBtn,
            backgroundColor: handleErrors() ? '#3fa8f5' : '#8F93A2',
          }}>
          <TouchableOpacity
            style={{}}
            disabled={handleErrors() ? false : true}
            onPress={handleLogin}>
            <Text style={styles.loginBtnText}> {strings('Auth.login')}</Text>
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.ORText}>{strings('Auth.or')}</Text>
        </View>

        {renderSocialTab()}

        <View style={styles.RegisterTag}>
          <Text style={styles.RegisterHere}>
            {strings('Auth.RegisteredTag')}{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.RegisterHereLink}>
              {strings('Auth.RegisteredHere')}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };

  return (
    <ImageBackground style={styles.backgroundImg} source={Images.background}>
      <Image resizeMode="contain" style={styles.LogoImg} source={Images.logo} />

      {loginResponse.isFetching === true && (
        <ActivityIndicator
          isLoading={true}
          size="large"
          color={Colors.primary}
        />
      )}

      {renderBodyContent()}
    </ImageBackground>
  );
};

export default Login;
