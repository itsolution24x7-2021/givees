// @flow
import { connect } from 'react-redux';
import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Images, Metrics, Colors, Fonts } from '../../theme';
import styles from './style';
import All from './All';

const ActivityDetails = (props) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      {/* <ScrollView style={{flex:1}}> */}
      <View style={styles.CheckOutArrow}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Image style={styles.CheckOutArrowImg} source={Images.BackArrow} />
          </TouchableOpacity>
        </View>
      </View>

      <Image style={styles.BannerBGimg} source={Images.MaibBackImg} />
      <ScrollView>
        <View style={styles.summaryStyle}>
          <Text style={styles.ActivityTextHeading}>Funko Pop Figure</Text>
          <Text style={styles.ActivityTextDetail}>
            Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit sed tu
            es conor Lorem Ipsum Dolor amit sed tu es conor Lorem Ipsum Dolor
            amit sed tu es conor...
          </Text>
        </View>

        <View style={styles.OptionView}>
          <TouchableOpacity style={styles.FreeDeliveryOpacity}>
            <Text style={styles.Optiontextstyle}>
              <Image style={styles.icondelivery} source={Images.FreeDelivery} />{' '}
              Free Local Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.FreeDeliveryOpacity}>
            <Text style={styles.Optiontextstyle}>
              <Image style={styles.icondelivery} source={Images.CurbSide} />{' '}
              Curbside Pickup
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
          <ScrollView>
            <All />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivityDetails;
