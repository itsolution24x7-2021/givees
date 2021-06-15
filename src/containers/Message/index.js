// @flow
import {connect} from 'react-redux';
import React, {Component, useRef} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {GoBackHeader, Footer} from '../../components';
import {Metrics, Fonts, Images} from '../../theme';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';

const data = [
  {
    name: 'Alex',
    msg: 'Hey when are you going?',
    status: 1,
    img: Images.FriendsImage,
  },
  {
    name: 'Sandra',
    msg: 'Hey when are you going?',
    status: 0,
    img: Images.FriendsImage,
  },
  {
    name: 'Lisa',
    msg: 'Loved it out there.',
    status: 0,
    img: Images.FriendsImage,
  },
  {
    name: 'Mike',
    msg: 'Yes, it was an amazing experience,Yes, it was an amazing experience',
    status: 0,
    img: Images.FriendsImage,
  },
  {
    name: 'Travis',
    msg: 'Hey when are you going?',
    status: 0,
    img: Images.FriendsImage,
  },
  {
    name: 'Alex',
    msg: 'Hey when are you going?',
    status: 1,
    img: Images.FriendsImage,
  },
  {
    name: 'Travis',
    msg: 'Hey when are you going?',
    status: 0,
    img: Images.FriendsImage,
  },
  {
    name: 'Alex',
    msg: 'Hey when are you going?',
    status: 0,
    img: Images.FriendsImage,
  },
];
const Messages = (props) => {
  const inputRef = useRef(null);

  return (
    <Footer route={props?.route?.name}>
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
          // paddingBottom: Metrics.screenHeight * 0.09,
        }}>
        <GoBackHeader heading={'Messages'} goBack={props.navigation.goBack} />
        <View style={{flex: 7}}>
          <ScrollView
            contentContainerStyle={{
              paddingBottom: Metrics.screenHeight * 0.09,
            }}>
            <TouchableWithoutFeedback
              onPress={() => {
                inputRef.current.focus();
              }}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: Metrics.ratio(200),
                  height: Metrics.screenHeight * 0.06,
                  alignItems: 'center',
                  marginHorizontal: Metrics.ratio(10),
                  // marginTop: Metrics.ratio(10),
                  flexDirection: 'row',
                  elevation: 2,
                  marginBottom: Metrics.ratio(20),
                  width: Metrics.screenWidth * 0.9,
                  alignSelf: 'center',
                }}>
                <Feather
                  name="search"
                  size={Metrics.ratio(19)}
                  color="#BBBBBB"
                  style={{marginLeft: Metrics.ratio(10)}}
                />
                <TextInput
                  placeholder="Search by Name or Handle"
                  style={{
                    fontFamily: Fonts.type.ArialItalic,
                    marginLeft: Metrics.ratio(10),
                    fontSize: Fonts.size.xxSmall,
                    width: '100%',
                  }}
                  ref={inputRef}
                  placeholderTextColor={'#BBBBBB'}
                />
              </View>
            </TouchableWithoutFeedback>

            <ScrollView style={{marginHorizontal: Metrics.ratio(15)}}>
              {data.map((names, index) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      marginVertical: Metrics.ratio(10),
                      flex: 1,
                      alignItems: 'center',
                    }}>
                    <View>
                      <Image source={names.img} />
                    </View>
                    <TouchableOpacity
                      style={{
                        marginHorizontal: Metrics.ratio(10),
                        justifyContent: 'space-evenly',
                        flex: 1,
                      }}
                      onPress={() =>
                        props.navigation.navigate('MessageDetails', {
                          name: names.name,
                        })
                      }>
                      <View
                        style={{
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          flex: 1,
                          marginTop: Metrics.ratio(10),
                        }}>
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: Fonts.size.fourteen,
                            fontFamily: Fonts.type.ArialBold,
                          }}>
                          {names.name}
                        </Text>

                        <Text
                          style={{
                            color: '#9F9F9F',
                            fontSize: Fonts.size.thirteen,
                            fontFamily: Fonts.type.ArialBold,
                          }}>
                          9:45AM
                        </Text>
                      </View>

                      <View
                        style={{
                          justifyContent: 'space-between',
                          flexDirection: 'row',
                          flex: 1,
                          alignItems: 'center',
                        }}>
                        <View style={{width: Metrics.screenWidth * 0.5}}>
                          <Text
                            numberOfLines={1}
                            style={{
                              color: names.status == 1 ? '#000000' : '#9F9F9F',
                              fontFamily:
                                names.status == 1
                                  ? Fonts.type.ArialBold
                                  : Fonts.type.Arial,
                            }}>
                            {names.msg}
                          </Text>
                        </View>

                        <View>
                          {names.status == 1 ? (
                            <View
                              style={{
                                height: Metrics.ratio(10),
                                width: Metrics.ratio(10),
                                backgroundColor: '#FFAA00',
                                borderRadius: Metrics.ratio(200),
                              }}
                            />
                          ) : null}
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </Footer>
  );
};

export default Messages;
