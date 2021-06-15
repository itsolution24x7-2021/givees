// @flow
import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Picker,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import {Images, Metrics, Colors, Fonts} from '../../theme';
import styles from './style';

import Toast, {DURATION} from 'react-native-easy-toast';
import RNPickerSelect from 'react-native-picker-select';
import {useDispatch, useSelector} from 'react-redux';
import {WithLocalSvg} from 'react-native-svg';

import {contactRegex, contact2Regex, validate} from '../../services/validation';
import {strings} from '../../I18n';
import {request as contactRequest} from '../../redux/actions/Contact';
import {
  CustomTextInput,
  Header,
  GoBackHeader,
  Footer,
  ActivityIndicator,
} from '../../components';
import {get_ContactServices} from '../../config/WebServices';
import {getResources} from '../../config/simpleApiCall';

const ContactUs = (props) => {
  const createRef = {
    TitleInputRef: useRef(null),
    DescriptionInputRef: useRef(null),
    toastRef: useRef(null),
    servicesValueRef: useRef(null),
  };

  let errors = {
    CustomerServices: 'Length must be greater than 6',
    MessageTitle: 'Length must be greater than 3',
    QuestionComment: 'Length must be greater than 3',
  };

  const dispatch = useDispatch();

  let [CustomerServices, setCustomerServices] = useState('');
  let [MessageTitle, setMessageTitle] = useState('');
  let [QuestionComment, setQuestionComment] = useState('');
  let [CustomerServicesError, setCustomerServicesError] = useState('');
  let [MessageTitleError, setMessageTitleError] = useState('');
  let [QuestionCommentError, setQuestionCommentError] = useState('');

  let [serviceList, setServiceList] = useState([]);

  const [servicesValue, setServicesValue] = useState('');

  const contactResponse = useSelector((state) => {
    return state.contact;
  });

  const loginResponse = useSelector((state) => {
    return state.login;
  });

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

  const handleValidation = async () => {
    if (!CustomerServices) {
      setCustomerServices('CustomerServices is required');
    } else if (!MessageTitle) {
      setMessageTitle('MessageTitle is required.');
    } else if (!QuestionComment) {
      setQuestionComment('QuestionComment is required.');
    }
  };
  useEffect(() => {
    contactResponse.failure === true && contactResponse.isFetching === false
      ? createRef.toastRef.show(contactResponse.errorMessage)
      : null;
  }, [contactResponse]);

  useEffect(() => {
    getServices();
  }, []);

  const handleErrors = () => {
    if (
      MessageTitleError === '' &&
      QuestionCommentError === '' &&
      MessageTitle !== '' &&
      QuestionComment !== ''
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

  const handleSubmitContact = () => {
    const data = {title: MessageTitle, desc: QuestionComment, isActive: true};
    const payload = {
      data,
      token: loginResponse.data.accessToken,
    };

    dispatch(contactRequest(payload));
  };

  const getServices = async () => {
    try {
      const res = await getResources(`${get_ContactServices}`);

      console.log('((res))', res);

      if (res.success) {
        const response = res.getAllServices;
        var itemList = [];

        itemList = response.map((v) => {
          return {
            label: v?.title,
            value: v?.title.toLowerCase(),
          };
        });
        setServiceList(itemList);
      }
    } catch (error) {
      console.log('while fetching', error);
      Alert.alert('Error', error.message);
      // dropDownAlertRef.alertWithType('error', 'Error', error.message);
    }
  };

  const placeholder = {
    label: ' Service',
    value: null,
    color: 'black',
  };

  return (
    <Footer route={props?.route?.name}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <GoBackHeader heading={'Contact Us'} goBack={props.navigation.goBack} />

        {contactResponse.isFetching === true && (
          <ActivityIndicator
            isLoading={true}
            size="large"
            color={Colors.primary}
          />
        )}

        <ScrollView style={{paddingHorizontal: Metrics.screenWidth * 0.05}}>
          <View
            style={{
              justifyContent: 'space-between',
              flex: 1,
              height: Metrics.screenHeight * 0.75,
            }}>
            <View>
              <View style={styles.countryPicker}>
                <View style={{flex: 1}}>
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
                    onValueChange={(itemValue, itemIndex) => {
                      setServicesValue(itemValue);
                    }}
                    items={
                      serviceList
                        ? serviceList
                        : [{label: 'Canada', value: 'cananda'}]
                    }
                    value={servicesValue?.label}
                    ref={(el) => (createRef.servicesValueRef = el)}
                    Icon={() => (
                      <View
                        style={{
                          height: Metrics.ratio(45),
                          marginRight: Metrics.ratio(12),
                          marginTop: -Metrics.ratio(1),
                          justifyContent: 'center',
                        }}>
                        <WithLocalSvg asset={Images.DropDownSvg} />
                      </View>
                    )}
                  />
                </View>
              </View>

              <CustomTextInput
                placeholder={'Message Title'}
                customInputStyle={{
                  height: Metrics.ratio(45),
                  marginTop: -Metrics.ratio(5),
                }}
                onChangeInput={(value) =>
                  onChangeInput(
                    value,
                    setMessageTitle,
                    setMessageTitleError,
                    contactRegex,
                    errors.MessageTitle,
                  )
                }
                value={MessageTitle}
                onSubmitRef={'onDone'}
                onSubmit={(onSubmitRef) => {
                  onSubmit(onSubmitRef);
                }}
                refrence={createRef.TitleInputRef}
                emailError={MessageTitleError}
                editable={true}
              />
              <View>
                <CustomTextInput
                  placeholder={'Question or Comment'}
                  numberOfLines={8}
                  customInputStyle={{
                    height: Metrics.ratio(180),
                    marginTop: -Metrics.ratio(5),
                  }}
                  onChangeInput={(value) =>
                    onChangeInput(
                      value,
                      setQuestionComment,
                      setQuestionCommentError,
                      contact2Regex,
                      errors.QuestionComment,
                    )
                  }
                  value={QuestionComment}
                  onSubmitRef={'onDone'}
                  onSubmit={(onSubmitRef) => {
                    onSubmit(onSubmitRef);
                  }}
                  refrence={createRef.DescriptionInputRef}
                  emailError={QuestionCommentError}
                  editable={true}
                />
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={{
                  ...styles.ButtonStyleSubmit,
                  backgroundColor: handleErrors() ? '#3fa8f5' : '#8F93A2',
                }}
                disabled={handleErrors() ? false : true}
                onPress={() => handleSubmitContact()}>
                <Text style={styles.ButtonStyleSubmitText}> SUBMIT </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <Toast
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
        />
      </View>
    </Footer>
  );
};

export default ContactUs;
