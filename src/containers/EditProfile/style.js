import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  CheckoutHeading: {
    fontFamily: Fonts.type.LatoBlack,
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
    marginTop: Metrics.ratio(2),
    color: '#3B3B3B',
  },

  backarrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },

  CheckOutArrow: {
    flexDirection: 'row',
    marginTop: Metrics.ratio(20),
  },

  CheckOutArrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    alignSelf: 'flex-start',
    zIndex: 99,
    margin: Metrics.ratio(8),
  },

  ShoppingBtn: {
    // flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#12abf3',
    // padding: Metrics.ratio(14),
    // marginHorizontal: Metrics.screenWidth * 0.2,
    marginVertical: Metrics.screenHeight * 0.03,
    borderRadius: Metrics.ratio(30),
    height: Metrics.ratio(46),
    width: Metrics.ratio(202),
    fontFamily: Fonts.type.LatoHeavy,
    fontSize: Fonts.size.twelve,
    elevation: 4,
  },

  ShoppingBtnText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },

  FLName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  CreditCardStyle: {
    marginHorizontal: Metrics.screenWidth * 0.03,
  },

  datepickerView: {
    paddingHorizontal: Metrics.ratio(15),
    backgroundColor: '#f0f1f6',
    marginTop: Metrics.ratio(0),
    marginBottom: Metrics.ratio(15),
    borderRadius: Metrics.ratio(30),
    height: Metrics.ratio(40),
    marginTop:Metrics.ratio(15),
  },

  RadioView: {
    marginVertical: Metrics.screenHeight * 0.02,
    color: '#8F93A2',
    fontSize: Fonts.size.twelve,
    fontFamily: Fonts.type.ArialBold,
  },
  textAreaStyle: {
    backgroundColor: '#f0f1f6',
    borderRadius: 20,
    paddingHorizontal: Metrics.screenWidth * 0.04,
    textAlignVertical: 'top',
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.thirteen,
  },

  customDateIcon: {
    // top: Metrics.screenHeight * 0.008,
    width: Metrics.ratio(20),
    height: Metrics.ratio(22),
  },

  thumbStyle: {
    borderWidth: 1,
    borderRadius: 360,
    height: Metrics.ratio(25),
    width: Metrics.ratio(25),
    paddingHorizontal: -Metrics.ratio(2.5),
    marginHorizontal: -Metrics.ratio(2.5),
  },

  labelStyle: {
    color: '#373737',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.small,
  },

  countryPicker: {
    width: Metrics.screenWidth * 0.93,
    height: Metrics.ratio(40),
    marginRight: Metrics.ratio(10),
    marginBottom: Metrics.ratio(15),
    marginTop: -Metrics.ratio(5),
    backgroundColor: '#F0F2F7',
    borderWidth: 0,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.screenWidth * 0.04,
  },

  countryName: {
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.thirteen,
  },

  leftDrop: {
    flex: 4,
    alignItems: 'flex-start',
  },

  rightDrop: {
    flex: 1,
    alignItems: 'flex-end',
  },
  secondaryContainer: {
    width: Metrics.screenWidth * 0.93,
    height: Metrics.ratio(40),
  },
  secondaryFlagButton: {
    height: Metrics.ratio(42)
  },
  secondaryTextInput: {
    height: Metrics.ratio(40),
    fontSize:Metrics.ratio(12)
  },
  secondaryCodeText: {
    fontSize: Fonts.size.thirteen
  },
  secondaryCodeTextStyle: {
    fontSize: Metrics.ratio(9),
    color: '#8F93A2',
  },
  secondaryTextView: {
    top: 0,
  },
  secondaryPlaceholderStyle:{
    fontSize: Metrics.ratio(9)
  }
});
