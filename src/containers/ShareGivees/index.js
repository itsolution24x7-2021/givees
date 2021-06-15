// @flow
import React, { useState } from 'react';
import { Text, ScrollView, View, TextInput, Image, TouchableOpacity, } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import styles from './style';
import { Fonts, Images, Metrics } from '../../theme';
import { Footer, GoBackHeader } from '../../components';
import { searchItems } from '../../services/genericFunctions';

const Data = [
  {
    type: 'Andler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
    anObject: {
      prop: 'value',
    },
    anArray: ['elements', 'elements', 'elements', 'elements'],
  },
  {
    type: 'Bandler',
    name: 'Zutter Margje Toronto, Ontario',
    image: Images.FriendsImage,
    status: 0,
    anObject: {
      prop: 'value',
    },
    anArray: ['elements', 'elements', 'elements', 'elements'],
  },
  {
    type: 'Candler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
    anObject: {
      prop: 'value',
    },
    anArray: ['elements', 'elements', 'elements', 'elements'],
  },
  {
    type: 'Dandler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
    anObject: {
      prop: 'value',
    },
    anArray: ['elements', 'elements', 'elements', 'elements'],
  },
  {
    type: 'Eandler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 0,
    anObject: {
      prop: 'value',
    },
    anArray: ['elements', 'elements', 'elements', 'elements'],
  },
  {
    type: 'Fandler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
    anObject: {
      prop: 'value',
    },
    anArray: ['elements', 'elements', 'elements', 'elements'],
  },
  {
    type: 'Handler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
    anObject: {
      prop: 'value',
    },
    anArray: ['elements', 'elements', 'elements', 'elements'],
  },
  {
    type: 'Handler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
    anObject: {
      prop: 'value',
    },
    anArray: ['elements', 'elements', 'elements', 'elements'],
  },
  {
    type: 'Handler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
    anObject: {
      prop: 'value',
    },
    anArray: ['elements', 'elements', 'elements', 'elements'],
  },
  {
    type: 'Zandler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
    anObject: {
      prop: 'value',
    },
    anArray: ['elements', 'elements', 'elements', 'elements'],
  },
];

