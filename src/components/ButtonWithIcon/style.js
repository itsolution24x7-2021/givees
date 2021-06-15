import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
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
    width: Metrics.ratio(160),
    height: Metrics.ratio(40),
    alignSelf: 'center',
    paddingVertical: Metrics.screenHeight * 0.01,
    marginVertical: Metrics.screenHeight * 0.04,
    borderRadius: Metrics.ratio(30),
    flexDirection: 'row',
    elevation: 4,
  },

  CheckoutBtnText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: Metrics.screenHeight * 0.01,
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },

  CheckoutImg: {
    width: '100%',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 5,
    backgroundColor: 'white',
  },
});
