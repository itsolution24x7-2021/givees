import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Images, Metrics, Fonts} from '../../theme';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WithLocalSvg} from 'react-native-svg';
import {Footer} from '../../components';

const Friends = [
  {
    image: Images.user1,
    name: 'Harper',
  },
  {
    image: Images.user2,
    name: 'Evelyn',
  },
  {
    image: Images.user3,
    name: 'Mason',
  },
  {
    image: Images.user1,
    name: 'Anna',
  },
  {
    image: Images.user2,
    name: 'Anna',
  },
  {
    image: Images.user3,
    name: 'Anna',
  },
];

const WishList = [
  {
    image: Images.wishlist1,
    likes: '28k',
    name: 'New mens watch (cagerny men watch) limited',
    price: '3.49',
  },
  {
    image: Images.wishlist2,
    likes: '28k',
    name: 'New mens watch (cagerny men watch) limited',
    price: '3.49',
  },
  {
    image: Images.wishlist3,
    likes: '28k',
    name: 'New mens watch (cagerny men watch) limited',
    price: '3.49',
  },
  {
    image: Images.wishlist4,
    likes: '28k',
    name: 'New mens watch (cagerny men watch) limited',
    price: '3.49',
  },
];

const MerchantList = [
  {
    image: Images.wishlist1,
    likes: '28k',
    name: 'Coffee Merchant New 1',
  },
  {
    image: Images.wishlist4,
    likes: '28k',
    name: 'Donut Merchant for all the times',
  },
  {
    image: Images.wishlist2,
    likes: '28k',
    name: 'New mens watch (cagerny men watch) Limited',
  },
  {
    image: Images.wishlist3,
    likes: '28k',
    name: 'New mens watch (cagerny men watch) Limited',
  },
  {
    image: Images.wishlist1,
    likes: '28k',
    name: 'New mens watch (cagerny men watch) Limited',
  },
];

