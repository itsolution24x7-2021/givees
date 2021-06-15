import {Pressable, StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  CheckOutArrow: {
    // flexDirection: 'row',
    // zIndex: 999,
    // position: 'absolute',
    marginVertical: Metrics.screenHeight * 0.04,
  },

  headerContainer: {
    justifyContent: 'space-between',
    // flexDirection: 'row',
    flex: 1,
  },

  CheckOutArrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    alignSelf: 'flex-start',
    margin: Metrics.ratio(10),
  },

  TrickIcon: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },

  BannerBGimg: {
    height: Metrics.screenHeight * 0.35,
    width: Metrics.screenWidth,
    position: 'absolute',
  },

  summaryStyle: {
    marginHorizontal: Metrics.screenWidth * 0.04,
  },

  subTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headingCampaignName: {
    flex: 1,
  },

  Campaigntextstyle: {
    fontFamily: Fonts.type.ArialBlackBold,
    fontSize: Fonts.size.large,
    color: '#000',
    marginVertical: Metrics.screenHeight * 0.02,
  },

  ShoppingBtn: {
    backgroundColor: '#12abf3',
    paddingHorizontal: Metrics.screenHeight * 0.04,
    // marginHorizontal:Metrics.screenWidth * 0.20,
    // marginVertical:Metrics.screenHeight * 0.03,
    borderRadius: Metrics.ratio(30),
    justifyContent: 'center',
    marginBottom: 10,
    elevation: 4,
    // fontFamily:Fonts.type.ArialBold,
    // fontSize:Fonts.size.twelve,
    // elevation:4,
  },

  ShoppingBtnText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },

  dottStyle: {
    width: 5,
    height: 5,
    backgroundColor: '#3FA9F5',
    borderRadius: 30,
  },

  Optiontextstyle: {
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.twelve,
    color: '#8F93A2',
  },

  FreeDeliveryOpacity: {
    backgroundColor: '#fff',
    elevation: 6,
    flexDirection: 'row',
    // paddingVertical: Metrics.screenHeight * 0.01,
    // paddingHorizontal: Metrics.screenHeight * 0.01,
    width: Metrics.ratio(155),
    height: Metrics.ratio(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },

  OptionView: {
    flexDirection: 'row',
    marginVertical: Metrics.screenHeight * 0.03,
    justifyContent: 'space-around',
  },

  DetailBox: {
    backgroundColor: '#fff',
    elevation: 6,
    borderRadius: 9,
    marginVertical: Metrics.screenHeight * 0.04,
    paddingVertical: Metrics.screenHeight * 0.02,
    paddingHorizontal: Metrics.screenHeight * 0.02,
  },

  DetailBoxText: {
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.small,
    color: '#8F93A2',
  },

  DescriptionDetailStyle: {
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.thirteen,
    color: '#000000',
    // marginVertical: Metrics.screenHeight * 0.01,
  },

  icondelivery: {
    width: Metrics.ratio(16),
    height: Metrics.ratio(10),
  },

  CheckoutImg: {
    marginLeft: Metrics.ratio(10),
    paddingTop: Metrics.ratio(10),
    // alignItems:"flex-end"
  },

  ButtonStyleACCEPT: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#25E866',
    // flex: 0.6,
    marginLeft: Metrics.ratio(8),
    marginTop: Metrics.screenHeight * 0.01,
    marginBottom: Metrics.ratio(20),
    borderRadius: Metrics.ratio(30),
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    elevation: 4,
    width: Metrics.ratio(187),
    height: Metrics.ratio(42),
    // paddingVertical: Metrics.screenHeight * 0.02,
  },
  ButtonStyleDECLINE: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EF4040',
    // flex: 0.4,
    marginTop: Metrics.screenHeight * 0.01,
    marginBottom: Metrics.ratio(20),
    borderRadius: Metrics.ratio(30),
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    elevation: 4,
    width: Metrics.ratio(144),
    height: Metrics.ratio(42),
  },
  ButtonStyleContinuText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },

  ButtonStyleScanText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },

  // OptionView: {
  //   flexDirection: 'row',
  //   marginVertical: Metrics.screenHeight * 0.03,
  //   justifyContent: 'space-around',
  // },
  // FreeDeliveryOpacity: {
  //   backgroundColor: '#fff',
  //   elevation: 6,
  //   flexDirection: 'row',
  //   paddingVertical: Metrics.screenHeight * 0.01,
  //   paddingHorizontal: Metrics.screenHeight * 0.015,
  //   borderRadius: 30,
  // },
  Optiontextstyle: {
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.small,
    color: '#8F93A2',
  },

  expiryDateStyle: {
    alignSelf: 'flex-end',
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.small,
  },

  sendFromText: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.small,
  },

  cartBackground: {
    flexDirection: 'row',
    marginVertical: Metrics.screenHeight * 0.02,
  },

  ProductImgStyle: {
    width: Metrics.screenWidth * 0.22,
    height: Metrics.screenWidth * 0.22,
    borderRadius: Metrics.ratio(100),
  },

  FrinedStyle: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.ArialBold,
  },

  NameStyle: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.Arial,
  },

  MerchantName: {
    fontFamily: Fonts.type.Arial,
    color: '#8F93A2',
  },

  detailCart: {
    marginHorizontal: Metrics.screenWidth * 0.03,
  },

  alreadyText: {
    fontSize: Fonts.size.twelve,
    fontFamily: Fonts.type.Arial,
    color: '#8F93A2',
  },

  TrickIconView: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: 0,
    marginRight: Metrics.ratio(8),
  },

  btnViewStyle: {
    flexDirection: 'row',
    marginHorizontal: Metrics.screenWidth * 0.04,
    marginVertical: Metrics.screenHeight * 0.03,
    justifyContent: 'center',
  },

  TagstyleView: {
    backgroundColor: '#3FA9F5',

    alignItems: 'center',
    paddingVertical: Metrics.screenHeight * 0.005,
  },

  TagstyleText: {
    color: '#fff',
    fontSize: Fonts.size.large,
    fontFamily: Fonts.type.Arial,
  },
});