const ShareGivees = (props) => {
  const [data, setData] = useState(Data);

  const onChangeText = (text) => {
    //first param is data array,
    //second property of object to be targeted,
    //3rd one is our input text for search
    const response = searchItems(Data, ['type', 'name'], text);
    setData(response);
  };

  return (
    <Footer route={props?.route?.name}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingBottom: Metrics.screenHeight * 0.09,
        }}>
        <GoBackHeader
          heading={'Select Receiver'}
          goBack={props.navigation.goBack}
          keyboardDismiss={() => Keyboard.dismiss()}
        />
        <View style={styles.searchBarView}>
          <Feather
            name="search"
            size={Metrics.ratio(18)}
            color="grey"
            style={{ marginLeft: Metrics.ratio(10), flex: 1 }}
          />
          <TextInput
            placeholder="Search by Handler"
            style={styles.searchBarText}
            onChangeText={onChangeText}
          />
        </View>
        {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <TouchableOpacity onPress={() => goBack()}>
          <Image
            style={{
              width: Metrics.ratio(30),
              height: Metrics.ratio(30),
              alignSelf: 'flex-start',
              zIndex: 99,
              marginLeft: Metrics.ratio(10),
            }}
            source={Images.BackArrow}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 200,
            height: Metrics.screenHeight * 0.06,
            alignItems: 'center',
            marginHorizontal: 10,
            // marginTop: 10,
            flexDirection: 'row',
            shadowColor: '#0000000D',
            elevation: 5,
          }}>
          <Feather
            name="search"
            size={24}
            color="grey"
            style={{ marginLeft: 10 }}
          />
          <TextInput
            placeholder="Search by Handler"
            style={{ fontStyle: 'italic', marginLeft: 10 }}
            onChangeText={onChangeText}
          />
        </View>
      </View> */}

        <TouchableOpacity style={styles.CheckoutBtn}>
          <View style={{ width: '90%' }}>
            <Text style={styles.CheckoutBtnText}>GIVE BY SOCIAL MEDIA</Text>
          </View>

          <View style={styles.CheckoutImg}>
            <Image
              style={{
                width: Metrics.ratio(20),
                height: Metrics.ratio(20),
                marginRight: 2,
              }}
              resizeMode="contain"
              source={Images.CircleNext}
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginHorizontal: Metrics.ratio(10),
          }}>
          <Text
            style={{
              fontSize: Fonts.size.normal,
              color: '#333333',
              fontFamily: Fonts.type.ArialBold,
              justifyContent: 'center',
            }}>
            Give to Friends
            <Text
              style={{
                fontSize: Fonts.size.thirteen,
                color: '#C1C1C1',
                fontFamily: Fonts.type.ArialBold,
              }}>
              {' '}
              (48)
            </Text>
          </Text>
        </View>

        <ScrollView
          style={{
            marginTop: Metrics.ratio(5),
          }}
          keyboardShouldPersistTaps="always">
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    marginVertical: Metrics.ratio(10),
                    justifyContent: 'space-evenly',
                    paddingHorizontal: Metrics.ratio(15),
                  }}>
                  <View style={{ flexDirection: 'row', flex: 1 }}>
                    <TouchableOpacity>
                      <Image source={item.image} />
                    </TouchableOpacity>
                    <View style={{ flex: 0.9, marginLeft: Metrics.ratio(15) }}>
                      <Text
                        style={{
                          fontFamily: Fonts.type.ArialBold,
                          fontSize: Fonts.size.small,
                        }}>
                        {item.type}
                      </Text>
                      <Text
                        style={{
                          fontFamily: Fonts.type.Arial,
                          fontSize: Fonts.size.small,
                        }}>
                        {item.name}
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() =>
                        props.navigation.navigate('ShareGiveesDetails')
                      }
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#FFAA00',
                        borderRadius: Metrics.ratio(23),
                        height: Metrics.ratio(35),
                        width: Metrics.ratio(120),
                        // marginTop: Metrics.screenHeight * 0.01,
                      }}>
                      <Text
                        style={{
                          fontFamily: Fonts.type.ArialBold,
                          fontSize: Fonts.size.xxSmall,
                          color: 'white',
                        }}>
                        GIVE
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
              //  (
              //   <View
              //     style={{
              //       flexDirection: 'row',
              //       flex: 1,
              //       marginVertical: Metrics.ratio(10),
              //     }}>
              //     <TouchableOpacity>
              //       <Image source={friends.image} />
              //     </TouchableOpacity>
              //     <View style={{ flex: 0.8, marginLeft: Metrics.ratio(15) }}>
              //       <Text
              //         style={{
              //           color: '#000000',
              //           fontFamily: Fonts.type.ArialBold,
              //         }}>
              //         {friends.type}
              //       </Text>
              //       <Text style={{ fontSize: 15 }}>{friends.name}</Text>
              //     </View>
              //     <TouchableOpacity
              //       style={{
              //         alignItems: 'center',
              //         flex: 1,
              //         justifyContent: 'center',
              //         backgroundColor: '#FFAA00',
              //         borderRadius: 200,
              //         height: Metrics.screenHeight * 0.06,
              //         marginTop: Metrics.screenHeight * 0.01,
              //       }}
              //       onPress={() => navigate('ShareGiveesDetails')}>
              //       <Text
              //         style={{
              //           fontFamily: Fonts.type.ArialBold,
              //           color: 'white',
              //         }}>
              //         GIVE
              //       </Text>
              //       {/* {
              //                         friends.status == 1 ?
              //                             <Text style={{ textAlign: "center" }}>UNFRIEND</Text> :
              //                             <Text style={{ textAlign: "center" }}>UNFRIENDED</Text>
              //                     } */}
              //     </TouchableOpacity>
              //   </View>
              // );
            })
          ) : (
            <View style={styles.emptyItem}>
              <Text style={styles.emptyItemText}>No Item Found!</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </Footer>
  );
};

export default ShareGivees;
