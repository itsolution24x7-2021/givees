import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from './style';
import {Fonts, Metrics} from '../../theme';
import Dash from 'react-native-dash';
import {useNavigation} from '@react-navigation/native';

const DayHeading = ({day}) => {
  return (
    <View style={styles.textComponentView}>
      <Text style={styles.textCompText}>{day}</Text>
    </View>
  );
};

const ActivityView = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={{}}>
      {data.map((card, index) => {
        const {time, text, status, vendor} = card;
        let color =
          status == 'Redeemed'
            ? '#3FA9F5'
            : status == 'Accepted'
            ? '#25E866'
            : status == 'Received'
            ? '#FFAA00'
            : status == 'Pending'
            ? '#8F93A2'
            : '#EF4040';
        return (
          <View style={{flexDirection: 'row'}}>
            <View style={{height: Metrics.ratio(80)}}>
              <View style={styles.dotCircle} />
              {data.length - 1 != index ? (
                <Dash dashColor="#DCDEE2" style={styles.dash} dashGap={0} />
              ) : null}
            </View>
            <View style={{marginTop: Metrics.ratio(10)}}>
              <Text
                style={{
                  ...styles.dateText,
                  marginLeft:
                    data.length - 1 == index ? Metrics.screenWidth * 0.03 : 0,
                }}>
                {time}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() =>
                status == 'Accepted'
                  ? navigation.navigate('ActivityAll', {status: 'accepted'})
                  : status == 'Pending'
                  ? navigation.navigate('ActivityAll', {status: 'pending'})
                  : status == 'Redeemed'
                  ? navigation.navigate('ActivityAll', {status: 'redeemed'})
                  : status == 'Expired'
                  ? navigation.navigate('ActivityAll', {status: 'expired'})
                  : status == 'Received' &&
                    navigation.navigate('ActivityAll', {status: 'received'})
              }
              style={styles.activityView}>
              <Text style={styles.activityText}>
                12 oz. Coffee from coffee hut{' '}
                <Text style={{...styles.activitySubText, color: color}}>
                  {status}
                </Text>
                {vendor && (
                  <>
                    <Text style={styles.activityText}>
                      {vendor == 'Store' ? ' in' : ' From'}
                    </Text>
                    <Text style={{...styles.activitySubText, color: '#3B3B3B'}}>
                      {' '}
                      {vendor}
                    </Text>
                  </>
                )}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export {DayHeading, ActivityView};
