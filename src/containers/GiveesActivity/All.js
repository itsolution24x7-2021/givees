import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from './style';
import {DayHeading, ActivityView} from '../../components';

const data = [
  {
    time: '05:15 PM',
    text: '12 oz. Coffee from coffee hut Redeemed in Store',
    status: 'Redeemed',
    vendor: 'Store',
  },
  {
    time: '05:25 PM',
    text: '12 oz. Coffee from coffee hut Accepted in Store',
    status: 'Accepted',
    vendor: 'Handler',
  },
  {
    time: '05:35 PM',
    text: '12 oz. Coffee from coffee hut Declined in Store',
    status: 'Declined',
    vendor: 'Handler',
  },
  {
    time: '05:45 PM',
    text: '12 oz. Coffee from coffee hut Received in Store',
    status: 'Received',
    vendor: 'Handler',
  },
  {
    time: '06:00 PM',
    text: '12 oz. Coffee from coffee hut Received in Store',
    status: 'Received',
    vendor: 'Handler',
  },
];

const All = () => {
  return (
    <View style={styles.container}>
      {['Today', 'Yesterday'].map((v, i) => {
        return (
          <>
            <DayHeading day={v} />
            <ActivityView data={data} />
          </>
        );
      })}
    </View>
  );
};

export default All;
