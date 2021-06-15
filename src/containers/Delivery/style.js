import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  AboutDetail: {
    fontFamily: Fonts.type.LatoSemibold,
    marginBottom: Metrics.ratio(15),
    color: '#2F2E41',
  },
  Termsheading: {
    fontFamily: Fonts.type.ArialBlackBold,
    color: '#3B3B3B',
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
  },

  //Cart

  cartBackground: {
    backgroundColor: 'white',
    elevation: 1,
    width: '87%',
    marginLeft: Metrics.screenWidth * 0.11,
    paddingBottom: Metrics.screenWidth * 0.02,
    flexDirection: 'row',
    borderRadius: Metrics.ratio(9),
    marginBottom: Metrics.screenHeight * 0.01,
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

  productName: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.ArialBold,
    marginVertical: Metrics.screenHeight * 0.01,
  },

  MerchantName: {
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.Arial,
    color: '#8F93A2',
  },

  detailCart: {
    marginHorizontal: Metrics.screenWidth * 0.02,
  },
  FLName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textAreaStyle: {
    backgroundColor: '#f0f1f6',
    borderRadius: 20,
    paddingHorizontal: Metrics.screenWidth * 0.03,
    textAlignVertical: 'top',
    marginTop: -Metrics.ratio(4),
  },

  confirmText: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.ArialBold,
    marginTop: Metrics.screenHeight * 0.02,
  },

  ShoppingBtn: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#12abf3',
    alignSelf: 'center',
    // padding: Metrics.ratio(14),
    height: Metrics.ratio(46),
    width: Metrics.ratio(202),
    alignItems: 'center',
    // marginHorizontal: Metrics.screenWidth * 0.2,
    marginVertical: Metrics.screenHeight * 0.04,
    borderRadius: Metrics.ratio(30),

    elevation: 4,
  },

  ShoppingBtnText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    letterSpacing: Metrics.ratio(0.72),
  },

  countryPicker: {
    height: Metrics.ratio(40),
    // width: Metrics.screenWidth * 0.4,
    marginRight: Metrics.ratio(0),
    marginBottom: Metrics.ratio(20),
    marginTop: -Metrics.ratio(5),
    backgroundColor: '#F0F2F7',
    borderColor: '#d8dde9',
    borderWidth: 0.5,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.screenWidth * 0.04,
  },
});
