import { Pressable, StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  CheckOutArrow: {
    // flexDirection: 'row',
    // zIndex: 999,
    // position: 'absolute',
    marginTop: Metrics.screenHeight * 0.07,
  },

  CheckOutArrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    alignSelf: 'flex-start',
    margin: Metrics.ratio(10),
  },

  BannerBGimg: {
    width: Metrics.screenWidth * 1,
    // resizeMode: 'stretch',
    position: 'absolute',
    height: Metrics.screenHeight * 0.3,
    zIndex: -1,
  },

  BCampaignHeading: {
    fontFamily: Fonts.type.LatoBlack,
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(10),
    marginTop: Metrics.ratio(2),
    color: '#3B3B3B',
  },

  summaryStyle: {
    marginHorizontal: Metrics.screenWidth * 0.04,
  },
  merchantDetailsStyle: {
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#0000000D',
  },
  subTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  headingCampaignName: {
    flex: 1,
  },

  PriceView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
  },

  Campaigntextstyle: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.large,
    color: '#000',
    marginVertical: Metrics.screenHeight * 0.02,
  },

  Pricetextstyle: {
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.fifteen,
    color: '#515C6F',
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

  CheckoutBtn: {
    backgroundColor: '#3fa8f5',
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-around',
    // marginHorizontal: Metrics.screenHeight * 0.120,
    paddingHorizontal: Metrics.screenHeight * 0.03,

    // marginVertical: Metrics.screenHeight * 0.04,
    borderRadius: Metrics.ratio(30),
    // flexDirection: 'row',
    elevation: 4,
    // flex:1,
  },

  CheckoutBtnText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: 12,
    // textAlign:"center",
    // paddingVertical: Metrics.screenHeight * 0.01,
    // fontFamily: Fonts.type.LatoHeavy,
    // fontSize: Fonts.size.twelve,
  },

  CheckoutImg: {
    marginLeft: Metrics.ratio(10),
    paddingTop: Metrics.ratio(10),
    // alignItems:"flex-end"
  },

  HeartViewText: {
    fontSize: Fonts.size.ten,
    fontFamily: Fonts.type.ArialBold,
  },

  mainView: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: Metrics.screenHeight * 0.09,
  },
  heartView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: Metrics.ratio(10),
    alignItems: 'center',
    marginTop: Metrics.ratio(7),
  },

  nameView: {
    marginTop: Metrics.ratio(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Metrics.ratio(10),
    alignItems: 'flex-start',
  },

  nameText: {
    color: '#000000',
    fontSize: Fonts.size.large,
    fontWeight: 'bold',
    fontSize: Fonts.size.large,
    fontFamily: Fonts.type.ArialBold,
  },

  infoView: {
    marginHorizontal: Metrics.ratio(12),
    marginVertical: Metrics.ratio(5),
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

  descriptionText: {
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.thirteen,
  },
});
