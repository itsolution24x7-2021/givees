import {matches} from 'lodash';
import {Pressable, StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  backarrow: {
    marginTop: Metrics.ratio(10),
    marginHorizontal: Metrics.screenWidth * 0.04,
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
  },

  CheckoutHeading: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
    marginTop: Metrics.ratio(2),
    color: '#3B3B3B',
  },

  backarrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },
  cartBackground: {
    shadowColor: '#0000000D',
    elevation: 1,
    backgroundColor: 'white',
    width: Metrics.screenWidth * 0.8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Metrics.screenWidth * 0.07,
    // marginBottom: Metrics.screenHeight * 0.02,
    paddingTop: Metrics.screenWidth * 0.02,
    paddingBottom: Metrics.screenWidth * 0.01,
    borderRadius: Metrics.ratio(5),
    marginVertical: Metrics.screenHeight * 0.01,
    elevation: 1,
  },

  Optiontextstyle: {
    fontSize: Fonts.size.ten,
    color: '#fff',
    fontFamily: Fonts.type.Arial,
  },

  icondelivery: {
    width: 20,
    height: 14,
  },

  ProductImgStyle: {
    width: Metrics.screenWidth * 0.2,
    height: Metrics.screenWidth * 0.2,
    borderRadius: Metrics.ratio(9),
    marginLeft: -Metrics.screenWidth * 0.09,
  },

  CheckOutArrow: {
    flexDirection: 'row',
    marginTop: Metrics.ratio(20),
    marginBottom: Metrics.ratio(20),
  },

  CheckOutArrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    alignSelf: 'flex-start',
    zIndex: 99,
    margin: Metrics.ratio(10),
  },

  orderStyle: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.fifteen,
    marginVertical: Metrics.screenWidth * 0.03,
  },

  summaryStyle: {
    marginHorizontal: Metrics.screenWidth * 0.04,
  },
  subTotal: {
    flexDirection: 'row',
  },
  priceTotal: {
    flex: 1,
    alignItems: 'flex-end',
  },

  Subtotaltextstyle: {
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.fifteen,
    color: '#8F93A2',
  },

  Pricetextstyle: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.fifteen,
    color: '#515C6F',
  },

  Totalstyle: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    color: '#515C6F',
  },
  SubtotalPriceStyle: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.xLarge,
    color: '#3FA9F5',
  },

  DeliveryStyle: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    color: '#727C8E',
  },

  lineStyle: {
    borderBottomColor: '#e9e6e6',
    borderBottomWidth: 1,
    marginVertical: Metrics.screenHeight * 0.04,
  },

  CheckoutBtn: {
    backgroundColor: '#3fa8f5',
    // marginHorizontal: Metrics.screenHeight * 0.120,
    // paddingVertical: Metrics.screenHeight * 0.01,
    // marginVertical: Metrics.screenHeight * 0.04,
    // borderRadius: Metrics.ratio(30),
    // flexDirection: 'row',
    elevation: 4,
    flex: 1,
  },

  CheckoutBtnText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: Metrics.screenHeight * 0.01,
    fontFamily: Fonts.type.LatoHeavy,
    fontSize: Fonts.size.twelve,
  },

  CheckoutImg: {
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 5,
  },

  deliveryContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    marginBottom: Metrics.ratio(10),
    marginTop: -Metrics.ratio(3),
    // backgroundColor: 'red',
  },
  // Optiontextstyle: {
  //   marginHorizontal: Metrics.screenWidth * 0.01,
  //   backgroundColor: '#8F93A2',
  //   padding: Metrics.ratio(5),
  //   borderRadius: Metrics.ratio(29),
  //   fontSize: Fonts.size.ten,
  //   color: '#fff',
  // },

  priceMerchant: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.ratio(2),
  },
  optionViewStyle: {
    marginHorizontal: Metrics.screenWidth * 0.01,
    backgroundColor: '#8F93A2',
    height: Metrics.ratio(17),
    width: Metrics.ratio(114),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.ratio(29),
  },
});
