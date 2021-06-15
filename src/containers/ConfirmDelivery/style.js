import { Pressable, StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  CheckOutArrow: {
    flexDirection: 'row',
    zIndex: 999,
    position: 'absolute',
    marginVertical: Metrics.screenHeight * 0.04,
  },

  CheckOutArrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    alignSelf: 'flex-start',
    margin: Metrics.ratio(10),
  },

  ScanIcon: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
    alignSelf: 'flex-start',
  },

  BannerBGimg: {
    height: Metrics.screenHeight * 0.3,
    width: Metrics.screenWidth,
    position: 'absolute',
  },

  headerContainer: {
    justifyContent: 'space-between',
    // flexDirection: 'row',
    flex: 1,
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
    marginTop: Metrics.screenHeight * 0.02,
    marginBottom: Metrics.screenHeight * 0.005,
    lineHeight: Metrics.ratio(30),
    width: '80%',
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
    fontSize: Fonts.size.small,
    color: '#8F93A2',
  },

  FreeDeliveryOpacity: {
    backgroundColor: '#fff',
    elevation: 6,
    flexDirection: 'row',
    paddingVertical: Metrics.screenHeight * 0.01,
    paddingHorizontal: Metrics.screenHeight * 0.02,
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
    width: 16,
    height: 10,
  },

  CheckoutImg: {
    marginLeft: Metrics.ratio(10),
    paddingTop: Metrics.ratio(10),
    // alignItems:"flex-end"
  },

  MerchantEnterCode: {
    marginHorizontal: Metrics.screenWidth * 0.04,
    marginVertical: Metrics.screenWidth * 0.02,
  },

  EnterText: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.ten,
  },
  ORText: {
    marginVertical: Metrics.ratio(5),
    textAlign: 'center',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.fifteen,
  },

  ButtonStyleContinu: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#12abf3',
    padding: Metrics.ratio(14),
    marginHorizontal: Metrics.screenWidth * 0.2,
    marginTop: Metrics.screenHeight * 0.01,
    marginBottom: Metrics.ratio(20),
    borderRadius: Metrics.ratio(30),
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    elevation: 4,
  },

  ButtonStyleContinuText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },

  ButtonStyleScan: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFAA00',
    padding: Metrics.ratio(14),
    marginHorizontal: Metrics.screenWidth * 0.2,
    marginTop: Metrics.screenHeight * 0.03,
    marginBottom: Metrics.ratio(20),
    borderRadius: Metrics.ratio(30),
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    elevation: 4,
  },

  ButtonStyleScanText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },

  headingText: {
    color: '#000000',
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.ArialBold,
    lineHeight: Metrics.ratio(15),
  },

  descriptionText: {
    fontSize: Fonts.size.small,
    color: '#000000',
    fontFamily: Fonts.type.ArialBold,
    lineHeight: Metrics.ratio(17),
  },

  descriptionText2: {
    fontSize: Fonts.size.small,
    color: '#000000',
    fontFamily: Fonts.type.ArialBold,
    textAlign: 'center',
    width: Metrics.screenWidth * 0.85,
    alignSelf: 'center',
  },

  checkbox: {
    height: Metrics.ratio(21),
    width: Metrics.ratio(21),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#3fa8f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrics.ratio(4),
    marginRight: Metrics.ratio(5),
  },

  checkBoxView: {
    flexDirection: 'row',
    marginHorizontal: Metrics.ratio(20),
    marginTop: Metrics.ratio(5),
  },

  checkBoxText: {
    color: '#3FA9F5',
    marginLeft: Metrics.ratio(10),
    width: Metrics.screenWidth * 0.8,
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.Arial,
  },

  contactSoonText: {
    color: '#9F9F9F',
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.Arial,
  },

  readyView: {
    marginBottom: Metrics.ratio(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  tapStyle: {
    color: '#8F93A2',
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.ArialBold,
  },

  readyText: {
    color: '#00ACEA',
    fontSize: Fonts.size.large,
    fontFamily: Fonts.type.ArialBlackBold,
  },

  btnView: {
    marginVertical: Metrics.ratio(15),
    marginTop: Metrics.ratio(30),
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Metrics.screenWidth * 0.95,
    alignSelf: 'center',
  },

  cancelBtn: {
    shadowColor: '#EF404040',
    elevation: 5,
    backgroundColor: '#EF4040',
    borderRadius: Metrics.ratio(24),
    height: Metrics.ratio(46),
    width: Metrics.ratio(144),
    justifyContent: 'center',
    alignItems: 'center',
  },

  cancelBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: Fonts.size.xxSmall,
    fontFamily: Fonts.type.ArialBold,
    letterSpacing: Metrics.ratio(0.72),
  },

  redeemBtn: {
    shadowColor: '#3FA9F565',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3FA9F5',
    borderRadius: Metrics.ratio(24),
    height: Metrics.ratio(46),
    width: Metrics.ratio(187),
    justifyContent: 'center',
    alignItems: 'center',
  },

  redeemBtnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: Fonts.size.xxSmall,
    fontFamily: Fonts.type.ArialBold,
    letterSpacing: Metrics.ratio(0.72),
    marginLeft: Metrics.ratio(10),
  },

  bottomView: {
    marginTop: Metrics.ratio(15),
    marginHorizontal: Metrics.screenWidth * 0.05,
  },
  bottomView2: {
    marginVertical: Metrics.ratio(10),
    marginHorizontal: Metrics.ratio(15),
  },

  textTransaction: {
    color: '#8F93A2',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.thirteen,
  },

  textNumber: {
    color: '#3FA9F5',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.thirteen,
  },

  doneBtn: {
    borderWidth: 0,
    alignItems: 'center',
    marginVertical: Metrics.screenHeight * 0.01,
    backgroundColor: '#3FA9F5',
    borderRadius: Metrics.ratio(23),
    height: Metrics.ratio(46),
    width: Metrics.ratio(202),
    alignItems: 'center',
    justifyContent: 'center',
  },

  doneText: {
    fontSize: Fonts.size.xxSmall,
    color: '#FFFFFF',
    fontFamily: Fonts.type.ArialBold,
    letterSpacing: Metrics.ratio(0.72),
  },
});
