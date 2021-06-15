import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './style';
import { Images, Metrics, Fonts } from '../../theme';

const stylesssss = {
  background: {
    backgroundColor: 'pink',
  },
};

const ButtonWithIcon = (props) => {
  const { screenName, method } = props;
  const executeFun = () => {
    if (screenName == 'FriendAndBlock') {
      method();
    } else {
      method();
    }
  };

  return (
    <TouchableOpacity
      style={{
        ...styles.CheckoutBtn,
        ...{
          backgroundColor: props.color,
        },
      }}
      onPress={executeFun}>
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#FFFFFF',
            fontSize: 12,
            fontFamily: Fonts.type.ArialBold,
          }}>
          {props.buttonText}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
          marginRight: 5,
        }}>
        <Image
          resizeMode="contain"
          source={props.image}
          style={{ height: 30, width: 30 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
