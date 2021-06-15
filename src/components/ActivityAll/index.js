import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import styles from './style';
import {Fonts, Metrics} from '../../theme';
import Dash from 'react-native-dash';
import {useNavigation} from '@react-navigation/native';

const DayHeadingAll = ({day}) => {
  return (
    <View style={styles.textComponentView}>
      <Text style={styles.textCompText}>{day}</Text>
    </View>
  );
};

const ActivityViewAll = ({data}) => {
  const navigation = useNavigation();

  return (
    <View style={{}}>
      {data.map((card, index) => {
        const {time, text, status, vendor, sender, reciever} = card;
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
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View
              style={{
                // height: '74%',
                justifyContent: 'center',
                alignItems: 'center',
                width: 1,
              }}>
              <View
                style={{
                  flex: 1,
                  width: 1,
                  backgroundColor: index === 1 ? '#DCDEE2' : 'transparent',
                }}
              />
              <View style={styles.dotCircle} />
              <View
                style={{
                  flex: 1,
                  width: 1,
                  backgroundColor:
                    data.length - 1 != index ? '#DCDEE2' : 'transparent',
                  paddingBottom: Metrics.ratio(0.1),
                }}
              />
              {/* {data.length - 1 != index ? ( */}
              {/* <Dash dashColor="#DCDEE2" style={styles.dash} dashGap={0} /> */}
              {/* ) : null} */}
            </View>
            <View style={{}}>
              <Text
                style={{
                  ...styles.dateText,
                  // marginLeft:
                  //   data.length - 1 == index ? Metrics.screenWidth * 0.03 : 0,
                  marginLeft: Metrics.screenWidth * 0.03,
                }}>
                {time}
              </Text>
            </View>
            <View style={{paddingVertical: Metrics.ratio(7)}}>
              <TouchableOpacity
                onPress={() =>
                  status == 'Accepted'
                    ? navigation.navigate('ActivityGiven')
                    : null
                }
                style={styles.activityView}>
                <Text style={styles.activityText}>
                  {sender && (
                    <Text style={{...styles.activitySubText, color: '#3B3B3B'}}>
                      {sender}{' '}
                    </Text>
                  )}
                  {text}
                  {reciever && (
                    <Text style={{...styles.activitySubText, color: '#3B3B3B'}}>
                      {' '}
                      {reciever}
                    </Text>
                  )}
                  {status && (
                    <Text style={{...styles.activitySubText, color: color}}>
                      {' '}
                      {status}
                    </Text>
                  )}
                  {vendor && (
                    <>
                      <Text style={styles.activityText}>
                        {vendor == 'Store' ? ' in' : ' From'}
                      </Text>
                      <Text
                        style={{...styles.activitySubText, color: '#3B3B3B'}}>
                        {' '}
                        {vendor}
                      </Text>
                    </>
                  )}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export {DayHeadingAll, ActivityViewAll};
