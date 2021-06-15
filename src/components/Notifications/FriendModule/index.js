import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {Images, Fonts, Metrics} from '../../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {ScrollView} from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';

const FriendModule = (props) => {
  const navigation = useNavigation();

  const {} = props;
  return (
    <View>
      <View style={styles.container}>
        <Image style={styles.image} source={Images.NotificationScreenIcon} />
        <Text style={styles.text}>
          <Text style={styles.textStatus}>Handler</Text> Sent you friend request
          at <Text style={styles.textTime}>5:15 PM</Text>
        </Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.declineView}>
          <Text style={styles.acceptAndDeclineText}>DECLINE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acceptView}
          onPress={() =>
            navigation.navigate('My givees', {
              screen: 'ReceiverVoucher',
            })
          }>
          <Text style={styles.acceptAndDeclineText}>ACCEPT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FriendModule;
