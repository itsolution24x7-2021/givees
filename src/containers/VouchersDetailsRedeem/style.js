import { Pressable, StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  CheckOutArrow: {
    flexDirection: 'row',
    marginVertical: Metrics.screenHeight * 0.04,
  },

  CheckOutArrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    alignSelf: 'flex-start',
    margin: Metrics.ratio(10),
  },
  BackgroundStyle: {
    height: Metrics.screenHeight * 0.3,
    width: Metrics.screenWidth,
    position: 'absolute',
  },
  CheckOutCart: {
    flexDirection: 'row',
    marginVertical: Metrics.screenHeight * 0.04,
    right: 0,
  },
  headerContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  CheckOutCartImg: {
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    alignSelf: 'flex-start',
    margin: Metrics.ratio(10),
  },

  BannerBGimg: {
    width: null,
    resizeMode: 'stretch',
  },

  summaryStyle: {
    // marginVertical: Metrics.screenHeight * 0.01,
    flexDirection: 'row',
  },
  merchantDetailsStyle: {
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#0000000D',
  },
  subTotal: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },

  headingCampaignName: {
    flex: 4,
    // flexDirection: 'row',

    // backgroundColor: 'yellow',
  },

  PriceView: {
    flex: 1,
    alignItems: 'center',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-start',
  },

  Campaigntextstyle: {
    fontFamily: Fonts.type.ArialBlackBold,
    fontSize: Fonts.size.large,
    color: '#000',
    // color: 'white',
    marginVertical: Metrics.screenHeight * 0.01,
  },

  Pricetextstyle: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.fifteen,
    color: '#515C6F',
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
    width: Metrics.screenWidth * 0.42,
    height: Metrics.ratio(35),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
  },

  OptionView: {
    flexDirection: 'row',
    marginVertical: Metrics.screenHeight * 0.03,
    justifyContent: 'space-between',
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

  btnViewStyle: {
    flexDirection: 'row',
    marginVertical: Metrics.screenHeight * 0.03,
    justifyContent: 'space-between',
  },
  ButtonStyleDECLINE: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3FA9F5',
    width: Metrics.screenWidth * 0.45,

    borderRadius: Metrics.ratio(30),
    elevation: 4,
  },
  ButtonStyleScanText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Metrics.ratio(11),
    letterSpacing: 0.7,
  },
  ButtonStyleACCEPT: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3FA9F5',

    width: Metrics.screenWidth * 0.4,
    borderRadius: Metrics.ratio(30),
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    elevation: 4,
    paddingVertical: Metrics.screenHeight * 0.02,
  },
  ButtonStyleContinuText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    letterSpacing: 0.72,
  },
  TrickIconView: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: 0,
    top: 2,
    marginRight: 8,
    marginTop: 10,
  },
  TrickIcon: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
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
    marginBottom: Metrics.ratio(20),
    borderRadius: Metrics.ratio(30),

    elevation: 4,
  },

  ButtonStyleContinuText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },
});
