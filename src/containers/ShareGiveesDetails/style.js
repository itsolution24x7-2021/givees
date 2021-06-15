import {Pressable, StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

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

  summaryStyle: {
    // marginVertical: Metrics.screenHeight * 0.001,
    flexDirection: 'row',
  },
  merchantDetailsStyle: {
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#0000000D',
  },
  subTotal: {
    flexDirection: 'row',
  },
  headingCampaignName: {
    flex: 4,
  },

  PriceView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  Campaigntextstyle: {
    fontFamily: Fonts.type.ArialBlackBold,
    fontSize: Fonts.size.large,
    color: '#000',
    marginTop: Metrics.screenHeight * 0.01,
    lineHeight: Metrics.ratio(28),
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

  btnViewStyle: {
    flexDirection: 'row',
    marginHorizontal: Metrics.screenWidth * 0.04,
    marginVertical: Metrics.screenHeight * 0.03,
    justifyContent: 'space-around',
  },
  ButtonStyleDECLINE: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3FA9F5',

    paddingHorizontal: Metrics.screenWidth * 0.03,
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
  ButtonStyleACCEPT: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3FA9F5',

    paddingHorizontal: Metrics.screenWidth * 0.09,

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
  },
  TrickIconView: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: 0,
    marginRight: 8,
    marginTop: 10,
  },
  TrickIcon: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },

  BackgroundStyle: {
    height: Metrics.screenHeight * 0.3,
    width: Metrics.screenWidth,
    position: 'absolute',
  },

  infoView: {
    // marginHorizontal: Metrics.ratio(12),
    marginBottom: Metrics.ratio(5),
  },

  infoIcon: {
    flex: 0.3,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  infoText: {
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.xxSmall,
    color: '#8F93A2',
    flex: 6.5,
  },

  checkbox: {
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#3fa8f5',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: Metrics.ratio(5),
    marginRight: Metrics.ratio(10),
  },
});
