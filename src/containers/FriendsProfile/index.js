import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

import AntDesign from 'react-native-vector-icons/AntDesign';

import { Images, Metrics, Fonts } from '../../theme';
import { Footer } from '../../components';
import styles from './style';

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

const FriendsProfile = ({ navigation, route }) => {
  const [unfriend, setUnfriend] = useState(false);
  const [block, setBlock] = useState(false);

  const Unfriend = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <View style={styles.pic}>
            <Image
              source={Images.Private_Account_Icon}
              style={styles.renderPrivate_Account_Icon}
              resizeMode="contain"
            />
            <Text
              style={{
                fontSize: Fonts.size.large,
                fontFamily: Fonts.type.ArialBold,
                color: '#8F93A2',
                marginTop: Metrics.ratio(15),
              }}>
              This account is Private.
            </Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: Metrics.ratio(20),
            fontSize: Fonts.size.small,
            fontFamily: Fonts.type.Arial,
            width: Metrics.screenWidth * 0.6,
            textAlign: 'center',
            color: '#000000',
          }}>
          Make a friend request to see full profile.
        </Text>
      </View>
    );
  };

  const Block = () => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={{ ...styles.CheckoutBtn }}
          onPress={() => setBlock(false)}>
          <View style={{ width: '90%' }}>
            <Text style={styles.CheckoutBtnText}>UNBLOCK</Text>
          </View>

          <View style={styles.CheckoutImg}>
            <Image
              style={{
                width: Metrics.ratio(32),
                height: Metrics.ratio(32),
              }}
              resizeMode="contain"
              source={Images.CircleNext}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <Footer route={route?.name}>
      <View
        style={{
          flex: 1,
          paddingBottom: Metrics.screenHeight * 0.09,
          backgroundColor: 'white',
        }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ImageBackground
            source={Images.background}
            style={{ height: Metrics.screenHeight * 0.4, width: null }}>

            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <View style={styles.CheckOutArrowImg}>
                    <WithLocalSvg asset={Images.BackArrowSvg} />
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{ flex: 3, paddingLeft: Metrics.ratio(8) }}>
                <View
                  style={{
                    ...styles.picAndButtonView,
                    justifyContent: block ? 'flex-start' : 'space-around',
                  }}>
                  <View style={styles.pic}>
                    <Image
                      source={block ? Images.Block_Icon : Images.FriendsImage}
                      style={styles.rounderIcon}
                    />
                  </View>

                  {!block && (
                    <View style={styles.btnMainView}>
                      {!unfriend ? (
                        <View>
                          <TouchableOpacity
                            style={styles.messageBtn}
                            onPress={() => navigation.navigate('Message')}
                          >
                            <Text style={styles.btnText}>Message</Text>
                          </TouchableOpacity>
                          <View style={styles.doubleBtn}>
                            <TouchableOpacity
                              style={styles.secondaryBtn}
                              onPress={() => setUnfriend(true)}>
                              <Text
                                style={{
                                  ...styles.btnText,
                                  fontFamily: Fonts.type.ArialBold,
                                }}>
                                Unfriend
                              </Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                              style={styles.secondaryBtn}
                              onPress={() => setBlock(true)}>
                              <Text
                                style={{
                                  ...styles.btnText,
                                  fontFamily: Fonts.type.ArialBold,
                                }}>
                                Block
                              </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      ) : (
                        <View style={styles.doubleBtn}>
                          <TouchableOpacity
                            style={{
                              ...styles.secondaryBtn,
                              width: Metrics.ratio(115),
                            }}
                            onPress={() => setUnfriend(false)}>
                            <Text
                              style={{
                                ...styles.btnText,
                                fontFamily: Fonts.type.ArialBold,
                              }}>
                              Add as friend
                            </Text>
                          </TouchableOpacity>

                          <TouchableOpacity
                            style={{
                              ...styles.secondaryBtn,
                              width: Metrics.ratio(70),
                            }}
                            onPress={() => setBlock(true)}>
                            <Text
                              style={{
                                ...styles.btnText,
                                fontFamily: Fonts.type.ArialBold,
                              }}>
                              Block
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  )}
                </View>

                <View
                  style={{
                    ...styles.infoView,
                    justifyContent: 'flex-start',
                  }}>
                  <Text style={styles.nameText}>@MyHandle</Text>
                  {!block && (
                    <>
                      {!unfriend && (
                        <Text style={styles.btnText}>Anna Berlin</Text>
                      )}
                    </>
                  )}

                  {!block && (
                    <View style={{ flexDirection: 'row' }}>
                      <Text style={styles.btnText}>Toronto, Ontario</Text>
                      {!unfriend && (
                        <View style={styles.birthdayView}>
                          <Image source={Images.birthdayIconImage} />
                          <Text style={styles.birthdayText}>December, 1</Text>
                        </View>
                      )}
                    </View>
                  )}
                </View>
              </View>
            </View>
          </ImageBackground>

          {block ? (
            <View
              style={{
                flex: 1,
                height: Metrics.screenHeight * 0.43,
              }}>
              <Block />
            </View>
          ) : (
            <>
              {unfriend ? (
                <View
                  style={{
                    flex: 1,
                    height: Metrics.screenHeight * 0.43,
                  }}>
                  <Unfriend />
                </View>
              ) : (
                <>
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
                      I like to play video games, watch Netflix and play
                      basketball. No gift too big!
                    </Text>
                  </View>

                  <View style={{ flex: 1, justifyContent: 'center' }}>
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
                                height: Metrics.ratio(130),
                              }}
                              onPress={() =>
                                navigation.navigate('FriendsProfile')
                              }>
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
                    <TouchableOpacity onPress={() => navigation.navigate('WishLists')}>
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
                              <View
                              >
                                <Image
                                  source={details.image}
                                  style={{
                                    height: Metrics.ratio(75),
                                    width: Metrics.ratio(75),
                                  }}
                                  resizeMode="contain"
                                />
                              </View>
                              <TouchableOpacity>
                                <AntDesign
                                  color="red"
                                  name="heart"
                                  size={Metrics.ratio(23)}
                                  style={{ marginBottom: Metrics.ratio(10) }}
                                />
                              </TouchableOpacity>
                            </View>
                            <View
                              style={{
                                marginHorizontal: Metrics.ratio(5),
                                flex: 1,
                              }}>
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
                    style={{
                      margin: Metrics.ratio(10),
                      marginTop: Metrics.ratio(15),
                    }}>
                    {MerchantList.map((details, index) => {
                      return (
                        <View>
                          <View
                            style={{
                              marginHorizontal: Metrics.ratio(7),
                              marginTop: Metrics.ratio(35),
                              backgroundColor: 'white',
                              width: Metrics.screenWidth * 0.35,
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
                            <View style={{ marginHorizontal: Metrics.ratio(5) }}>
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
                </>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </Footer>
  );
};

export default FriendsProfile;
