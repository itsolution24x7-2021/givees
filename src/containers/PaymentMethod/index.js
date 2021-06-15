// @flow
import {connect} from 'react-redux';
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
import styles from './style';

// import { BoxShadow } from 'react-native-shadow';

import {Header, GoBackHeader, Footer} from '../../components';

const PaymentMethod = (props) => {
  return (
    <Footer route={props?.route?.name}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <GoBackHeader
          heading="Payment Method"
          goBack={props.navigation.goBack}
        />
        <ScrollView
          style={{paddingHorizontal: Metrics.screenWidth * 0.02}}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'space-between',
            paddingBottom: Metrics.screenHeight * 0.09,
          }}>
          <View
            style={{
              padding: 15,
              margin: 10,
              borderRadius: 9,
              // shadowColor: "white",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              // shadowOpacity: 0.25,
              // shadowRadius: 3.84,
              // borderColor: 'transparent',
              // borderWidth: 0.3,
              elevation: 1,
              backgroundColor: 'white',
            }}>
            <TouchableOpacity
              style={styles.ViewCart}
              onPress={() => props.navigation.navigate('AddCreditCard')}>
              <Image
                style={styles.cartIconStyle}
                source={Images.CreditCartIcon}
              />
              <Text style={styles.cartText}>Credit Card</Text>

              <Image
                style={styles.cartArrowStyle}
                source={Images.paymentArrow}
              />
            </TouchableOpacity>
            <View style={styles.lineViewCart} />
            <TouchableOpacity
              style={styles.ViewCart}
              onPress={() => props.navigation.navigate('AddCreditCard')}>
              <Image style={styles.cartIconStyle} source={Images.ApplePay} />
              <Text style={styles.cartText}>Apple Pay</Text>

              <Image
                style={styles.cartArrowStyle}
                source={Images.paymentArrow}
              />
            </TouchableOpacity>
            <View style={styles.lineViewCart} />
            <TouchableOpacity
              style={styles.ViewCart}
              onPress={() => props.navigation.navigate('AddCreditCard')}>
              <Image style={styles.cartIconStyle} source={Images.GooglePlay} />
              <Text style={styles.cartText}>Google Pay</Text>

              <Image
                style={styles.cartArrowStyle}
                source={Images.paymentArrow}
              />
            </TouchableOpacity>
            <View style={styles.lineViewCart} />
            <TouchableOpacity
              style={styles.ViewCart}
              onPress={() => props.navigation.navigate('AddCreditCard')}>
              <Image style={styles.cartIconStyle} source={Images.Paypal} />
              <Text style={styles.cartText}>Paypal</Text>
              <Image
                style={styles.cartArrowStyle}
                source={Images.paymentArrow}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.PaymentCartBtn}
            onPress={() => props.navigation.navigate('AddCreditCard')}>
            <View style={{width: '90%'}}>
              <Text style={styles.PaymentCartBtnText}>PROCEED TO PAYMENT</Text>
            </View>

            <View style={styles.PaymentCartImg}>
              <Image
                style={{width: Metrics.ratio(29), height: Metrics.ratio(29)}}
                resizeMode="contain"
                source={Images.CircleNext}
              />
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Footer>
  );
};

export default PaymentMethod;
