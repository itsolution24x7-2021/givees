// @flow
import {connect} from 'react-redux';
import React, {Component} from 'react';
import {Text, ScrollView, View, Image, TouchableOpacity} from 'react-native';
import {
  GoBackHeader,
  Heading,
  RedeemModule,
  FriendModule,
  NormalModule,
  Empty,
  Footer,
} from '../../components';
import {Metrics, Fonts, Images} from '../../theme';
import {useSelector} from 'react-redux';
import styles from './style';

//  onPress={() => props.navigation.navigate('ReceiverVoucher')}

const Notification = (props) => {
  const notifications = [
    {
      time: 'today',
      notification: [
        {
          title: 'info',
          type: 'expired',
          time: '12:45',
        },
        {
          title: 'exire',
          type: 'expired',
          time: '12:45',
        },
      ],
    },
  ];

  const loginResponse = useSelector((state) => {
    if (state?.login?.data?.accessToken) {
      // setProfileImage(state.login?.data?.data[0]?.imgs.imageUrl);
      return true;
    } else {
      return false;
    }
  });

  return (
    <Footer route={props?.route?.name}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          paddingBottom: Metrics.screenHeight * 0.09,
        }}>
        <GoBackHeader
          heading="Notifications"
          goBack={props.navigation.goBack}
        />

        <ScrollView>
          {loginResponse ? (
            <View style={{marginHorizontal: Metrics.ratio(10)}}>
              <Heading title={'Today'} />

              <RedeemModule />
              <RedeemModule />

              <Heading title={'November 17, 2020'} />

              <FriendModule />

              <NormalModule title={'Declined'} secondPerson={'Handler'} />

              <NormalModule title={'Expired'} />
              <NormalModule
                title={'Cancelled'}
                secondPerson={'Merchant Name'}
              />

              <FriendModule />
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                height: Metrics.screenHeight * 0.7,
                justifyContent: 'center',
              }}>
              <Empty message={'Login Required!'} />
            </View>
          )}
        </ScrollView>
      </View>
    </Footer>
  );
};

export default Notification;
