import React, {useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import {Fonts, Metrics} from '../../theme';
import {Footer} from '../../components';
import Dash from 'react-native-dash';
import {useRoute} from '@react-navigation/native';

const data = [
  {
    time: '05:25 PM',
    text: '12 oz. Coffee from coffee hut',
    status: 'Accepted',
  },
  {
    time: '05:15 PM',
    text: 'Funko pop figure from the collector place',
    status: 'Expired',
  },
];

const All = () => {
  const route = useRoute();
  return (
    <Footer route={route?.name}>
      <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
        <View style={{marginVertical: 20}}>
          {data.map((card, index) => {
            const {time, text, status} = card;
            let color =
              status == 'Redeemed'
                ? '#EF4040'
                : status == 'Accepted'
                ? '#25E866'
                : '#EF4040';
            return (
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: -Metrics.screenHeight * 0.025,
                }}>
                <View>
                  <View
                    style={{
                      marginVertical: 14,
                      height: 10,
                      width: 10,
                      backgroundColor: '#DCDEE2',
                      borderRadius: 200,
                      marginLeft: 10,
                    }}
                  />
                  {data.length - 1 != index ? (
                    <Dash
                      dashColor="#DCDEE2"
                      style={{
                        marginHorizontal: 14,
                        marginTop: -Metrics.screenHeight * 0.025,
                        width: 1,
                        height: 100,
                        flexDirection: 'column',
                      }}
                      dashGap={0}
                    />
                  ) : null}
                </View>
                <View style={{marginTop: 10}}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontWeight: 'bold',
                      color: '#8F93A2',
                      marginLeft:
                        data.length - 1 == index
                          ? Metrics.screenWidth * 0.03
                          : 0,
                    }}>
                    {time}
                  </Text>
                </View>
                <View
                  style={{
                    elevation: 10,
                    marginTop: -Metrics.screenHeight * 0.02,
                    justifyContent: 'center',
                    marginHorizontal: 20,
                    flex: 1,
                    backgroundColor: 'white',
                    height: Metrics.screenHeight * 0.1,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: Fonts.type.Arial,
                      paddingHorizontal: 10,
                    }}>
                    {text}{' '}
                    <Text
                      style={{
                        color: color,
                        fontWeight: 'bold',
                        fontFamily: Fonts.type.ArialBold,
                      }}>
                      {status}
                    </Text>
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </Footer>
  );
};

export default All;
