import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { Images, Fonts, Metrics } from '../../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

const ReedeemModule = (props) => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={Images.NotificationScreenIcon}
      />
      <Text style={styles.text}>
        12 oz. Coffee from coffee hut
        <Text style={styles.textStatus}> Redeemed in Store</Text> at{' '}
        <Text style={styles.textTime}>9:15 PM</Text>
      </Text>
    </View>
  );
};

export default ReedeemModule;
