import React, { useState, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

import PhoneInput from 'react-native-phone-number-input';

import styles from './style';

const CustomPhoneInput = (props) => {
  const { codeText, errorValidation, secondaryContainer, secondaryTextView, placeholder, isVisible, secondaryPlaceholderStyle, secondaryCodeTextStyle, secondaryFlagButton, secondaryTextInput, secondaryCodeText, secondaryTextContainer, secondaryPolygon } = props
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [countryCode, setCountryCode] = useState('+92');

  const handlePhoneInput = (text) => {
    let validator = props.phoneInputTxt.current?.isValidNumber(text);

    props.handlePhoneInput(text, validator ? validator : false, countryCode);
  };

  const renderDropdown = () => {
    return <Entypo style={styles.polygon} name='chevron-small-down' />
  };

  return (
    <View >
      <View style={[styles.textView, secondaryTextView]}>
        {codeText &&
          <Text style={[styles.codeText, secondaryCodeTextStyle]}>Code</Text>
        }
      </View>
      <PhoneInput
        placeholder={placeholder}
        ref={props.phoneInputTxt}
        defaultValue={value}
        defaultCode="PK"
        layout="first"

        polygon={[styles.polygon, secondaryPolygon]}
        containerStyle={[styles.containerStyle, secondaryContainer]}
        flagButtonStyle={[styles.flagButtonStyle, secondaryFlagButton]}
        textInputStyle={[styles.textInputStyle, secondaryTextInput]}
        codeTextStyle={[styles.codeTextStyle, secondaryCodeText]}
        textContainerStyle={[styles.textContainerStyle, secondaryTextContainer]}
        placeholderTextColor={[styles.placeholderTextColor, secondaryPlaceholderStyle]}

        renderDropdownImage={renderDropdown()}

        onChangeText={(text) => {
          handlePhoneInput(text);
          setValue(text);
        }}
        onChangeFormattedText={(text) => {
          setFormattedValue(text);
        }}
        onChangeCountry={(country) => {
          setCountryCode("+" + country.callingCode[0]);
        }}
        autoFocus={isVisible}
      />
      <View
        style={{
          justifyContent: 'center',
        }}>
        {errorValidation &&
          <Text
            style={{
              color: 'red',
            }}>
            {props.phoneInputTxt.current?.isValidNumber(value)
              ? ''
              : 'Please Enter Right Number'}
          </Text>}
      </View>
    </View>
  );
};

export default CustomPhoneInput;
