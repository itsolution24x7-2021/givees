// @flow
import React, {useRef, useState, useEffect} from 'react';

import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-datepicker';
import {WithLocalSvg} from 'react-native-svg';
import ToggleSwitch from 'toggle-switch-react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {Images, Metrics, Colors, Fonts} from '../../theme';
import {
  CustomTextInput,
  Footer,
  CustomPhoneInput,
  ActivityIndicator,
} from '../../components';

import {useDropDown} from '../../components/Toast';
import styles from './style';
import {get_Country} from '../../config/WebServices';
import {getResources, updateResource} from '../../config/simpleApiCall';
import {update_user} from '../../config/WebServices';
import {emailRegex, passwordRegex, validate} from '../../services/validation';

let errors = {
  emailErr: 'Email not valid',
  passwordErr:
    'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
};

var gender_props = [
  {label: 'Male', value: 0},
  {label: 'Female', value: 1},
  {label: 'Other', value: 2},
  {label: 'N/A', value: 3},
];

var profile_props = [
  {label: 'Private', value: 0},
  {label: 'Public', value: 1},
];

const EditProfile = (props) => {
  const userDetails = useSelector((state) => {
    return state.login?.data?.data[0];
  });

  const {ref} = useDropDown();

  const userInfo = useSelector((state) => {
    return state.login.data;
  });

  useEffect(() => {
    setFirstName(userDetails?.usersdetails?.firstName);
    setSecondName(userDetails?.usersdetails?.lastName);
    setPhoneNumber(userDetails?.usersdetails?.phoneNumber);
    setDate(userDetails?.usersdetails?.dob);
    setBioDescription(userDetails?.usersdetails?.bio);
    setGender(parseInt(userDetails?.usersdetails?.gender));
    setHandle(userDetails?.userName);
    setUserEmail(userDetails?.email);
    setUserProfile((prevState) => ({
      uri: userDetails?.usersdetails?.imagePath,
    }));
  }, []);

  const createRef = {
    emailInputRef: useRef(null),
    passwordInputRef: useRef(null),
    countryValueRef: useRef(null),
    stateValueRef: useRef(null),
    cityValueRef: useRef(null),
  };

  const [value, SetValue] = useState(0);
  const [loading, setLoading] = useState(false);
  const [gender, setGender] = useState(0);
  const [Profile, SetProfile] = useState(0);
  const [userProfile, setUserProfile] = useState({});

  let [firstName, setFirstName] = useState('');
  let [secondName, setSecondName] = useState('');
  let [userName, setHandle] = useState('');
  let [phoneNumber, setPhoneNumber] = useState('');
  let [date, setDate] = useState('');

  let [email, setUserEmail] = useState('');
  let [password, setUserPassword] = useState('');
  let [confirmPassword, setConfirmPassword] = useState('');
  let [emailError, setEmailError] = useState('');
  let [passwordError, setpasswordError] = useState('');
  let [confirmPasswordError, setConfirmPasswordError] = useState('');
  let [phoneNumberError, setPhoneNumberError] = useState('');
  let [validatePhoneNumber, setValidatePhoneNumber] = useState(true);

  let [countryList, setCountryList] = useState([]);
  let [stateList, setStateList] = useState(null);
  let [cityList, setCityList] = useState(null);

  const [countryValue, setCountryValue] = useState(null);
  const [stateValue, setStateValue] = useState(null);
  const [cityValue, setCityValue] = useState(null);
  const [bioDescription, setBioDescription] = useState(null);

  const phoneInputTxt = useRef<PhoneInput>(null);

  let [countryPicker, setCountryPicker] = useState({
    country: null,
    modalVisible: false,
    countryCode: null,
    callingCode: null,
    withCountryNameButton: true,
    withFlag: true,
    withFilter: true,
    withAlphaFilter: true,
    withCallingCode: false,
  });

  const handleValidation = async () => {
    if (phoneNumber && !validatePhoneNumber) {
      ref.current.alertWithType('error', 'Error', 'Please Enter Right Number');
    } else if (password && password !== confirmPassword) {
      setConfirmPasswordError('Passwords not same');
      ref.current.alertWithType('error', 'Error', 'Passwords not same');
    } else {
      handleUpdate();
    }
  };

  const handlePhoneInput = (value, validate, countryCode) => {
    setValidatePhoneNumber(validate);
    setPhoneNumber(countryCode + value);
  };

  const uploadPicture = () => {
    const options = {};
    launchImageLibrary(options, (response) => {
      if (response?.assets && response?.assets.length) {
        setUserProfile({
          uri: response.assets[0].uri,
          type: response.assets[0].type,
          name: response.assets[0].fileName,
        });
      }
    });
  };

  const onSubmit = (value) => {
    if (value === 'onDone') {
      handleValidation();
    } else {
      value.current.focus();
    }
  };

  const getCountries = async () => {
    try {
      const res = await getResources(`${get_Country}type=getCountries`);
      const response = res;

      let arrCountry = [];

      for (const key in response?.result) {
        arrCountry = [
          ...arrCountry,
          {
            label: response?.result[key],
            value: response?.result[key].toLocaleLowerCase(),
            code: key,
          },
        ];
      }
      setCountryList(arrCountry);
    } catch (error) {
      console.log(`response while getting country!!!!!!!!!!!!!!!`, error);
    }
  };

  const getStates = async (arrCountry) => {
    try {
      var val = null;
      if (arrCountry) {
        val = countryList.filter((v) => v.value === arrCountry);
      }

      const res = await getResources(
        `${get_Country}type=getStates&countryId=${val && val[0]?.code}`,
      );

      const responseState = res;

      let arrState = [];

      for (const key in responseState?.result) {
        arrState = [
          ...arrState,
          {
            label: responseState?.result[key],
            value: responseState?.result[key].toLocaleLowerCase(),
            code: key,
          },
        ];
      }
      setStateList(arrState);

      // getCities(val ? val : arrCountry, arrState);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const getCities = async (value) => {
    try {
      var val = null;
      let country = null;
      let city = null;

      if (value) {
        val = stateList.filter((v) => v.value === value);
        country = countryList.filter((v) => v.value === countryValue);
      }

      console.log(`!!!!!!!val in state`, val);
      console.log(`################# country`, country);

      const res = await getResources(
        `${get_Country}type=getCities&countryId=${
          country ? country[0]?.code : null
        }&stateId=${val ? val[0]?.code : null}`,
      );

      const responseCity = res;
      let arrCity = [];
      for (const key in responseCity?.result) {
        arrCity = [
          ...arrCity,
          {
            label: responseCity?.result[key],
            value: responseCity?.result[key].toLocaleLowerCase(),
            code: key,
          },
        ];
      }
      setCityList(arrCity);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const renderFnameLname = () => {
    return (
      <View style={{...styles.FLName, marginTop: Metrics.ratio(15)}}>
        <CustomTextInput
          placeholder={'First Name'}
          customInputStyle={{
            width: Metrics.screenWidth * 0.45,
            height: Metrics.ratio(40),
          }}
          onChangeInput={(val) => setFirstName(val)}
          value={firstName}
          floatingLabel
        />

        <CustomTextInput
          placeholder={'Last Name'}
          customInputStyle={{
            width: Metrics.screenWidth * 0.45,
            height: Metrics.ratio(40),
          }}
          onChangeInput={(val) => setSecondName(val)}
          value={secondName}
          floatingLabel
        />
      </View>
    );
  };

  const onSelect = (country) => {
    setCountryPicker((previousState) => {
      return {
        ...previousState,
        countryCode: country.cca2,
        country: country,
        callingCode: country?.callingCode[0],
      };
    });
  };

  const FloatingLabel = ({placeholder}) => {
    return (
      <View
        style={{
          marginLeft: Metrics.ratio(5),
          position: 'absolute',
          top: 0,
        }}>
        <Text
          style={{
            color: '#8F93A2',
            fontSize: Metrics.ratio(9),
          }}>
          {placeholder}
        </Text>
      </View>
    );
  };

  const renderCountryHandle = () => {
    const placeholder = {
      label: userDetails.usersdetails?.country
        ? userDetails.usersdetails?.country
        : 'Country',
      value: null,
      color: 'black',
    };

    return (
      <View>
        <CustomTextInput
          placeholder={'Handle'}
          onChangeInput={(val) => setHandle(val)}
          value={userName}
          floatingLabel
          customInputStyle={{
            marginTop: -Metrics.ratio(5),
            height: Metrics.ratio(40),
          }}
        />
        <TouchableOpacity
          style={{
            ...styles.countryPicker,
          }}>
          <View style={{flex: 1}}>
            {countryValue && <FloatingLabel placeholder={placeholder.label} />}
            <RNPickerSelect
              style={{
                inputAndroid: {color: 'black'},
                placeholder: {
                  color: '#3B3B3B',
                  fontSize: Fonts.size.thirteen,
                  fontFamily: Fonts.type.Arial,
                },
              }}
              useNativeAndroidPickerStyle={false}
              disabled={false}
              placeholder={placeholder}
              onValueChange={(value) => {
                setCountryValue(value);
                getStates(value);
              }}
              items={
                countryList.length
                  ? countryList
                  : [{label: 'Canada', value: 'cananda'}]
              }
              value={countryValue?.label}
              ref={(el) => (createRef.countryValueRef = el)}
              Icon={() => (
                <View
                  style={{
                    height: Metrics.ratio(40),
                    marginRight: Metrics.ratio(2),
                    marginTop: -Metrics.ratio(2),
                    justifyContent: 'center',
                  }}>
                  <WithLocalSvg asset={Images.DropDownSvg} />
                </View>
              )}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const handleUpdate = async () => {
    setLoading(true);

    const data = new FormData();
    data.append('firstName', firstName);
    data.append('lastName', secondName);
    data.append('userName', userName);
    data.append('email', email);
    data.append('dob', date);
    data.append('country', countryValue);
    data.append('city', cityValue);
    data.append('state', stateValue);
    data.append('gender', gender);
    data.append('public_profile', Profile);
    data.append('bio', bioDescription);
    data.append('new_password', password);
    data.append('userImage', userProfile);
    data.append('phoneNumber', phoneNumber);
    data.append('userType', 'custom');
    try {
      let info = await updateResource(
        update_user(userInfo.data[0].id),
        userInfo.accessToken,
        data,
      );

      setLoading(false);
      info.data.accessToken = userInfo.accessToken;
      // dispatch(updateLoginResponse(info))

      ref.current.alertWithType('success', 'Successful', info.message);
    } catch (err) {
      setLoading(false);
      ref.current.alertWithType('error', 'Error', err.messsage);
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

  const renderStateCity = () => {
    const placeholderState = {
      label: userDetails.usersdetails?.state
        ? userDetails.usersdetails?.state
        : 'Province',
      value: null,
      color: '#9EA0A4',
    };

    const placeholderCity = {
      label: userDetails.usersdetails?.city
        ? userDetails.usersdetails?.city
        : 'City',
      value: null,
      color: '#9EA0A4',
    };

    return (
      <View style={styles.FLName}>
        <View
          style={{
            ...styles.countryPicker,
            width: Metrics.screenWidth * 0.45,
            marginTop: Metrics.ratio(0),
          }}>
          <View style={{flex: 1}}>
            {stateValue && (
              <FloatingLabel placeholder={placeholderState.label} />
            )}
            <RNPickerSelect
              selectedValue={userDetails.usersdetails.country}
              style={{
                inputAndroid: {color: 'black'},
                placeholder: {
                  color: '#3B3B3B',
                  fontSize: Fonts.size.thirteen,
                  fontFamily: Fonts.type.Arial,
                },
              }}
              selected
              useNativeAndroidPickerStyle={false}
              disabled={false}
              placeholder={placeholderState}
              onValueChange={(value) => {
                setStateValue(value);
                getCities(value);
              }}
              items={
                stateList ? stateList : [{label: 'Canada', value: 'cananda'}]
              }
              value={stateValue}
              ref={(el) => (createRef.stateValueRef = el)}
              Icon={() => (
                <View
                  style={{
                    height: Metrics.ratio(40),
                    // marginTop: Metrics.ratio(2),
                    justifyContent: 'center',
                  }}>
                  <WithLocalSvg asset={Images.DropDownSvg} />
                </View>
              )}
            />
          </View>
        </View>

        <View
          style={{
            ...styles.countryPicker,
            width: Metrics.screenWidth * 0.45,
            marginTop: Metrics.ratio(0),
          }}>
          <View style={{flex: 1}}>
            {cityValue && <FloatingLabel placeholder={placeholderCity.label} />}
            <RNPickerSelect
              style={{
                inputAndroid: {color: 'black'},
                placeholder: {
                  color: '#3B3B3B',
                  fontSize: Fonts.size.thirteen,
                  fontFamily: Fonts.type.Arial,
                },
              }}
              useNativeAndroidPickerStyle={false}
              disabled={false}
              placeholder={placeholderCity}
              onValueChange={(value) => {
                setCityValue(value);
              }}
              items={
                cityList ? cityList : [{label: 'Canada', value: 'cananda'}]
              }
              value={cityValue}
              ref={(el) => (createRef.cityValueRef = el)}
              Icon={() => (
                <View
                  style={{
                    height: Metrics.ratio(40),
                    // marginTop: Metrics.ratio(5),
                    justifyContent: 'center',
                  }}>
                  <WithLocalSvg asset={Images.DropDownSvg} />
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  };

  const renderPhoneField = () => {
    var val = null;
    if (countryValue) {
      val = countryList.filter((v) => v.value === countryValue);
    }
    return (
      <CustomPhoneInput
        secondaryContainer={styles.secondaryContainer}
        secondaryFlagButton={styles.secondaryFlagButton}
        secondaryTextInput={styles.secondaryTextInput}
        secondaryPolygon={styles.secondaryPolygon}
        secondaryCodeText={styles.secondaryCodeText}
        secondaryCodeTextStyle={styles.secondaryCodeTextStyle}
        secondaryTextView={styles.secondaryTextView}
        secondaryPlaceholderStyle={styles.secondaryPlaceholderStyle}
        isVisible={false}
        codeText={true}
        handlePhoneInput={handlePhoneInput}
        phoneInputTxt={phoneInputTxt}
        onChangeInput={(val) => setPhoneNumber(val)}
        value={phoneNumber}
        placeholder={'Phone Number(Optional)'}
        country={val}
      />
    );
  };

  const renderGender = () => {
    console.log(
      'userDetails.usersdetails.gender',
      userDetails.usersdetails.gender,
    );
    return (
      <View>
        <Text style={styles.RadioView}>Select Gender</Text>
        <RadioForm initial={0} formHorizontal>
          {gender_props.map((obj, i) => {
            var is_selected = gender == i;
            return (
              <RadioButton>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={
                    // userDetails.usersdetails.gender
                    //   ? parseInt(userDetails.usersdetails.gender)
                    //   :
                    gender === i
                  }
                  onPress={(value) => {
                    setGender(value);
                  }}
                  borderWidth={1}
                  buttonInnerColor={'#3FA9F5'}
                  buttonOuterColor={gender === i ? '#3FA9F5' : '#3FA9F5'}
                  buttonSize={13}
                  buttonOuterSize={18}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => {
                    setGender(value);
                  }}
                  labelStyle={{
                    paddingHorizontal: Metrics.screenWidth * 0.03,
                    fontFamily: is_selected
                      ? Fonts.type.ArialBold
                      : Fonts.type.Arial,
                    color: '#373737',
                    fontSize: Fonts.size.fifteen,
                  }}
                />
              </RadioButton>
            );
          })}
        </RadioForm>
      </View>
    );
  };

  const renderDatePicker = () => {
    return (
      <View style={styles.datepickerView}>
        {date !== '' && (
          <View style={{marginLeft: Metrics.ratio(5)}}>
            <FloatingLabel placeholder={'Date of Birth'} />
          </View>
        )}
        <DatePicker
          style={{width: null}}
          date={date}
          iconComponent={
            <WithLocalSvg
              style={styles.customDateIcon}
              asset={Images.DateIcon}
            />
          }
          placeholder="Date of Birth"
          customStyles={{
            placeholderText: {
              color: '#373737',
            },
            dateInput: {
              borderWidth: 0,
              left: -100,
            },
          }}
          format={'MMM Do YYYY'}
          placeholderTextColor={'#373737'}
          onDateChange={(date) => setDate(date)}
        />
      </View>
    );
  };

  const renderEmailField = () => {
    return (
      <CustomTextInput
        inputLeftIcon={Images.Email}
        returnKeyType="next"
        enablesReturnKeyAutomaticallly={true}
        placeholder="Email ID"
        editable={true}
        refrence={createRef.emailInputRef}
        value={email}
        onChangeInput={(val) => setUserEmail(val)}
        // onChangeInput={(value) =>
        //   onChangeInput(
        //     value,
        //     setUserEmail,
        //     setEmailError,
        //     emailRegex,
        //     errors.emailErr,
        //   )
        // }
        onSubmitRef={createRef.passwordInputRef}
        onSubmit={(onSubmitRef) => {
          onSubmit(onSubmitRef);
        }}
        emailError={emailError}
        customInputStyle={{
          height: Metrics.ratio(40),
          marginTop: -Metrics.ratio(0),
        }}
        onChangeInput={(val) => setUserEmail(val)}
        value={email}
        floatingLabel
      />
    );
  };

  const renderPasswordField = () => {
    return (
      <View>
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
          customInputStyle={{
            height: Metrics.ratio(40),
            marginTop: -Metrics.ratio(5),
          }}
          onChangeInput={(val) => setUserPassword(val)}
          floatingLabel
        />

        <CustomTextInput
          inputLeftIcon={Images.Password}
          inputRightIcon={Images.eyeShowPass}
          inputRightHideIcon={Images.eyeHidePass}
          secureTextEntry={true}
          returnKeyType="next"
          enablesReturnKeyAutomaticallly={true}
          placeholder={'Confirm Password'}
          editable={true}
          refrence={createRef.passwordInputRef}
          value={confirmPassword}
          onChangeInput={(value) =>
            onChangeInput(
              value,
              setUserPassword,
              setConfirmPasswordError,
              passwordRegex,
              errors.passwordErr,
            )
          }
          onSubmitRef={'onDone'}
          onSubmit={(onSubmitRef) => {
            onSubmit(onSubmitRef);
          }}
          // emailError={confirmPasswordError}
          customInputStyle={{
            height: Metrics.ratio(40),
            marginTop: -Metrics.ratio(5),
          }}
          onChangeInput={(val) => setConfirmPassword(val)}
          floatingLabel
        />
      </View>
    );
  };

  const renderPublic = () => {
    return (
      <View>
        <Text style={styles.RadioView}>Profile Status</Text>
        <RadioForm initial={0} formHorizontal>
          {profile_props.map((obj, i) => {
            var is_selected = Profile == i;
            return (
              <RadioButton>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={Profile === i}
                  onPress={(Profile) => {
                    SetProfile(Profile);
                  }}
                  borderWidth={1}
                  buttonInnerColor={'#3FA9F5'}
                  buttonOuterColor={value === i ? '#3FA9F5' : '#3FA9F5'}
                  buttonSize={13}
                  buttonOuterSize={18}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => {
                    SetProfile(value);
                  }}
                  labelStyle={{
                    paddingHorizontal: Metrics.screenWidth * 0.03,
                    fontFamily: is_selected
                      ? Fonts.type.ArialBold
                      : Fonts.type.Arial,
                    color: '#373737',
                    fontSize: Fonts.size.fifteen,
                  }}
                />
              </RadioButton>
            );
          })}
        </RadioForm>
      </View>
    );
  };

  const renderFriendStatus = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.RadioView}>Show Friends</Text>

        <View
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
          <ToggleSwitch
            isOn={isEnabled}
            onColor="#8F93A2"
            offColor="#3FA9F5"
            label={isEnabled ? 'Off' : 'On'}
            labelStyle={styles.labelStyle}
            size="small"
            onToggle={toggleSwitch}
            thumbOnStyle={{...styles.thumbStyle, borderColor: '#8F93A2'}}
            thumbOffStyle={{...styles.thumbStyle, borderColor: '#3FA9F5'}}
          />

          {/* <Switch
            trackColor={{ false: '#8F93A2', true: '#3FA9F5' }}
            // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            thumbColor={'#E3EFF0'}
            //  ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          /> */}
        </View>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <TextInput
        style={styles.textAreaStyle}
        placeholderTextColor="#3B3B3B"
        placeholder={'Enter Personal Description/Bio'}
        multiline={true}
        numberOfLines={6}
        onChangeText={(val) => setBioDescription(val)}
        value={bioDescription}
        // floatingLabel
      />
    );
  };

  const renderSaveButton = () => {
    return (
      <View style={styles.ShoppingBtn}>
        <TouchableOpacity onPress={handleValidation}>
          <Text style={styles.ShoppingBtnText}>SAVE CHANGES</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderBodyContent = () => {
    console.log('userProfile', userProfile);
    return (
      <View>
        <TouchableOpacity
          onPress={() => uploadPicture()}
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'flex-end',
            paddingTop: Metrics.ratio(15),
          }}>
          <ImageBackground
            style={{
              height: Metrics.ratio(105),
              width: Metrics.ratio(105),
              borderRadius: 300,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
            }}
            resizeMode="contain"
            // Images.NotificationScreenIcon
            onLoad={console.log('onLoad')}
            source={{uri: userProfile?.uri}}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                marginRight: Metrics.ratio(5),
                marginBottom: Metrics.ratio(5),
              }}>
              <WithLocalSvg asset={Images.EditIcon} />
            </TouchableOpacity>
          </ImageBackground>
        </TouchableOpacity>

        <View style={styles.CreditCardStyle}>
          {renderFnameLname()}
          {renderCountryHandle()}
          {renderStateCity()}
          {renderPhoneField()}
          {renderDatePicker()}
          {renderEmailField()}
          {renderPasswordField()}
          {renderGender()}
          {renderPublic()}
          {renderFriendStatus()}
          {renderDescription()}
        </View>

        {renderSaveButton()}
      </View>
    );
  };

  return (
    <Footer route={props?.route?.name}>
      <ScrollView
        style={{
          backgroundColor: 'white',
        }}
        contentContainerStyle={{paddingBottom: Metrics.screenHeight * 0.09}}
        keyboardShouldPersistTaps="handled">
        <View style={styles.CheckOutArrow}>
          <View style={{position: 'absolute', top: 0}}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              {/* <Image style={styles.CheckOutArrowImg} source={Images.BackArrow} /> */}

              <View style={styles.CheckOutArrowImg}>
                <WithLocalSvg asset={Images.BackArrowSvg} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ActivityIndicator
          isLoading={loading}
          size="large"
          color={Colors.primary}
        />
        {renderBodyContent()}
      </ScrollView>
    </Footer>
  );
};

export default EditProfile;
