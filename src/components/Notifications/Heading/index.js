import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';

const Heading = (props) => {
  const { title } = props;
  return (
    <View>
      <Text style={styles.container}>{title}</Text>
    </View>
  );
};

export default Heading;
