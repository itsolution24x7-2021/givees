import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  headingForget: {
    textAlign: 'center',
    color: '#3B3B3B',
    fontSize: Metrics.ratio(35),
    fontFamily: Fonts.type.Arial,
    fontWeight: 'bold',
    marginBottom: Metrics.screenWidth * 0.04,
  },

  InputTextStyle: {
    fontSize: Fonts.size.eighteen,
    marginTop: Metrics.ratio(40),
    marginBottom: Metrics.ratio(10),
    marginHorizontal: Metrics.ratio(20),
    backgroundColor: '#d8d8d8',
    borderRadius: Metrics.ratio(30),
    paddingLeft: 15,
  },

  loginBtn: {
    width: Metrics.screenWidth * 0.8,
    paddingVertical: Metrics.ratio(15),
    marginVertical: Metrics.screenHeight * 0.03,
    borderRadius: Metrics.ratio(30),
    elevation: 4,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  loginBtnText: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: Fonts.type.LatoHeavy,
    fontSize: Fonts.size.thirteen,
    letterSpacing: 0.2,
  },

  RegisterTag: {
    flexDirection: 'row',
    marginVertical: Metrics.screenWidth * 0.02,
  },

  RegisterHere: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.ArialBold,
    marginHorizontal: Metrics.screenWidth * 0.02,
  },

  RegisterHereLink: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.ArialItalic,
    color: '#3fa8f5',
    textDecorationLine: 'underline',
  },

  RegisterHereLinkPolicy: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.ArialItalic,
    color: '#3fa8f5',
    textDecorationLine: 'underline',
    marginHorizontal: Metrics.screenWidth * 0.02,
  },

  datepickerView: {
    paddingHorizontal: Metrics.ratio(15),
    backgroundColor: '#f0f1f6',
    marginTop: -Metrics.ratio(5),
    marginBottom: Metrics.ratio(15),
    borderRadius: Metrics.ratio(30),
    height: Metrics.ratio(50),
  },

  customDateIcon: {
    top: Metrics.screenHeight * 0.008,
    width: Metrics.ratio(20),
    height: Metrics.ratio(22),
  },

  FLName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  backarrow: {
    marginTop: Metrics.ratio(10),
    marginHorizontal: Metrics.screenWidth * 0.04,
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
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

  CheckoutHeading: {
    fontFamily: Fonts.type.ArialBlackBold,
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
    marginTop: Metrics.ratio(2),
    color: '#3B3B3B',
  },

  facebook: {
    backgroundColor: '#4267b2',
    paddingVertical: Metrics.screenHeight * 0.01,
    paddingHorizontal: Metrics.screenWidth * 0.06,
    borderRadius: Metrics.ratio(30),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 4,
  },
  facebookText: {
    color: '#fff',
    width: Metrics.screenWidth * 0.65,
    textAlign: 'left',
    borderLeftColor: 'white',
    borderLeftWidth: 1,
    paddingVertical: Metrics.ratio(8),
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    paddingLeft: Metrics.screenWidth * 0.09,
  },
  google: {
    backgroundColor: '#fff',
    paddingVertical: Metrics.screenHeight * 0.01,
    paddingHorizontal: Metrics.screenWidth * 0.06,
    borderRadius: Metrics.ratio(30),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 4,
    marginTop: Metrics.ratio(20),
    marginBottom: Metrics.ratio(20),
  },
  googleText: {
    color: '#000',
    width: Metrics.screenWidth * 0.65,
    textAlign: 'left',
    borderLeftColor: '#ddd',
    borderLeftWidth: 1,
    paddingVertical: Metrics.ratio(8),
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    paddingLeft: Metrics.screenWidth * 0.09,
  },
  ORText: {
    marginTop: Metrics.screenHeight * 0.05,
    bottom: Metrics.screenHeight * 0.04,
    textAlign: 'center',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.fifteen,
  },
  checkbox: {
    height: Metrics.ratio(20),
    width: Metrics.ratio(20),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#3fa8f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Metrics.ratio(5),
    marginRight: Metrics.ratio(5),
  },

  customDateIcon: {
    top: Metrics.screenHeight * 0.008,
    width: Metrics.ratio(20),
    height: Metrics.ratio(22),
  },
});
