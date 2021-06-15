// @flow
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import { useSelector } from 'react-redux';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './style';
import { Images, Metrics } from '../../theme';
import { handleLikes } from '../../services/genericFunctions';

const MerchantDetailCart = (props) => {
  const [likeArray, setLikeArray] = useState([]);

  const { likes, storeName } = props.data.merchantDetails;
  const {
    about,
    address,
    bio,
    city,
    country,
    firstName,
    imagePath,
    phoneNumber,
    lastName,
    navigation
  } = props.data.usersdetails;


  const loginResponse = useSelector((state) => {
    if (state.login?.data?.accessToken) {
      return true;
    } else {
      return false;
    }
  });

  const handleLike = (item, index) => {
    if (loginResponse) {
      handleLikes(
        item,
        index,
        likeArray,
        setLikeArray,
        props?.stateData,
        props?.setStateData,
        [
          props?.stateData[index].merchantDetails,
          props?.stateData[index].merchantDetails.likes,
        ],
        'merchantDetails',
      );
    } else {
      props?.toastPopup ? props?.toastPopup() : null;
    }
  };

  return (
    <View style={styles.MerchantCartView}>
      <View style={styles.MerchantSecondView}>
        <View style={styles.MerchantViewImg}>
          <Image
            style={styles.MerchantImgSize}
            source={imagePath ? { uri: imagePath } : Images.productImg}
          />
        </View>

        <View
          style={{
            flex: 1,
            paddingBottom: Metrics.ratio(10),
          }}>
          <Text style={styles.MerchantName}>
            {storeName ? storeName : 'Cookie Merchant'}
          </Text>
          <View style={styles.MerchantAddressView}>
            <View style={styles.iconStyle}>
              <FontAwesome5 name="map-marker-alt" color="#8F93A2" size={10} />
            </View>

            <Text style={styles.MerchantAdressText}>
              {address ? address : '123, Main St. City, Province'}
            </Text>
          </View>
          <View style={styles.MerchantAddressView}>
            <View style={styles.iconStyle}>
              <Ionicons name="ios-call" color="#8F93A2" size={10} />
            </View>

            <Text style={styles.MerchantAdressText}>
              {phoneNumber ? phoneNumber : '+1-123-123-1234'}
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.MerchantAdressText}>
              {'Category, Sub Category'}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            handleLike(props.data, props?.index)
          }
          style={styles.HeartView}>
          <AntDesign
            name="heart"
            size={Metrics.ratio(17)}
            color={likeArray.includes(props.data.id) ? '#DB2040' : '#8F93A2'}
            style={{ marginRight: Metrics.ratio(5) }}
          />
          <Text style={styles.HeartViewText}>
            {likes} {/* k */}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.MerchantDetailViewText}>
          {
            'Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit tu color sedLorem Ipsum Dolor...'
          }
        </Text>
      </View>
      <TouchableOpacity
        style={styles.ViewDetailBtn}
        onPress={() => props.navigation.navigate('MerchantDetails')}
      >
        <Text style={styles.ViewDetailBtnText}>View Details </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MerchantDetailCart;
