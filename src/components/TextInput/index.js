// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  FlatList,
} from 'react-native';
import {Text} from '../index';
import styles from './styles';
import bhndariIcon from '../../assets/Images/icons/eye.png';
import CountryList from '../../components/CountryList/Country.json';
import {Metrics, Images} from '../../theme';
import {WithLocalSvg, SvgUri} from 'react-native-svg';
import CountryPicker from 'react-native-country-picker-modal';

export default class CustomTextInput extends React.Component {
  // state = {secureentry:"true" }
  constructor(props) {
    super(props);
    this.state = {
      sec: props.secureTextEntry,
      country: CountryList[42],
      modalVisible: false,
      floatLabel: false,
      countryCode: this?.props?.country ? this?.props?.country : 'CA',
      callingCode: 1,
      withCountryNameButton: null,
      withFlag: true,
      withFilter: true,
      withAlphaFilter: true,
      withCallingCode: false,
      keyboardType: props.keyboardType,
    };
    this.renderItem = this.renderItem.bind(this);
  }

  static propTypes = {
    returnKeyType: PropTypes.string,
    isEditable: PropTypes.bool,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeInput: PropTypes.func,
    emailError: PropTypes.string,
    refrence: PropTypes.object,
    onSubmitRef: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    onSubmit: PropTypes.func,
    enablesReturnKeyAutomaticallly: PropTypes.bool,
    inputLeftIcon: PropTypes.string,
    secureTextEntry: PropTypes.bool,
    keyboardType: PropTypes.string,
    floatingLabel: PropTypes.bool,
    customInputStyle: PropTypes.object,
    optional: PropTypes.string,
    numberOfLines: PropTypes.number,
  };

  static defaultProps = {
    returnKeyType: undefined,
    isEditable: undefined,
    value: undefined,
    placeholder: undefined,
    onChangeInput: undefined,
    emailError: undefined,
    refrence: undefined,
    onSubmitRef: undefined,
    onSubmit: undefined,
    enablesReturnKeyAutomaticallly: undefined,
    inputLeftIcon: undefined,
    secureTextEntry: undefined,
    customInputStyle: undefined,
    floatingLabel: undefined,
    optional: undefined,
    keyboardType: undefined,
    numberOfLines: undefined,
  };

