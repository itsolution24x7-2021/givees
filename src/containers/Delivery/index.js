// @flow
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
import {Images, Metrics, Colors, Fonts} from '../../theme';
import {CustomTextInput, Footer} from '../../components';
import styles from './style';
import {GoBackHeader} from '../../components';
import RNPickerSelect from 'react-native-picker-select';
import {WithLocalSvg} from 'react-native-svg';

import {get_Country} from '../../config/WebServices';
import {getResources} from '../../config/simpleApiCall';

const Delivery = ({navigation, route}) => {
  const createRef = {
    emailInputRef: useRef(null),
    passwordInputRef: useRef(null),
    countryValueRef: useRef(null),
    stateValueRef: useRef(null),
    cityValueRef: useRef(null),
  };

  let [countryList, setCountryList] = useState(null);
  let [stateList, setStateList] = useState(null);
  let [cityList, setCityList] = useState(null);

  const [countryValue, setCountryValue] = useState(null);
  const [stateValue, setStateValue] = useState(null);
  const [cityValue, setCityValue] = useState(null);

  const getCountries = async () => {
    try {
      const res = await getResources(`${get_Country}type=getCountries`);
      console.log(`response in country`, res.data);
      const response = res.data;

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

      getStates(arrCountry);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const getStates = async (arrCountry) => {
    try {
      var val = null;
      if (countryValue) {
        val = arrCountry.filter((v) => v.value === countryValue);
      }

      const res = await getResources(
        `${get_Country}type=getStates&countryId=${
          val ? val[0]?.code : arrCountry[32]?.code
        }`,
      );

      const responseState = res.data;

      let arrState = [];

      for (const key in responseState?.result) {
        // console.log(`response?.result`, response?.result[key]);
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

      getCities(val ? val : arrCountry, arrState);
      console.log(`arrState`, arrState);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  const getCities = async (arrCountry, arrState) => {
    var val = null;
    if (stateValue) {
      val = arrState.filter((v) => v.value === stateValue);
      console.log(`val in getCities`, val);
    }

    try {
      const res = await getResources(
        `${get_Country}type=getCities&countryId=${
          arrCountry.length === 1 ? arrCountry[0]?.code : arrCountry[32]?.code
        }&stateId=${val ? val[0]?.code : arrState[0]?.code}`,
      );

      const responseCity = res.data;

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
      // console.log(`arrCity`, arrCity);
      setCityList(arrCity);
    } catch (error) {
      console.log(`error`, error);
    }
  };

  useEffect(() => {
    getCountries();
  }, [countryValue, stateValue]);

  const renderStateCity = () => {
    const placeholder = {
      label: 'Country',
      value: null,
      color: 'black',
    };

    const placeholderState = {
      label: 'State',
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
                let val = countryList.filter((v) => v.value === value);
                setCountryValue(value);
                // setValues((previousState) => {
                //   return {
                //     ...previousState,
                //     countryValue: value,
                //   };
                // });
              }}
              items={
                countryList
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
        </View>

        <View
          style={{
            ...styles.countryPicker,
            width: Metrics.screenWidth * 0.45,
            marginTop: Metrics.ratio(0),
          }}>
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
              placeholder={placeholderState}
              onValueChange={(value) => {
                let val = stateList.filter((v) => v.value === value);
                console.log(`val`, val[0]);
                setStateValue(value);
                // setValues((previousState) => {
                //   return {
                //     ...previousState,
                //     stateValue: value,
                //   };
                // });
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

        {/* <CustomTextInput
          placeholder={'State'}
          customInputStyle={{
            height: Metrics.ratio(40),
            width: Metrics.screenWidth * 0.45,
          }}
          onChangeInput={(val) => console.log(`val`, val)}
        />

        <CustomTextInput
          placeholder={'City'}
          customInputStyle={{
            height: Metrics.ratio(40),
            width: Metrics.screenWidth * 0.45,
          }}
          onChangeInput={(val) => console.log(`val`, val)}
        /> */}
      </View>
    );
  };

  const placeholderCity = {
    label: 'City',
    value: null,
    color: '#9EA0A4',
  };

  return (
    <Footer route={route?.name}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingBottom: Metrics.screenHeight * 0.09,
        }}>
        {/* <Header
        goBackWithHeading
        heading="Delivery"
        navigation={navigation}
      /> */}
        <GoBackHeader heading={'Delivery'} goBack={navigation.goBack} />

        {/* <View style={{ flex: 7 }}> */}
        <ScrollView>
          <View style={styles.cartBackground}>
            <Image style={styles.ProductImgStyle} source={Images.coffe} />

            <View style={styles.detailCart}>
              <View>
                <Text style={styles.productName}>Cagarny 6820 Male Watch</Text>
                <Text style={styles.MerchantName}>Merchant name</Text>
                <Text style={styles.MerchantName}>
                  123Main St. City, Province
                </Text>
                <Text style={styles.MerchantName}>+1-123-123-1234</Text>
              </View>
            </View>
          </View>

          <View style={{marginHorizontal: Metrics.screenWidth * 0.04}}>
            <CustomTextInput
              placeholder={'Name'}
              customInputStyle={{
                height: Metrics.ratio(40),
              }}
              onSubmitRef={'ref'}
              onChangeInput={(val) => console.log(`val`, val)}
              onSubmit={(val) => console.log(`val`, val)}
            />
            <CustomTextInput
              placeholder={'Phone Number'}
              countryPicker
              customInputStyle={{
                height: Metrics.ratio(40),
                marginTop: -Metrics.ratio(5),
              }}
              onSubmitRef={'ref'}
              onChangeInput={(val) => console.log(`val`, val)}
              onSubmit={(val) => console.log(`val`, val)}
            />
            <CustomTextInput
              placeholder={'Address'}
              customInputStyle={{
                height: Metrics.ratio(40),
                marginTop: -Metrics.ratio(5),
              }}
              onSubmitRef={'ref'}
              onChangeInput={(val) => console.log(`val`, val)}
              onSubmit={(val) => console.log(`val`, val)}
            />
            <CustomTextInput
              placeholder={'Address 2 Special Instructions (optional)'}
              customInputStyle={{
                height: Metrics.ratio(40),
                marginTop: -Metrics.ratio(5),
              }}
              onSubmitRef={'ref'}
              onChangeInput={(val) => console.log(`val`, val)}
              onSubmit={(val) => console.log(`val`, val)}
            />

            {renderStateCity()}
            {/* <View style={styles.FLName}>
            <CustomTextInput
              placeholder={'City'}
              customInputStyle={{
                height: Metrics.ratio(40),
                width: Metrics.screenWidth * 0.44,
                marginTop: -Metrics.ratio(5),
              }}
              onSubmitRef={'ref'}
              onChangeInput={(val) => console.log(`val`, val)}
              onSubmit={(val) => console.log(`val`, val)}
            />

            <CustomTextInput
              placeholder={'Province'}
              customInputStyle={{
                height: Metrics.ratio(40),
                width: Metrics.screenWidth * 0.44,
                marginTop: -Metrics.ratio(5),
              }}
              onSubmitRef={'ref'}
              onChangeInput={(val) => console.log(`val`, val)}
              onSubmit={(val) => console.log(`val`, val)}
            />
          </View>
          */}

            <View style={{...styles.FLName, alignItems: 'center'}}>
              <View
                style={{
                  ...styles.countryPicker,
                  width: Metrics.screenWidth * 0.45,
                  marginTop: Metrics.ratio(0),
                }}>
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
                    placeholder={placeholderCity}
                    onValueChange={(value) => {
                      setCityValue(value);
                      // setValues((previousState) => {
                      //   return {
                      //     ...previousState,
                      //     cityValue: value,
                      //   };
                      // });
                    }}
                    items={
                      cityList
                        ? cityList
                        : [{label: 'Canada', value: 'cananda'}]
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

              <CustomTextInput
                placeholder={'Postal Code'}
                customInputStyle={{
                  height: Metrics.ratio(40),
                  width: Metrics.screenWidth * 0.44,
                  marginTop: -Metrics.ratio(2),
                }}
                onSubmitRef={'ref'}
                onChangeInput={(val) => console.log(`val`, val)}
                onSubmit={(val) => console.log(`val`, val)}
              />
            </View>

            <View>
              <CustomTextInput
                placeholder={'Email ID'}
                customInputStyle={{
                  height: Metrics.ratio(40),
                  // width: Metrics.screenWidth * 0.44,
                  marginTop: -Metrics.ratio(5),
                }}
                onSubmitRef={'ref'}
                onChangeInput={(val) => console.log(`val`, val)}
                onSubmit={(val) => console.log(`val`, val)}
              />

              <TextInput
                style={styles.textAreaStyle}
                placeholderTextColor="#3B3B3B"
                placeholder={'Add Special instructions if any'}
                multiline={true}
                numberOfLines={8}
              />
            </View>

            <View>
              <Text style={styles.confirmText}>
                Merchant will contact you soon to confirm delivery
              </Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('ConfirmDelivery')}
            style={styles.ShoppingBtn}>
            <Text style={styles.ShoppingBtnText}>CONTINUE</Text>
          </TouchableOpacity>
        </ScrollView>
        {/* </View> */}
      </View>
    </Footer>
  );
};

export default Delivery;
