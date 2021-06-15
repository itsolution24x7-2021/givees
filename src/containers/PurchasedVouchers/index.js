// @flow
import { connect } from 'react-redux';
import React, { useRef, useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { Images, Metrics, Colors, Fonts } from '../../theme';
import styles from './style';
import { strings } from '../../I18n';
import { MyGiveesVoucher, Footer } from '../../components';
import { Header, GoBackHeader } from '../../components';
const PurchasedVoucher = (props) => {
  const [MygiveesCartData, setCartData] = useState([
    {
      MygiveesImg: Images.productImg,
      VoucherName: 'Fossil 10 ATM Male Watch',
      VoucherCategory: 'Category 4420 Male Quarta Watach',
      VoucherAddress: 'China Wirehouse Only',
      ExpiryDate: 'Expiry Date : Dec. 20, 2020',
      Status: '1',
      freeDelivery: true,
      crubSideDelivery: true,
    },
    {
      MygiveesImg: Images.productImg,
      VoucherName: 'Fossil ',
      VoucherCategory: 'Category 4420 Male Quarta Watach',
      VoucherAddress: 'China Wirehouse Only',
      ExpiryDate: 'Expiry Date : Dec. 12, 2020',
      AcceptPedding: 'True',
      SenderName: 'True',
      Status: '1',
      freeDelivery: true,
      crubSideDelivery: true,
    },
    {
      MygiveesImg: Images.productImg,
      VoucherName: 'Fossil 10 ATM Male Watch',
      VoucherCategory: 'Category 4420 Male Quarta Watach',
      VoucherAddress: 'China Wirehouse Only',
      ExpiryDate: 'Expiry Date : Dec. 12, 2020',
      AcceptPedding: 'False',
      SenderName: 'True',
      Status: '2',
      freeDelivery: true,
      crubSideDelivery: false,
    },
    {
      MygiveesImg: Images.productImg,
      VoucherName: 'Fossil 10 ATM Male Watch',
      VoucherCategory: 'Category 4420 Male Quarta Watach',
      VoucherAddress: 'China Wirehouse Only',
      ExpiryDate: 'Expiry Date : Dec. 31, 2020',
      AcceptPedding: 'True',
      Phone: 'Visible',
      SenderName: 'True',
      Status: '1',
      freeDelivery: false,
      crubSideDelivery: true,
    },
    {
      MygiveesImg: Images.productImg,
      VoucherName: 'Fossil 10 ATM Male Watch',
      VoucherCategory: 'Category 4420 Male Quarta Watach',
      VoucherAddress: 'China Wirehouse Only',
      ExpiryDate: 'Expiry Date : Dec. 20, 2020',
      Status: '1',
      freeDelivery: true,
      crubSideDelivery: true,
    },
  ]);

  return (
    <Footer route={props?.route?.name}>
      <View style={styles.container}>
        <GoBackHeader heading={'My givees'} goBack={props.navigation.goBack} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          Vertical
          style={{
            marginHorizontal: Metrics.screenWidth * 0.02,
          }}>
          {MygiveesCartData.map((data, index) => {
            return (
              <MyGiveesVoucher
                navigation={props.navigation}
                data={data}
                index={index}
              />
            );
          })}
        </ScrollView>
      </View>
    </Footer>
  );
};

export default PurchasedVoucher;
