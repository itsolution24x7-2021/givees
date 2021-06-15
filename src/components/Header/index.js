import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, TextInput} from 'react-native';
// import PropTypes from 'prop-types';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import styles from './styles';
import {Metrics, Colors, Images, Fonts} from '../../theme';
import {GoBackHeader} from '../../components';
import {useSelector} from 'react-redux';

import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';

const Header = (props) => {
  const {
    navigation,
    goBack,
    profile,
    goBackWithHeading,
    heading,
    searchBar,
    searchBarPlaceholder,
    searchBarOnChange,
    body,
    right,
    cart,
  } = props;

  const loginResponse = useSelector((state) => {
    if (state.login?.data?.accessToken) {
      // setProfileImage(state.login?.data?.data[0]?.imgs.imageUrl);
      return true;
    } else {
      return false;
    }
  });

  return (
    <View
      style={{
        ...styles.container,
        marginTop: !goBackWithHeading ? Metrics.ratio(10) : Metrics.ratio(0),
      }}>
      {/**
       *
       *
       *      LEFT
       *
       *
       */}

      {true && (
        <View style={{...styles.left}}>
          {profile && (
            <TouchableOpacity
              style={
                props?.profileImage && {
                  width: Metrics.ratio(40),
                  height: Metrics.ratio(40),
                  backgroundColor: '#3FA9F5',
                  borderRadius: Metrics.ratio(20),
                }
              }
              disabled={loginResponse ? false : true}
              onPress={() =>
                navigation.navigate('My Profile', {screen: 'Profile'})
              }>
              <Image
                source={
                  props?.profileImage
                    ? {uri: props?.profileImage}
                    : Images.logoProfile
                }
                style={
                  !props?.profileImage
                    ? {
                        ...styles.rounderIcon,
                        borderWidth: props?.profileImage ? 2 : 0,
                        borderRadius: props?.profileImage ? 200 : 0,
                      }
                    : {
                        flex: 1,
                        borderWidth: props?.profileImage ? 2 : 0,
                        borderRadius: props?.profileImage ? 200 : 0,
                      }
                }
                resizeMode={props?.profileImage ? 'cover' : 'contain'}
              />
            </TouchableOpacity>
          )}

          {/* goBack with Heading */}
          {goBackWithHeading && (
            <GoBackHeader heading={heading} goBack={navigation.goBack} />
          )}

          {/* goBack alone*/}
          {goBack && (
            <View style={{}}>
              <TouchableOpacity
                style={{width: '100%'}}
                onPress={() => props.navigation.goBack()}>
                <Image style={styles.goBackImg} source={Images.BackArrow} />
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      {/**
       *
       *
       *      BODY
       *
       *
       */}

      {searchBar && (
        <View
          style={{
            ...styles.body,
            width: goBack
              ? Metrics.screenWidth * 0.8
              : Metrics.screenWidth * 0.7,
          }}>
          {searchBar && (
            <View style={styles.searchBar}>
              <Feather
                name="search"
                size={Metrics.ratio(18)}
                color="grey"
                style={{marginLeft: 10}}
              />
              <TextInput
                placeholder={searchBarPlaceholder}
                style={styles.searchBarInput}
                onChangeText={searchBarOnChange}
              />
            </View>
          )}
        </View>
      )}

      {/**
       *
       *
       *      RIGHT
       *
       *
       */}

      {right && (
        <View style={{...styles.right, paddingRight: Metrics.ratio(10)}}>
          {true && (
            <TouchableOpacity onPress={() => navigation.navigate('checkOut')}>
              <Image
                source={Images.headerCart}
                style={styles.imageCart}
                resizeMode="stretch"
              />
              <Text style={styles.rightText}>{cart ? cart : 0}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

export default Header;
