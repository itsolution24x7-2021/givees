import React, {useState} from 'react';
import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {Fonts, Images, Metrics} from '../../theme';
import Dash from 'react-native-dash';
import styles from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {ScrollView} from 'react-native-gesture-handler';
import {WithLocalSvg} from 'react-native-svg';


import {Footer} from "../../components"

const ShareGiveesDetails = (props) => {
  const [giveesStatus, setgivessStatus] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
 
 
 
  return (
    <Footer route={props?.route?.name}>
    <View style={{flex: 1, paddingBottom: Metrics.screenHeight * 0.09,backgroundColor: 'white'}}>
      <View style={{height: Metrics.screenHeight * 0.3}}>
        <Image style={styles.BackgroundStyle} source={Images.BannerCup} />
        <View style={styles.CheckOutArrow}>
          <View>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <View style={styles.CheckOutArrowImg}>
                <WithLocalSvg asset={Images.BackArrowSvg} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView style={{backgroundColor: 'white'}}>
        <View style={{width: Metrics.screenWidth * 0.9, alignSelf: 'center'}}>
          <View style={styles.summaryStyle}>
            <Text style={styles.Campaigntextstyle}>12 oz. Coffee</Text>
          </View>
          <View style={styles.summaryStyle}>
            <Text style={styles.DescriptionDetailStyle}>
              Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit sed
              tu es conor Lorem Ipsum Dolor amit sed tu es conor Lorem Ipsum
              Dolor amit sed tu es conor...
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: Fonts.size.large,
                color: '#8F93A2',
                marginVertical: Metrics.screenHeight * 0.01,
                fontFamily: Fonts.type.ArialBlackBold,
              }}>
              The Coffee Shack
            </Text>
          </View>
          <View style={styles.infoView}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.infoIcon}>
                <FontAwesome5
                  name="map-marker-alt"
                  color="#8F93A2"
                  size={Metrics.ratio(10)}
                />
              </View>
              <Text style={styles.infoText}>123, Main St. City, Province</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.infoIcon}>
                <Ionicons
                  name="ios-call"
                  color="#8F93A2"
                  size={Metrics.ratio(10)}
                />
              </View>
              <Text style={styles.infoText}>+1-123-123-1234</Text>
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text
              style={{
                fontSize: Fonts.size.small,
                fontFamily: Fonts.type.Arial,
              }}>
              Expiry Date: Dec. 1, 2020
            </Text>
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          {!giveesStatus ? (
            <View
              style={{
                backgroundColor: '#F0F2F7',
                borderColor: '#E3EFF0',
                borderWidth: 1,
                height: Metrics.screenHeight * 0.17,
                borderRadius: 20,
                marginVertical: Metrics.ratio(10),
                width: Metrics.screenWidth * 0.9,
                alignSelf: 'center',
              }}>
              <TextInput
                placeholder="Enter Note for recipient"
                style={{
                  marginLeft: Metrics.ratio(10),
                  fontSize: Fonts.size.thirteen,
                  fontFamily: Fonts.type.Arial,
                }}
                placeholderTextColor="#3B3B3B"
              />
            </View>
          ) : (
            <View
              style={{
                ...styles.summaryStyle,
                width: Metrics.screenWidth * 0.9,
                alignSelf: 'center',
                flexDirection: 'column',
                marginBottom: Metrics.ratio(10),
                marginTop: Metrics.ratio(20),
              }}>
              <Text
                style={{
                  fontFamily: Fonts.type.ArialBold,
                  fontSize: Fonts.size.thirteen,
                  color: '#000',
                }}>
                Note Sent:
              </Text>
              <Text
                style={{
                  ...styles.DescriptionDetailStyle,
                }}>
                Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit
                sed tu es conor Lorem Ipsum Dolor amit sed tu es conor Lorem
                Ipsum Dolor amit sed tu es conor...
              </Text>
            </View>
          )}
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: Metrics.ratio(15),
            }}>
            <View style={{}}>
              <Image
                style={{
                  height: Metrics.ratio(65),
                  width: Metrics.ratio(65),
                }}
                source={Images.FriendsImage}
              />
              <Text
                style={{
                  fontFamily: Fonts.type.ArialBold,
                  fontSize: Fonts.size.small,
                  textAlign: 'center',
                  marginTop: Metrics.ratio(7),
                }}>
                Chris
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: -Metrics.ratio(20),
                marginHorizontal: Metrics.ratio(5),
              }}>
              <Dash
                dashColor="#ffaa00"
                style={{
                  marginLeft: 2,
                  width: Metrics.screenWidth * 0.4,
                  height: 1,
                }}
              />
              <Image
                style={{
                  height: Metrics.ratio(30),
                  width: Metrics.ratio(30),
                }}
                source={Images.IconGiveesArrow}
                resizeMode="contain"
              />
            </View>
            <View style={{}}>
              <Image
                style={{
                  height: Metrics.ratio(65),
                  width: Metrics.ratio(65),
                }}
                source={Images.FriendsImage}
              />
              <Text
                style={{
                  fontFamily: Fonts.type.ArialBold,
                  fontSize: Fonts.size.small,
                  textAlign: 'center',
                  marginTop: Metrics.ratio(7),
                }}>
                Anna
              </Text>
            </View>
          </View>
          <View style={{marginBottom: 10}}>
            {!giveesStatus ? (
              <>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: Metrics.screenHeight * 0.02,
                  }}>
                  <View
                    style={{
                      backgroundColor: '#3FA9F5',
                      height: Metrics.ratio(134),
                      width: Metrics.ratio(134),
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 100,
                      overflow: 'hidden',
                    }}>
                    <TouchableOpacity onPress={() => setgivessStatus(true)}>
                      <Text
                        style={{
                          fontSize: Fonts.size.large,
                          color: 'white',
                          fontFamily: Fonts.type.ArialBlackBold,
                          backgroundColor: '#65baf7',
                          height: Metrics.ratio(78),
                          width: Metrics.ratio(78),
                          textAlign: 'center',
                          textAlignVertical: 'center',
                          borderRadius: 200,
                        }}>
                        SEND
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    marginTop: Metrics.screenHeight * 0.05,
                    marginBottom: Metrics.ratio(10),
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => setToggleCheckBox(!toggleCheckBox)}
                      style={styles.checkbox}>
                      {toggleCheckBox && (
                        <Feather
                          name="check"
                          color="#3fa8f5"
                          size={Metrics.ratio(16)}
                        />
                      )}
                    </TouchableOpacity>
                    <Text
                      style={{
                        color: '#3FA9F5',
                        fontSize: Fonts.size.large,
                        fontFamily: Fonts.type.Arial,
                      }}>
                      Are you Sure?
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate('PurchasedVouchers')
                    }
                    style={{
                      backgroundColor: '#EF4040',
                      height: Metrics.ratio(44),
                      width: Metrics.ratio(144),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: Metrics.ratio(24),
                    }}>
                    <Text
                      style={{
                        fontSize: Fonts.size.xxSmall,
                        color: 'white',
                        fontFamily: Fonts.type.ArialBold,
                        letterSpacing: Metrics.ratio(0.72),
                      }}>
                      CANCEL
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <View
                  style={{
                    alignItems: 'center',
                    marginTop: Metrics.screenHeight * 0.02,
                  }}>
                  <View
                    style={{
                      borderColor: '#25E866',
                      borderRadius: 200,
                      borderWidth: Metrics.ratio(10),
                      height: Metrics.ratio(134),
                      width: Metrics.ratio(134),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: Fonts.size.large,
                        color: '#25E866',
                        fontFamily: Fonts.type.ArialBlackBold,
                        backgroundColor: 'white',
                        borderRadius: 200,
                      }}>
                      SENT
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginTop: Metrics.ratio(45),
                    marginBottom: Metrics.ratio(20),
                  }}>
                  <Text
                    style={{
                      fontSize: Fonts.size.xLarge,
                      fontFamily: Fonts.type.LatoBold,
                      color: '#25E866',
                      textAlign: 'center',
                    }}>
                    Givees Sent Successfully
                  </Text>
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
    </Footer>
  );
};
export default ShareGiveesDetails;
