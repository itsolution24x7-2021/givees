import {Pressable, StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  CheckoutHeading: {
    fontFamily: Fonts.type.LatoBlack,
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
    marginTop: Metrics.ratio(2),
    color: '#3B3B3B',
  },

  mainContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: Metrics.screenHeight * 0.78,
    // backgroundColor: 'green',
  },

  backarrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
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

  CheckoutBtn: {
    backgroundColor: '#3fa8f5',
    // marginHorizontal: Metrics.screenHeight * 0.1,
    // paddingVertical: Metrics.screenHeight * 0.01,
    marginBottom: Metrics.screenHeight * 0.07,
    width: Metrics.ratio(250),
    height: Metrics.ratio(46),
    borderRadius: Metrics.ratio(23),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    alignSelf: 'center',
    // flex: 1,
    // marginTop: Metrics.screenHeight * 0.29,
    // position: 'absolute',
    // bottom: 0,
  },

  CheckoutBtnText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: Metrics.screenHeight * 0.01,
    fontFamily: Fonts.type.LatoHeavy,
    fontSize: Fonts.size.twelve,
    letterSpacing: 0.72,
  },

  CheckoutImg: {
    width: '100%',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 5,
  },

  FLName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  CreditCardStyle: {
    marginHorizontal: Metrics.screenWidth * 0.04,
    // flex: 1,
    // backgroundColor: 'blue',
  },

  datepickerView: {
    // backgroundColor: '#f0f1f6',
    // marginTop: -Metrics.ratio(5),
    // marginBottom: Metrics.ratio(15),
    borderRadius: Metrics.ratio(30),
    // height: Metrics.ratio(50),
    width: Metrics.screenWidth * 0.45,
  },

  customDateIcon: {
    // top: Metrics.screenHeight * 0.008,
    width: Metrics.ratio(20),
    height: Metrics.ratio(22),
  },
});
