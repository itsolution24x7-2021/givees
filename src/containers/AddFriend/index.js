// @flow
import React, { useRef, useState } from 'react';
import { Text, View, TextInput, Image, TouchableOpacity, FlatList, TouchableWithoutFeedback, } from 'react-native';

import styles from './style';
import { Fonts, Images, Metrics } from '../../theme';
import { Footer, GoBackHeader } from '../../components';
import { searchItems } from '../../services/genericFunctions';

import Feather from 'react-native-vector-icons/Ionicons';


const data = [
  {
    type: 'Handler',
    name: 'Margje Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
  },
  {
    type: 'Handler',
    name: 'Margje Toronto, Ontario',
    image: Images.FriendsImage,
    status: 0,
  },
  {
    type: 'Handler',
    name: 'Margje Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
  },
  {
    type: 'Handler',
    name: 'Margje Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
  },
  {
    type: 'John',
    name: 'Margje Toronto, Ontario',
    image: Images.FriendsImage,
    status: 0,
  },
  {
    type: 'Handler',
    name: 'Margje Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
  },
];

const AddFriend = (props) => {
  const [searchedData, setSearchData] = useState(data);
  const inputRef = useRef(null);

  return (
    <Footer route={props?.route?.name}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <GoBackHeader heading="Add Friend" goBack={props.navigation.goBack} />
        <TouchableWithoutFeedback
          onPress={() => {
            inputRef.current.focus();
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 200,
              height: Metrics.screenHeight * 0.06,
              alignItems: 'center',
              flexDirection: 'row',
              elevation: 2,
              width: Metrics.screenWidth * 0.9,
              alignSelf: 'center',
              marginBottom: Metrics.ratio(25),
              backgroundColor: 'white',
            }}>
            <Feather
              name="md-search"
              size={Metrics.ratio(24)}
              color="#BBBBBB"
              style={{ marginLeft: Metrics.ratio(10) }}
            />
            <TextInput
              placeholder="Search by Handler"
              style={{
                fontFamily: Fonts.type.ArialItalic,
                marginLeft: Metrics.ratio(10),
                color: '#BBBBBB',
                fontSize: Fonts.size.xxSmall,
                paddingVertical: 0,
                width: '90%',
              }}
              ref={inputRef}
              onChangeText={(e) => {
                let info = searchItems(data, ['name'], e);
                setSearchData(info);
              }}
            />
          </View>
        </TouchableWithoutFeedback>

        {searchedData.length ? (
          <FlatList
            contentContainerStyle={{
              paddingBottom: Metrics.screenHeight * 0.09,
            }}
            data={searchedData}
            renderItem={(friends, index) => {
              let { item } = friends;

              return (
                <View
                  style={{
                    flexDirection: 'row',
                    flex: 1,
                    marginVertical: Metrics.ratio(10),
                    paddingHorizontal: Metrics.ratio(10),
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('FriendsProfile')}>
                    <Image source={item.image} />
                  </TouchableOpacity>
                  <View style={{ flex: 0.8, marginLeft: Metrics.ratio(15) }}>
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
                  <View
                    style={{
                      flex: 1,
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      paddingRight: Metrics.ratio(10),
                    }}>
                    <TouchableOpacity
                      style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor:
                          item.status == 1 ? '#3FA9F5' : '#8F93A2',
                        borderRadius: 200,
                        height: Metrics.ratio(35),
                        width: Metrics.ratio(122),

                      }}>
                      <Text
                        style={{
                          fontFamily: Fonts.type.ArialBold,
                          fontSize: Fonts.size.xxSmall,
                          color: 'white',
                        }}>
                        {item.status == 0
                          ? 'REQUEST SENT'
                          : item.status == 1
                            ? 'ADD AS FRIEND'
                            : 'REQUEST SENT'}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={styles.emptyItem}>
            <Text style={styles.emptyItemText}>No Data Found!</Text>
          </View>
        )}
      </View>
    </Footer>
  );
};

export default AddFriend;
