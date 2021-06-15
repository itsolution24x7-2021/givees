import React, {useCallback, useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {Images, Fonts, Metrics} from '../../theme';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigationState, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';

const MerchantProductDetail = (props) => {
  const [status, setStatus] = useState(false);

  const {
    name,
    value,
    sub,
    place,
    freeDelivery,
    crubSideDelivery,
    likes,
    id,
    imagedata,
    campaignLongName,
    // campaignDetails: {productName},
    campaingAmount,
    curbSideFlag,
  } = props.data;

  const handleLikes = (info) => {
    props.handleLikes(info);
    console.log('handleLikes', props.handleLikes(info));
  };

  return (
    <TouchableOpacity
      style={styles.cartBackground}
      // onPress={() =>
      //   route?.name !== 'MyGivees'
      //     ? navigationResponse === 'Shop'
      // ? props.navigation.navigate('Shop', {
      //     screen: 'BannerCampaign',
      //   })
      //       : props.navigation.navigate('Shop', {
      //           screen: 'Shop',
      //           params: {screen: 'BannerCampaign'},
      //         })
      //     : props.navigation.navigate('BannerCampaign')
      // }
      onPress={() => props.navigation.navigate('BannerCampaign')}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
          }}>
          <View
            style={{
              justifyContent: 'center',
              flex: 1,
            }}>
            <Image style={styles.ProductImgStyle} source={Images.MainBgImage} />
          </View>
        </View>
        <View
          style={{
            flex: 3,
            marginHorizontal: Metrics.ratio(10),
            marginTop: Metrics.ratio(5),
          }}>
          {/* {(crubSideDelivery || freeDelivery) && ( */}
          <View style={styles.deliveryContent}>
            {/* {freeDelivery && ( */}
            <View style={styles.optionViewStyle}>
              <Text style={styles.Optiontextstyle}>
                <Image
                  style={{
                    height: Metrics.ratio(9),
                    width: Metrics.ratio(14),
                  }}
                  resizeMode="contain"
                  source={Images.FreeDeliveryWhite}
                />{' '}
                Free Local Delivery
              </Text>
            </View>
            {/* )} */}
            {curbSideFlag && (
              <View style={styles.optionViewStyle}>
                <Text style={styles.Optiontextstyle}>
                  <Image source={Images.CurbSidePickUpWhite} />
                  {'  Curbside Pickup'}
                </Text>
              </View>
            )}
          </View>
          {/* )} */}
          <Text
            style={{
              fontSize: Fonts.size.fifteen,
              fontFamily: Fonts.type.ArialBold,
            }}>
            {name} <Text style={{color: '#FFAA00'}}>{value}</Text>
          </Text>
          <Text
            style={{
              fontSize: Fonts.size.xxxSmall,
              color: '#8F93A2',
              marginTop: Metrics.ratio(2),
            }}>
            2.5 pound
            {/* {campaignLongName} */}
          </Text>
          <Text
            style={{
              fontSize: Fonts.size.xxxSmall,
              color: '#8F93A2',
              marginTop: Metrics.ratio(2),
            }}>
            Limited Flavour
            {/* {productName} */}
            {/* {place} */}
          </Text>
          <View style={styles.priceMerchant}>
            <Text
              style={{
                fontSize: Fonts.size.large,
                fontFamily: Fonts.type.ArialBold,
              }}>
              $3.49
              {/* {campaingAmount} */}
            </Text>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: Metrics.ratio(3),
                }}
                onPress={() => {
                  setStatus(!status);
                  // props.handleLikes(props?.data, props?.index);
                }}>
                <AntDesign
                  color={status ? 'red' : 'grey'}
                  name="heart"
                  size={Metrics.ratio(22)}
                />
                <Text
                  style={{
                    fontSize: Fonts.size.xxxSmall,
                    fontFamily: Fonts.type.ArialBold,
                    marginLeft: Metrics.ratio(3),
                    marginRight: Metrics.ratio(8),
                  }}>
                  {likes}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => props.handleCart(props.data)}
                // handleCart
              >
                <Image
                  source={Images.addToCart}
                  style={{
                    width: Metrics.ratio(30),
                    height: Metrics.ratio(24),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MerchantProductDetail;
