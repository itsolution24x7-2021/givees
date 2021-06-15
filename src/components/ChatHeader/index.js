import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Metrics, Images, Fonts } from '../../theme';
import Entypo from 'react-native-vector-icons/Entypo';
import { WithLocalSvg } from 'react-native-svg';

const ChatHeader = ({ heading, goBack }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: Metrics.ratio(20),
        marginHorizontal: 10,
        justifyContent: 'center',
      }}>
      <View>
        <TouchableOpacity
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => goBack()}>
          {/* <Image
            style={{
              width: Metrics.ratio(30),
              height: Metrics.ratio(30),
              alignSelf: 'flex-start',
              //   zIndex: 99,
              // position: 'absolute',
              margin: Metrics.ratio(10),
            }}
            source={Images.BackArrow}
          /> */}
          <View
            style={{
              width: Metrics.ratio(30),
              height: Metrics.ratio(30),
              alignSelf: 'flex-start',
              //   zIndex: 99,
              // position: 'absolute',
              margin: Metrics.ratio(10),
            }}>
            <WithLocalSvg asset={Images.BackArrowSvg} />
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: Metrics.ratio(15),
        }}>
        <Image source={Images.FriendsImage} style={{ width: 38, height: 38 }} />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text
          style={{
            fontFamily: Fonts.type.ArialBlackBold,
            fontSize: Fonts.size.large,
            marginLeft: Metrics.ratio(5),
            color: '#3B3B3B',
          }}>
          {heading}
        </Text>
      </View>
      <View
        style={{ alignItems: 'flex-end', flex: 1, justifyContent: 'center' }}>
        <Entypo
          name="dots-three-vertical"
          size={Metrics.ratio(20)}
          color="#8F93A2"
        />
      </View>
    </View>
  );
};

{
  /* <Entypo name="dots-three-vertical" size={24} color="#8F93A2" /> */
}

export default ChatHeader;
