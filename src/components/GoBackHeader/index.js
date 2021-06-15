import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Metrics, Images, Fonts} from '../../theme';
import {WithLocalSvg} from 'react-native-svg';

const GoBackHeader = ({heading, goBack, keyboardDismiss}) => {
  return (
    <View
      style={{
        // flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        height: Metrics.screenHeight * 0.12,
        alignItems: 'center',
      }}>
      <View>
        <TouchableOpacity
          style={{
            width: '100%',
            // backgroundColor: 'red',
            marginLeft: Metrics.ratio(20),
          }}
          onPress={() => (goBack(), keyboardDismiss ? keyboardDismiss : null)}>
          {/* <Image
            style={{
              width: Metrics.ratio(30),
              height: Metrics.ratio(30),
              alignSelf: 'flex-start',
              zIndex: 99,
              margin: Metrics.ratio(10),
            }}
            source={Images.BackArrow}
          /> */}

          <WithLocalSvg asset={Images.BackArrowSvg} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          marginLeft: Metrics.ratio(20),
        }}>
        <Text
          style={{
            fontFamily: Fonts.type.ArialBlackBold,
            fontSize: 25,
            color: '#3B3B3B',
          }}>
          {heading}
        </Text>
      </View>
    </View>
  );
};

export default GoBackHeader;
