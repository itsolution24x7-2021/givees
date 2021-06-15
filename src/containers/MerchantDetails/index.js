// @flow
import {connect} from 'react-redux';
import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Images, Metrics, Fonts} from '../../theme';
import {MerchantProductDetail, Footer} from '../../components';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {WithLocalSvg} from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const MerchantDetails = (props) => {
  const [wishList, setwishList] = useState([
    {
      name: 'Cagarny 6820 Male Watch',
      value: 'x3',
      sub: 'Category 4420 Male Quarta ',
      place: 'China Wirehouse Only',
      status: 'disliked',
      freeDelivery: true,
      crubSideDelivery: true,
      likes: 0,
      id: 1,
    },
    {
      name: 'Cagarny 6820 Male Watch ',
      value: 'x3',
      sub: 'Category 4420 Male Quarta Watach',
      place: 'China Wirehouse Only',
      freeDelivery: false,
      crubSideDelivery: true,
      likes: 0,
      id: 11,
    },
    {
      name: 'Cagarny 6820 Male Watch',
      value: 'x3',
      sub: 'Category 4420 Male Quarta Watach',
      place: 'China Wirehouse Only',
      freeDelivery: true,
      crubSideDelivery: false,
      likes: 4,
      id: 1111,
    },
    {
      name: 'Cagarny 6820 Male Watch',
      value: 'x3',
      sub: 'Category 4420 Male Quarta Watach',
      place: 'China Wirehouse Only',
      freeDelivery: true,
      crubSideDelivery: true,
      likes: 0,
      id: 11111,
    },
  ]);

  const handleLikes = (info) => {
    // console.log('likes', info);
  };

  const renderItem = ({item, index}) => {
    return (
      <MerchantProductDetail
        navigation={props.navigation}
        data={item}
        index={index}
        handleLikes={handleLikes}
      />
    );
  };

  return (
    <Footer route={props?.route?.name}>
      <View style={styles.mainView}>
        <View style={{height: Metrics.screenHeight * 0.3}}>
          <View style={styles.CheckOutArrow}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              {/* <Image style={styles.CheckOutArrowImg} source={Images.BackArrow} /> */}

              <View style={styles.CheckOutArrowImg}>
                <WithLocalSvg asset={Images.BackArrowSvg} />
              </View>
            </TouchableOpacity>
          </View>
          <Image
            resizeMode="stretch"
            style={styles.BannerBGimg}
            source={Images.MainBgImage}
          />
        </View>
        <ScrollView>
          <View style={{flex: 1}}>
            <View>
              <View style={styles.nameView}>
                <View style={{width: Metrics.screenWidth * 0.78}}>
                  <Text style={styles.nameText}>
                    Nike 9211 Male Shoes (Bundle of two)
                  </Text>
                </View>
                <TouchableOpacity style={styles.heartView}>
                  <AntDesign
                    name="heart"
                    size={Metrics.ratio(15)}
                    color="#DB2040"
                    style={{marginRight: 5}}
                  />
                  <Text style={styles.HeartViewText}>28k</Text>
                </TouchableOpacity>
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
                  <Text style={styles.infoText}>
                    123, Main St. City, Province
                  </Text>
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
              <View style={styles.infoView}>
                <Text style={styles.descriptionText}>
                  Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit
                  sed tu es conor Lorem Ipsum Dolor amit sed tu es conor Lorem
                  Ipsum Dolor amit sed tu es conor...
                </Text>
              </View>
            </View>

            <FlatList
              data={wishList}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </Footer>
  );
};

export default MerchantDetails;
