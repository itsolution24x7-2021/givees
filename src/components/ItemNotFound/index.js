import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';

import styles from './style';

const ItemNotFound = (props) => {
  return (
    <View style={styles.emptyItem}>
      <Text style={styles.emptyItemText}>{props.heading}</Text>
    </View>
  );
};

export default ItemNotFound;
