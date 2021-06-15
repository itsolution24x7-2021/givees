import { Pressable, StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  CheckOutArrow: {
    // flexDirection: 'row',
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
    width: Metrics.ratio(19),
    height: Metrics.ratio(19),
    // alignSelf: 'flex-start',
  },

  BannerBGimg: {
    width: null,
    resizeMode: 'stretch',
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
    marginTop: Metrics.screenHeight * 0.01,
    // marginBottom: Metrics.screenHeight * 0.005,
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
    marginBottom: Metrics.ratio(10),
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
    lineHeight: Metrics.ratio(11),
  },
  ORText: {
    // marginVertical: Metrics.ratio(5),
    textAlign: 'center',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.fifteen,
  },

  ButtonStyleContinu: {
    // flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#12abf3',
    height: Metrics.ratio(46),
    width: Metrics.ratio(202),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.screenHeight * 0.01,
    marginBottom: Metrics.ratio(40),
    borderRadius: Metrics.ratio(30),

    elevation: 4,
  },

  ButtonStyleContinuText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },

  ButtonStyleScan: {
    // flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFAA00',
    height: Metrics.ratio(46),
    width: Metrics.ratio(202),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Metrics.screenHeight * 0.03,
    marginBottom: Metrics.ratio(10),
    borderRadius: Metrics.ratio(30),
    elevation: 4,
  },

  ButtonStyleScanText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.ten,
  },
});
