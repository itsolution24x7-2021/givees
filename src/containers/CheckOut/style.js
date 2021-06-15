import { Pressable, StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  backarrow: {
    marginTop: Metrics.ratio(10),
    marginHorizontal: Metrics.screenWidth * 0.04,
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
  },

  CheckoutHeading: {
    fontFamily: Fonts.type.ArialBlackBold,
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
    marginTop: Metrics.ratio(2),
    color: '#3B3B3B',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: Metrics.ratio(20),
    width: Metrics.screenWidth * 0.9,
    paddingHorizontal: 20,
    paddingVertical: 10,
    elevation: Metrics.ratio(9),
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: Metrics.ratio(15),
    textAlign: 'center',
    fontSize: Fonts.size.xxLarge,
    fontWeight: 'bold',
  },

  modalTextEmail: {
    marginTop: Metrics.ratio(15),
    marginBottom: Metrics.ratio(15),
    color: '#FFAA00',
    fontSize: 21,
    fontFamily: Fonts.type.ArialBold,
  },
  backarrow: {
    marginTop: Metrics.ratio(10),
    marginHorizontal: Metrics.screenWidth * 0.04,
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
  },

  backarrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },

  cartBackground: {
    backgroundColor: 'white',
    elevation: 8,
    width: '87%',
    marginLeft: Metrics.screenWidth * 0.11,
    paddingVertical: Metrics.screenWidth * 0.02,
    flexDirection: 'row',
    borderRadius: Metrics.ratio(9),
  },

  ProductImgStyle: {
    width: Metrics.screenWidth * 0.3,
    height: Metrics.screenWidth * 0.3,
    borderRadius: Metrics.ratio(9),
    marginLeft: -30,
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
    backgroundColor: 'red',
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
    fontFamily: Fonts.type.ArialBlackBold,
    fontSize: Fonts.size.fifteen,
    color: '#515C6F',
  },

  Totalstyle: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    color: '#515C6F',
    letterSpacing: Metrics.ratio(0.84),
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

  // CheckoutBtn: {
  //   marginHorizontal: Metrics.screenHeight * 0.12,
  //   paddingVertical: Metrics.screenHeight * 0.01,
  //   marginVertical: Metrics.screenHeight * 0.04,
  //   borderRadius: Metrics.ratio(30),
  //   flexDirection: 'row',
  //   // flex: 1,
  //   elevation: 4,
  //   // position: 'absolute',
  //   // bottom: 0,
  // },

  CheckoutBtnText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: Metrics.screenHeight * 0.01,
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    letterSpacing: Metrics.ratio(0.72),
  },

  CheckoutImg: {
    width: '100%',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 5,
  },

  backarrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },

  cartBackground: {
    backgroundColor: 'white',
    elevation: 8,
    width: '87%',
    marginLeft: Metrics.screenWidth * 0.11,
    paddingVertical: Metrics.screenWidth * 0.02,
    flexDirection: 'row',
    borderRadius: Metrics.ratio(9),
  },

  ProductImgStyle: {
    width: Metrics.screenWidth * 0.3,
    height: Metrics.screenWidth * 0.3,
    borderRadius: Metrics.ratio(9),
    marginLeft: -30,
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
    flex: 1,
    width: Metrics.ratio(165),
    height: Metrics.ratio(46),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Metrics.screenHeight * 0.03,
    borderRadius: Metrics.ratio(30),
    flexDirection: 'row',
    elevation: 4,
  },

  CheckoutImg: {
    width: '100%',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 5,
  },
});
