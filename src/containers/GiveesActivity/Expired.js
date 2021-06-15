import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import {Fonts, Metrics} from '../../theme';
import styles from './style';
import {DayHeading, ActivityView} from '../../components';

const data = [
  {
    time: '05:15 PM',
    text: '12 oz. Coffee from coffee hut Declined in Store',
    status: 'Expired',
    // vendor: 'Store',
  },
  {
    time: '05:25 PM',
    text: '12 oz. Coffee from coffee hut Declined in Store',
    status: 'Expired',
    // vendor: 'Store',
  },
  {
    time: '05:35 PM',
    text: '12 oz. Coffee from coffee hut Declined in Store',
    status: 'Expired',
    // vendor: 'Store',
  },
  {
    time: '05:40 PM',
    text: '12 oz. Coffee from coffee hut Declined in Store',
    status: 'Expired',
    // vendor: 'Store',
  },
  {
    time: '05:45 PM',
    text: '12 oz. Coffee from coffee hut Declined in Store',
    status: 'Expired',
    // vendor: 'Store',
  },
  {
    time: '06:00 PM',
    text: '12 oz. Coffee from coffee hut Declined in Store',
    status: 'Expired',
    // vendor: 'Store',
  },
  {
    time: '06:45 PM',
    text: '12 oz. Coffee from coffee hut Declined in Store',
    status: 'Expired',
    // vendor: 'Store',
  },
];

const Expired = () => {
  return (
    <View style={styles.container}>
      <DayHeading day={'Today'} />

      <ActivityView data={data} />
    </View>
  );
};

export default Expired;
