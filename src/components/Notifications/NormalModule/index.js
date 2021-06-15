import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import { Images, Fonts, Metrics } from '../../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

const NormalModule = (props) => {
  const { title, secondPerson } = props;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images.NotificationScreenIcon} />
      <Text style={styles.text}>
        12 oz. Coffee from Coffee Hut{' '}
        <Text
          style={{
            ...styles.textStatus,
            color: title === 'Expired' ? '#000000' : '#E91414',
          }}>
          {title}
        </Text>{' '}
        {secondPerson && 'by '}
        {secondPerson && (
          <Text
            style={{
              ...styles.textStatus,
              color: '#000000',
            }}>
            {secondPerson}
          </Text>
        )}
        {" "}at <Text style={styles.textTime}>12:54 PM</Text>
      </Text>
    </View>
  );
};

export default NormalModule;
