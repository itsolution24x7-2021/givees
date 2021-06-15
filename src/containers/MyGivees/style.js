import {Pressable, StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

const THUMB_RADIUS = 8;

export default StyleSheet.create({
  container: {
    paddingBottom: Metrics.screenHeight * 0.09,
    flex: 1,
  },
  screenContainer: {},
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.ratio(-50),
    marginHorizontal: Metrics.ratio(20),
    // marginBottom: Metrics.ratio(10),
  },

  valueText: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    color: '#8F93A2',
  },

  rootNotch: {
    width: 2,
    height: 6,
    borderLeftColor: '#8F93A2',
    borderRightColor: '#8F93A2',
    borderTopColor: '#8F93A2',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    marginBottom: 2,
  },

  rootLabel: {
    alignItems: 'center',
    padding: 4,
    backgroundColor: 'transparent',
    borderColor: '#8F93A2',
    borderWidth: 1,
    borderRadius: 360,
  },
  textLabel: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    color: '#8F93A2',
    paddingHorizontal: 5,
  },

  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    // borderWidth: 3,
    borderColor: '#8F93A2',
    backgroundColor: '#ffffff',
  },
  rootRailSelected: {
    height: 2,
    backgroundColor: '#8F93A2',
    borderRadius: 2,
  },

  rootRail: {
    flex: 1,
    height: 2,
    borderRadius: 2,
    backgroundColor: '#8F93A2',
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
    shadowColor: '#0000000D',
    marginLeft: Metrics.screenWidth * 0.11,
    paddingVertical: Metrics.screenWidth * 0.09,
    borderRadius: Metrics.ratio(5),
    height: 150,
    marginVertical: Metrics.screenHeight * 0.01,
  },

  Optiontextstyle: {
    fontFamily: Fonts.type.Arial,
    fontSize: 13,
    color: '#FFFFFF',
  },

  icondelivery: {
    width: 20,
    height: 14,
  },

  ProductImgStyle: {
    width: Metrics.screenWidth * 0.25,
    height: Metrics.screenWidth * 0.25,
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
    backgroundColor: '#3fa8f5',
    marginHorizontal: Metrics.screenHeight * 0.12,
    paddingVertical: Metrics.screenHeight * 0.01,
    marginVertical: Metrics.screenHeight * 0.04,
    borderRadius: Metrics.ratio(30),
    flexDirection: 'row',
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
    width: '100%',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 5,
  },

  BannerCampainge: {
    alignItems: 'center',
    alignSelf: 'center',
    width: Metrics.screenWidth * 0.92,

  },
  bannerImg: {
    height: Metrics.screenHeight * 0.23,
    marginVertical: Metrics.ratio(6),
    borderRadius: 8,
    width: Metrics.screenWidth * 0.92,
  },
});
