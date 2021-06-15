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
import {request as register_user} from '../../redux/actions/authActions/SignUp';
import {request as clearData} from '../../redux/actions/authActions/SignUp';

import {CustomTextInput} from '../../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  emailRegex,
  passwordRegex,
  validate,
  nameRegex,
  phoneRegex,
} from '../../services/validation';
import {useDropDown, DropDownComponentProvider} from '../../components/Toast';
import {strings} from '../../I18n';
import styles from './styles';
import DatePicker from 'react-native-datepicker';
import {Header, ActivityIndicator} from '../../components';
import {WithLocalSvg, SvgUri} from 'react-native-svg';

import {sign_Api} from '../../config/WebServices';
import {postWithFormData} from '../../config/simpleApiCall';

import Feather from 'react-native-vector-icons/Feather';

let errors = {
  firstname: 'Length must be greater than 6',
  lastName: 'Length must be greater than 6',
  emailErr: 'Email not valid',
  phoneError: 'Please Enter a valid number',
  passwordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
  confirmpasswordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
};

const Register = (props) => {
  const dispatch = useDispatch();
  const createRef = {
    newPassInputRef: useRef(null),
    ConfirmPassInputRef: useRef(null),
    userNameInputRef: useRef(null),
  };
  let [date, setDate] = useState('');
  let [email, setUserEmail] = useState('');
  let [firstName, setFirstName] = useState('');
  let [lastName, setlastName] = useState('');
  let [phoneNumber, setphoneNumber] = useState('');
  let [userName, setuserName] = useState('');
  let [newPassword, setNewPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [emailError, setEmailError] = useState('');
  let [passwordError, setpasswordError] = useState('');
  let [confirmPasswordError, setConfirmpasswordError] = useState('');
  let [firstNameError, setfirstNameError] = useState('');
  let [lastNameError, setlastNameError] = useState('');
  let [userNameError, setuserNameError] = useState('');
  let [phoneNumberError, setphoneNumberError] = useState('');
  let [loading, setLoading] = useState(false);

  const signupResponse = useSelector((state) => {
    return state.signup;
  });

  const {ref} = useDropDown();

  const onChangeInput = (value, state, errorState, regex, errorMessage) => {
    let error = validate(value, regex, errorMessage);
    state(value);
    errorState(error);
  };

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const handleValidation = async () => {
    if (!firstName) {
      setfirstNameError('FirstName is required');
    } else if (!email) {
      setEmailError('Email is required.');
    } else if (!newPassword) {
      setPasswordError('Password is required.');
    } else if (newPassword !== confirmPassword) {
      setConfirmpasswordError('Passwords not same');
    }
    // else if (!phoneNumber) {
    //   setphoneNumberError('Phone Number is required');
    // }
    else if (!toggleCheckBox) {
      ref.current.alertWithType('error', 'Please Agree Terms of use.');
    } else {
      registerRequest();
    }
  };

  useEffect(() => {
    if (signupResponse.data.success) {
      ref.current.alertWithType(
        'success',
        'Successful',
        signupResponse.data.message,
      );
      props.navigation.navigate('Login');
    } else if (signupResponse.errorMessage) {
      ref.current.alertWithType('error', 'Error', signupResponse.errorMessage);
    }
  }, [signupResponse]);

  const handleErrors = () => {
    if (
      emailError === '' &&
      passwordError === '' &&
      confirmPasswordError === '' &&
      firstNameError === '' &&
      lastNameError === '' &&
      userNameError === '' &&
      firstName !== '' &&
      lastName !== '' &&
      userName !== '' &&
      confirmPassword !== '' &&
      email !== '' &&
      newPassword !== ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  const onSubmit = (value) => {
    if (value === 'onDone') {
      handleValidation();
    } else {
      value.current.focus();
    }
  };

  const renderNameInputFields = () => {
    return (
      <View style={styles.FLName}>
        <CustomTextInput
          placeholder={'First Name*'}
          customInputStyle={{
            width: Metrics.screenWidth * 0.43,
          }}
          onChangeInput={(value) =>
            onChangeInput(
              value,
              setFirstName,
              setfirstNameError,
              nameRegex,
              errors.firstname,
            )
          }
          value={firstName}
          onSubmitRef={'onDone'}
          onSubmit={(onSubmitRef) => {
            onSubmit(onSubmitRef);
          }}
          refrence={createRef.userNameInputRef}
          editable={true}
          emailError={firstNameError}
          returnKeyType="next"
        />

        <CustomTextInput
          placeholder={'Last Name*'}
          customInputStyle={{width: Metrics.screenWidth * 0.43}}
          onChangeInput={(value) =>
            onChangeInput(
              value,
              setlastName,
              setlastNameError,
              nameRegex,
              errors.lastName,
            )
          }
          value={lastName}
          onSubmitRef={'onDone'}
          onSubmit={(onSubmitRef) => {
            onSubmit(onSubmitRef);
          }}
          refrence={createRef.userNameInputRef}
          editable={true}
          emailError={lastNameError}
          returnKeyType="next"
        />
      </View>
    );
  };

  const renderUserName = () => {
    return (
      <CustomTextInput
        placeholder={'Username*'}
        customInputStyle={{
          marginTop: -Metrics.ratio(5),
        }}
        onChangeInput={(value) =>
          onChangeInput(
            value,
            setuserName,
            setuserNameError,
            nameRegex,
            errors.lastName,
          )
        }
        value={userName}
        onSubmitRef={'onDone'}
        onSubmit={(onSubmitRef) => {
          onSubmit(onSubmitRef);
        }}
        refrence={createRef.userNameInputRef}
        editable={true}
        emailError={userNameError}
        returnKeyType="next"
      />
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
            {strings('Auth.facebookLoginRegister')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.google}>
          <Image
            style={{width: Metrics.ratio(22)}}
            resizeMode="contain"
            source={Images.Google}
          />
          <Text style={styles.googleText}>
            {strings('Auth.googleLoginRegister')}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderPhoneInput = () => {
    return (
      <CustomTextInput
        countryPicker
        keyboardType={'numeric'}
        // secureTextEntry={true}
        returnKeyType="next"
        enablesReturnKeyAutomaticallly={true}
        placeholder={'Phone Number(optional)'}
        editable={true}
        refrence={createRef.ConfirmPassInputRef}
        value={phoneNumber}
        onChangeInput={(value) =>
          // onChangeInput(
          //   value,
          //   setphoneNumber,
          //   setphoneNumberError,
          //   // "",
          //   errors.phoneError,
          // )
          setphoneNumber(value)
        }
        onSubmitRef={'onDone'}
        onSubmit={(onSubmitRef) => {
          onSubmit(onSubmitRef);
        }}
        emailError={phoneNumberError}
        customInputStyle={{
          marginTop: -Metrics.ratio(5),
        }}
      />
    );
  };

  const renderDatePicker = () => {
    return (
      <View style={{}}>
        <View style={styles.datepickerView}>
          <DatePicker
            onDateChange={(date) => {
              setDate(date);
            }}
            date={date}
            style={{width: null}}
            iconComponent={
              <View style={styles.customDateIcon}>
                <WithLocalSvg asset={Images.DateIcon} />
              </View>
            }
            placeholder="Date of Birth (optional)"
            customStyles={{
              placeholderText: {
                color: '#3B3B3B',
              },
              dateInput: {
                borderWidth: 0,
                top: 4,
                left: date === '' ? -60 : -90,
              },
            }}
            format={'MM-DD-YYYY'}
          />
          {/* <View style={{ width: 30, height: 30, backgroundColor: 'blue' }}></View> */}
        </View>
      </View>
    );
  };

  const registerRequest = async () => {
    setLoading(true);

    const data = new FormData();
    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('userName', userName);
    data.append('email', email);
    data.append('password', newPassword);
    data.append('dob', date);
    data.append('phoneNumber', phoneNumber);
    data.append('userType', 'custom');
    try {
      let info = await postWithFormData(sign_Api, data, '');
      setLoading(false);

      ref.current.alertWithType('success', 'Successful', info.message);
      props.navigation.navigate('Login');
    } catch (err) {
      setLoading(false);
      ref.current.alertWithType('error', err.messsage);
      console.log(err, 'error');
    }
  };

  const renderBodyContent = () => {
    return (
      <View style={{flex: 7}}>
        <ScrollView>
          <View style={{paddingHorizontal: Metrics.screenWidth * 0.05}}>
            {renderNameInputFields()}
            {renderUserName()}

            <CustomTextInput
              inputLeftIcon={Images.Email}
              returnKeyType="next"
              enablesReturnKeyAutomaticallly={true}
              placeholder="Email*"
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
              customInputStyle={{
                marginTop: -Metrics.ratio(5),
              }}
            />

            {renderDatePicker()}
            {renderPhoneInput()}

            <CustomTextInput
              inputLeftIcon={Images.Password}
              inputRightIcon={Images.eyeShowPass}
              inputRightHideIcon={Images.eyeHidePass}
              secureTextEntry={true}
              returnKeyType="next"
              enablesReturnKeyAutomaticallly={true}
              placeholder={'Password*'}
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
              onSubmitRef={'onDone'}
              onSubmit={(onSubmitRef) => {
                onSubmit(onSubmitRef);
              }}
              emailError={passwordError}
              customInputStyle={{
                marginTop: -Metrics.ratio(5),
              }}
            />

            <CustomTextInput
              inputLeftIcon={Images.Password}
              inputRightIcon={Images.eyeShowPass}
              inputRightHideIcon={Images.eyeHidePass}
              secureTextEntry={true}
              returnKeyType="next"
              enablesReturnKeyAutomaticallly={true}
              placeholder={'Confirm Password*'}
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
              onSubmitRef={'onDone'}
              onSubmit={(onSubmitRef) => {
                onSubmit(onSubmitRef);
              }}
              emailError={confirmPasswordError}
              customInputStyle={{
                marginTop: -Metrics.ratio(5),
              }}
            />

            <View>
              <Text style={styles.ORText}>{strings('Auth.or')}</Text>
            </View>

            {renderSocialTab()}

            <View style={styles.RegisterTag}>
              <TouchableOpacity
                onPress={() => setToggleCheckBox(!toggleCheckBox)}
                style={styles.checkbox}>
                {toggleCheckBox && (
                  <Feather
                    name="check"
                    color="#3fa8f5"
                    size={Metrics.ratio(16)}
                  />
                )}
              </TouchableOpacity>
              {/* <CheckBox
                tintColors={{ true: '#3fa8f5', false: '#fff' }}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              /> */}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                }}>
                <Text style={styles.RegisterHere}>{strings('Auth.Agree')}</Text>
                <TouchableOpacity
                  onPress={() => props.navigation.navigate('TermsofUse')}>
                  <Text style={styles.RegisterHereLink}>
                    {strings('Auth.Term')}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.RegisterHere}>{strings('Auth.And')}</Text>

                <TouchableOpacity
                  onPress={() => props.navigation.navigate('PrivacyPolicy')}>
                  <Text style={styles.RegisterHereLinkPolicy}>
                    {strings('Auth.Privacy')}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                ...styles.loginBtn,
                backgroundColor: handleErrors() ? '#3fa8f5' : '#8F93A2',
              }}>
              <TouchableOpacity
                // disabled={handleErrors() ? false : true}
                onPress={handleValidation}>
                <Text style={styles.loginBtnText}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header
        goBackWithHeading
        heading="Register"
        navigation={props.navigation}
      />

      <ActivityIndicator
        isLoading={loading}
        size="large"
        color={Colors.primary}
      />

      {renderBodyContent()}

      {/* <Toast
        ref={(toast) => (createRef.toastRef = toast)}
        style={{
          backgroundColor: 'red',
          width: '90%',
          alignItems: 'center',
        }}
        position="top"
        positionValue={10}
        // opacity={0.8}
        textStyle={{color: 'white', textAlign: 'center'}}
      /> */}
    </View>
  );
};

export default Register;