  componentDidMount() {
    console.log(`object`, this.props.inputRightIcon);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.props?.country !== prevProps?.country) {
  //     console.log(`this?.props?.country`, this?.props?.country);
  //     // this.props?.forCountryPicker?.country !== null &&

  //     // this.country();

  //     this.setState({
  //       countryCode: this.props?.country[0]?.code,
  //       // country: this.props?.forCountryPicker?.name,
  //       // callingCode: this.props?.forCountryPicker?.callingCode[0],
  //     });
  //   }
  // }

  country = () => {
    return (
      <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          onSelect,
        }}
        visible={modalVisible}
      />
    );
  };

  onSelect = (country) => {
    console.log(`country`, country);
    this.setState({
      countryCode: country.cca2,
      country: country,
      callingCode: country?.callingCode[0],
    });
  };

  countryPicker(props) {
    const {
      countryCode,
      withFilter,
      withFlag,
      withCountryNameButton,
      withAlphaFilter,
      withCallingCode,
      callingCode,
      keyboardType,
      modalVisible,
    } = this.state;

    const {onSelect} = this;

    return (
      <TouchableOpacity
        style={{...styles.flagView}}
        onPress={() => this.setState({modalVisible: true})}>
        {/* {!modalVisible ? (
          <TouchableOpacity style={{}}>
            {/* <SvgUri width={25} height={20} uri={props.flag} /> */}
        {/* <WithLocalSvg asset={Images.CanadaFlag} /> */}
        {/* </TouchableOpacity> */}
        {/* ) : ( */}
        {/* <CountryPicker
            {...{
              countryCode,
              withFilter,
              withFlag,
              withCountryNameButton,
              withAlphaFilter,
              withCallingCode,
              onSelect,
            }}
            visible
          /> */}
        {/* )} */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <>
            {this.props.floatingLabel && (
              <View
                style={{
                  marginLeft: Metrics.ratio(5),
                  position: 'absolute',
                  top: 0,
                  left: -1,
                }}>
                <Text color="#8F93A2" size={Metrics.ratio(9)}>
                  {'Code'}
                </Text>
              </View>
            )}
            <CountryPicker
              {...{
                countryCode,
                withFilter,
                withFlag,
                withCountryNameButton,
                withAlphaFilter,
                withCallingCode,
                onSelect,
              }}
              visible={modalVisible}
            />
          </>

          <View
            style={{
              height: Metrics.ratio(40),
              justifyContent: 'center',
              marginLeft: -Metrics.ratio(7),
            }}>
            <WithLocalSvg asset={Images.DropDownSvg} />
          </View>
        </View>

        <Text style={styles.countryPhoneCode}>+{callingCode}</Text>
      </TouchableOpacity>
    );
  }

  renderItem({item}) {
    return (
      <TouchableOpacity
        onPress={() => this.setState({country: item, modalVisible: false})}
        style={styles.itemView}>
        <View style={styles.itemCountryFlag}>
          <SvgUri width={50} height={40} uri={item.flag} />
        </View>
        <Text style={styles.itemCountryName}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  Modal(props) {
    const {modalVisible} = this.state;

    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({modalVisible: !modalVisible});
        }}>
        <View style={styles.modalView}>
          <View style={styles.modalFlatList}>
            <FlatList
              data={props}
              renderItem={this.renderItem}
              initialNumToRender={15}
              keyExtractor={(item) => item.name}
            />
          </View>
        </View>
      </Modal>
    );
  }

  render() {
    let {
      refrence,
      returnKeyType,
      placeholder,
      isEditable,
      value,
      onChangeInput,
      emailError,
      onSubmitRef,
      onSubmit,
      enablesReturnKeyAutomaticallly,
      inputLeftIcon,
      inputRightIcon,
      inputRightHideIcon,
      customInputStyle,
      secureTextEntry,
      countryPicker,
      floatingLabel,
      optional,
      keyboardType,
      customInputTextStyle,
      numberOfLines,
    } = this.props;

    return (
      <View
        style={{
          marginBottom: emailError ? Metrics.ratio(10) : Metrics.ratio(0),
        }}>
        <View style={[styles.InputView, customInputStyle]}>
          {inputLeftIcon && (
            <View style={styles.inputIcon}>
              <WithLocalSvg asset={inputLeftIcon} />
            </View>
          )}

          {countryPicker && this.countryPicker(this.state.country)}
          {/* {countryPicker && this.Modal(CountryList)} */}
          <View style={{flex: 0.95}}>
            {floatingLabel && this.state.floatLabel && (
              <View
                style={{
                  marginLeft: Metrics.ratio(5),
                  position: 'absolute',
                  top: 2,
                }}>
                <Text color="#8F93A2" size={Metrics.ratio(9)}>
                  {placeholder}
                </Text>
              </View>
            )}

            <TextInput
              secureTextEntry={this.state.sec}
              returnKeyType={returnKeyType}
              enablesReturnKeyAutomaticallly={enablesReturnKeyAutomaticallly}
              style={{
                ...styles.textInputStyle,
                marginTop:
                  floatingLabel && this.state.floatLabel
                    ? Metrics.ratio(7)
                    : Metrics.ratio(0),
                ...customInputTextStyle,
                textAlignVertical: numberOfLines ? 'top' : 'center',
              }}
              placeholder={placeholder}
              multiline={numberOfLines ? true : false}
              numberOfLines={numberOfLines}
              editable={isEditable}
              ref={refrence}
              value={value}
              placeholderTextColor="#3B3B3B"
              onChangeText={(value) => onChangeInput(value)}
              onSubmitEditing={() => {
                onSubmit(onSubmitRef);
              }}
              keyboardType={this.state.keyboardType}
              onFocus={() => this.setState({floatLabel: true})}
              onBlur={() =>
                this.setState({floatLabel: value === '' ? false : true})
              }
            />
          </View>

          <View>
            {inputRightIcon && !inputRightHideIcon && (
              <TouchableOpacity
                onPress={() => this.setState({sec: !this.state.sec})}>
                <WithLocalSvg style={styles.rightIcon} asset={inputRightIcon} />
              </TouchableOpacity>
            )}

            {inputRightHideIcon && inputRightIcon && (
              <TouchableOpacity
                onPress={() => this.setState({sec: !this.state.sec})}>
                <WithLocalSvg
                  style={styles.rightIcon}
                  asset={
                    this.state.sec == true ? inputRightIcon : inputRightHideIcon
                  }
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Text style={styles.errormsg}> {emailError}</Text>
      </View>
    );
  }
}