const Profile = ({navigation, route}) => {
  const userToken = useSelector((state) => {
    // console.log(state.login?.data?.data, '12221111AAVVV');
    return state.login?.data?.data[0];
  });

  return (
    <Footer route={route?.name}>
      <View
        style={{
          flex: 1,
          paddingBottom: Metrics.screenHeight * 0.09,
          backgroundColor: 'white',
        }}>
        <TouchableOpacity
          style={{
            position: 'absolute',
            zIndex: 999,
            bottom: Metrics.screenHeight * 0.09,
            right: Metrics.ratio(10),
          }}
          onPress={() =>
            navigation.navigate('Friends', {
              screen: 'AddFriend',
            })
          }>
          <View
            style={{
              ...styles.rounderIcon,
              marginBottom: Metrics.ratio(15),
              width: Metrics.ratio(55),
              height: Metrics.ratio(55),
            }}>
            <WithLocalSvg asset={Images.AddFriendIconSvg} />
            {/* <Ionicons
            name="person-add"
            size={25}
            color="#fff"
            style={{ marginLeft: -Metrics.ratio(3) }}
          /> */}
          </View>

          {/* <Image style={styles.rounderIcon} source={Images.AddImage} /> */}
        </TouchableOpacity>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: Metrics.ratio(10)}}>
          <ImageBackground
            source={Images.background}
            style={{
              height: Metrics.screenHeight * 0.27,
              width: null,
            }}>
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                marginHorizontal: Metrics.screenWidth * 0.04,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-start',
                }}>
                <Image
                  style={styles.rounderIconProfile}
                  source={
                    userToken?.imgs?.imageUrl
                      ? {uri: userToken?.imgs?.imageUrl}
                      : Images.questionMark
                  }
                />
                {/* <Image
                  source={Images.NotificationScreenIcon}
                  style={styles.rounderIcon}
                /> */}
                <View>
                  <View style={{marginLeft: Metrics.screenWidth * 0.04}}>
                    <Text style={styles.handleName}>{userToken.userName}</Text>
                    <Text style={styles.handleSubname}>{userToken.email}</Text>
                    <Text style={styles.handleSubname}>Toronto, Ontario</Text>
                  </View>
                  <View
                    style={{
                      marginLeft: Metrics.screenWidth * 0.04,
                      marginTop: Metrics.ratio(20),
                      // marginBottom: Metrics.ratio(22),
                      // alignItems: 'center',
                      // marginRight: Metrics.ratio(22),
                    }}>
                    <TouchableOpacity
                      style={{
                        borderWidth: 1,

                        // paddingHorizontal: Metrics.ratio(15),
                        borderRadius: Metrics.ratio(25),
                        // paddingVertical: Metrics.ratio(6),
                        borderColor: 'white',
                        height: Metrics.ratio(35),
                        width: Metrics.ratio(170),
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      onPress={() => navigation.navigate('EditProfile')}>
                      <View style={{flexDirection: 'row'}}>
                        <MaterialIcons
                          name="edit"
                          size={Metrics.ratio(20)}
                          color="white"
                          style={{
                            marginRight: Metrics.ratio(15),
                            marginLeft: -Metrics.ratio(10),
                          }}
                        />
                        <Text style={styles.handleSubname}>Edit Profile</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              flex: 1,
              margin: Metrics.ratio(15),
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: Metrics.ratio(18),
                color: '#373737',
                fontFamily: Fonts.type.ArialBold,
                letterSpacing: 0.3,
              }}>
              I like to play video games, watch Netflix and play basketball. No
              gift too big!
            </Text>
          </View>

          <View style={{flex: 1, justifyContent: 'center'}}>
            <View
              style={{
                alignItems: 'center',
                marginHorizontal: Metrics.ratio(15),
                marginTop: Metrics.ratio(20),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: Metrics.ratio(17),
                  fontFamily: Fonts.type.ArialBold,
                  color: '#333333',
                  letterSpacing: 0.3,
                }}>
                Friends
              </Text>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Friends', {
                    screen: 'FriendList',
                  })
                }>
                <Text
                  style={{
                    color: '#C1C1C1',
                    fontFamily: Fonts.type.ArialBold,
                    fontSize: Fonts.size.small,
                  }}>
                  {' '}
                  See All (48)
                </Text>
              </TouchableOpacity>
            </View>
            <View>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{
                  marginHorizontal: Metrics.ratio(3),
                  flex: 1,
                }}>
                {Friends.map((details, index) => {
                  return (
                    <TouchableOpacity
                      style={{
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        height: Metrics.ratio(130),
                        // backgroundColor: 'red',
                      }}
                      onPress={() => navigation.navigate('FriendsProfile')}>
                      <ImageBackground
                        source={details.image}
                        style={{
                          width: Metrics.ratio(110),
                          flex: 1,
                          borderRadius: Metrics.ratio(20),
                          justifyContent: 'flex-end',
                        }}>
                        <View
                          style={{
                            marginHorizontal: Metrics.ratio(15),
                            alignSelf: 'flex-start',
                          }}>
                          <Text
                            style={{
                              color: '#333333',
                              fontSize: Metrics.ratio(13),
                              fontFamily: Fonts.type.ArialBold,
                            }}>
                            {details.name}
                          </Text>
                        </View>
                      </ImageBackground>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginHorizontal: Metrics.ratio(15),
              marginTop: Metrics.ratio(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: Metrics.ratio(17),
                fontFamily: Fonts.type.ArialBold,
                color: '#333333',
                letterSpacing: 0.3,
              }}>
              Wish List
            </Text>
            <TouchableOpacity
              onPress={() =>
                // name="GiveesHome"
                // component={GiveesHomeStack}
                navigation.navigate('WishLists')
              }>
              <Text
                style={{
                  color: '#C1C1C1',
                  fontFamily: Fonts.type.ArialBold,
                  fontSize: Fonts.size.small,
                }}>
                {' '}
                See All (111)
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={{
              marginHorizontal: Metrics.ratio(10),
              marginTop: Metrics.ratio(15),
            }}>
            {WishList.map((details, index) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate('WishLists')}
                  activeOpacity={0.8}>
                  <View
                    style={{
                      marginHorizontal: Metrics.ratio(7),
                      marginTop: Metrics.ratio(35),
                      backgroundColor: 'white',
                      width: Metrics.screenWidth * 0.35,
                      // height: Metrics.screenHeight * 0.22,
                      height: Metrics.ratio(130),
                      borderRadius: Metrics.ratio(7),
                      elevation: 1,
                      marginBottom: 2,
                      // backgroundColor: 'green',
                    }}>
                    <View
                      style={{
                        marginTop: -Metrics.screenHeight * 0.05,
                        paddingHorizontal: Metrics.ratio(10),
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                      }}>
                      <View
                      // style={{ backgroundColor: 'pink' }}
                      >
                        <Image
                          source={details.image}
                          // resizeMode="stretch"
                          style={{
                            height: Metrics.ratio(75),
                            width: Metrics.ratio(75),
                          }}
                          resizeMode="contain"
                        />
                      </View>
                      <TouchableOpacity
                        style={
                          {
                            // alignItems: 'flex-end',
                            // marginRight: Metrics.ratio(10),
                          }
                        }>
                        <AntDesign
                          color="red"
                          name="heart"
                          size={Metrics.ratio(23)}
                          style={{marginBottom: Metrics.ratio(10)}}
                        />
                        {/* <Text
                        style={{
                          fontFamily: Fonts.type.ArialBold,
                          fontSize: Fonts.size.ten,
                        }}>
                        {details.likes}
                      </Text> */}
                      </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal: Metrics.ratio(5), flex: 1}}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: Fonts.size.xSmall,
                          fontFamily: Fonts.type.ArialBold,
                        }}>
                        {details.name}
                      </Text>
                      <View
                        style={{
                          justifyContent: 'flex-end',
                          paddingBottom: Metrics.ratio(5),
                        }}>
                        <Text
                          style={{
                            color: '#3FA9F5',
                            fontSize: Fonts.size.large,
                            fontFamily: Fonts.type.ArialBold,
                          }}>{`$${details.price}`}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View
            style={{
              alignItems: 'center',
              marginHorizontal: Metrics.ratio(15),
              marginTop: Metrics.ratio(20),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: Fonts.size.large,
                fontFamily: Fonts.type.ArialBold,
                color: '#333333',
              }}>
              Merchant Likes
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: '#C1C1C1',
                  fontFamily: Fonts.type.ArialBold,
                  fontSize: Fonts.size.small,
                }}>
                {' '}
                See All (48)
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            activeOpacity={0.8}
            style={{margin: Metrics.ratio(10), marginTop: Metrics.ratio(15)}}>
            {MerchantList.map((details, index) => {
              return (
                <View>
                  <View
                    style={{
                      marginHorizontal: Metrics.ratio(7),
                      marginTop: Metrics.ratio(35),
                      backgroundColor: 'white',
                      width: Metrics.screenWidth * 0.35,
                      // height: Metrics.screenHeight * 0.22,
                      height: Metrics.ratio(130),
                      borderRadius: Metrics.ratio(7),
                      elevation: 1,
                      marginBottom: 2,
                    }}>
                    <View
                      style={{
                        marginTop: -Metrics.screenHeight * 0.05,
                        paddingHorizontal: Metrics.ratio(10),
                        flexDirection: 'row',
                        alignItems: 'flex-end',
                        justifyContent: 'space-between',
                      }}>
                      <TouchableOpacity>
                        <Image
                          source={details.image}
                          style={{
                            height: Metrics.ratio(75),
                            width: Metrics.ratio(75),
                          }}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={{
                          // alignItems: 'flex-end',
                          // marginTop: -Metrics.screenHeight * 0.05,
                          // marginRight: 10,
                          alignItems: 'center',
                        }}>
                        <AntDesign
                          color="red"
                          name="heart"
                          size={Metrics.ratio(23)}
                        />
                        <Text
                          style={{
                            fontFamily: Fonts.type.ArialBold,
                            fontSize: Fonts.size.ten,
                          }}>
                          {details.likes}
                        </Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal: Metrics.ratio(5)}}>
                      <Text
                        style={{
                          color: '#000000',
                          fontSize: Fonts.size.xSmall,
                          fontFamily: Fonts.type.ArialBold,
                        }}>
                        {details.name}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </ScrollView>
      </View>
    </Footer>
  );
};

export default Profile;
