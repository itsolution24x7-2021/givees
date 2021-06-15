// @flow
import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {Images, Metrics, Colors, Fonts} from '../../theme';
import styles from './style';
import {strings} from '../../I18n';
import {WithLocalSvg} from 'react-native-svg';

import {ActivityIndicator} from '../../components';
import ApiSauce from '../../services/apiSauce';
import {forget_password} from '../../config/WebServices';
import {createResource} from '../../config/simpleApiCall';

var radio_props = [
  {label: 'By Email', value: 0},
  {label: 'By SMS', value: 1},
];

const SendCode = (props) => {
  const [value, SetValue] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const renderSendCode = () => {
    return (
      <View style={styles.RadioView}>
        <RadioForm initial={0}>
          {radio_props.map((obj, i) => {
            var is_selected = value == i;
            return (
              <RadioButton>
                <RadioButtonInput
                  obj={obj}
                  index={i}
                  isSelected={value === i}
                  onPress={(value) => {
                    SetValue(value);
                  }}
                  borderWidth={1}
                  buttonInnerColor={'#3FA9F5'}
                  buttonOuterColor={value === i ? '#3FA9F5' : '#3FA9F5'}
                  buttonSize={13}
                  buttonOuterSize={20}
                  buttonStyle={{}}
                  buttonWrapStyle={{marginLeft: 10, marginVertical: 10}}
                />
                <RadioButtonLabel
                  obj={obj}
                  index={i}
                  labelHorizontal={true}
                  onPress={(value) => {
                    SetValue(value);
                  }}
                  labelStyle={{
                    fontFamily: is_selected
                      ? Fonts.type.ArialBold
                      : Fonts.type.Arial,
                    color: '#373737',
                    fontSize: Fonts.size.eighteen,
                  }}
                  labelWrapStyle={{}}
                />
              </RadioButton>
            );
          })}
        </RadioForm>
      </View>
    );
  };

  const renderBodyContent = () => {
    return (
      <ScrollView style={styles.ScrollViewStyle}>
        {/* <Text style={styles.headingForget}>{strings('Auth.ForgotText')}</Text> */}

        <View
          style={{
            justifyContent: 'space-between',
            height: Metrics.screenHeight * 0.7,
          }}>
          <View>
            <Text style={styles.headingForget}>Forgot Password</Text>

            <View>
              <Text style={styles.sendCodeText}>
                {strings('Auth.sendCodeText')}
              </Text>
            </View>

            {renderSendCode()}
          </View>
          <TouchableOpacity
            style={styles.ButtonStyleConfirm}
            onPress={() => onConfirm()}
            // onPress={() => props.navigation.navigate('EnterCode')}
            // onPress={() => {
            //   console.log('value', value);
            // }}
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

  const onConfirm = async () => {
    // EnterCode
    props.navigation.navigate('ForgetPassword', {
      forget_type: value == 0 ? 'email' : 'ph',
    });

    // try {
    //   var response = null;

    //   response = await ApiSauce.post(forget_password, { email });

    //   'message' in response && response.message !== 'Please Enter A email'
    //     ? (setLoading(false))
    //     : (setLoading(false));
    // } catch (error) {
    //   console.log(`error`, error.data.message);
    //   setLoading(false);
    // }

    // setModal(true);
  };

  return (
    <View style={{flex: 1}}>
      <Image style={styles.backgroundImg} source={Images.background} />
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
          style={styles.logoStyle}
          source={Images.logo}
        />
      </View>

      {renderBodyContent()}
    </View>
  );
};

export default SendCode;
