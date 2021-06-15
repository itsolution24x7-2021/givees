// @flow
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  heading: {
    textAlign: 'center',
    color: '#8f93a2',
    fontSize: Metrics.ratio(35),
    marginTop: Metrics.screenWidth * 0.06,
    marginBottom: Metrics.screenWidth * 0.06,
    fontFamily: Fonts.type.ArialBold,
  },
  loginView: {
    paddingHorizontal: Metrics.ratio(15),
    backgroundColor: '#f0f1f6',
    marginTop: Metrics.ratio(20),
    borderRadius: Metrics.ratio(30),
    height: Metrics.ratio(50),
    borderColor: '#d8dde9',
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgot: {
    color: '#3fa8f5',
    textAlign: 'right',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    paddingRight: Metrics.ratio(20),
    marginTop: Metrics.ratio(0),
    fontFamily: Fonts.type.ArialBoldItalic,
    fontSize: Fonts.size.twelve,
  },
  loginBtn: {
    width: Metrics.screenWidth * 0.6,
    paddingVertical: Metrics.ratio(15),
    marginTop: Metrics.ratio(15),
    borderRadius: Metrics.ratio(30),
    elevation: 4,
    alignSelf: 'center',
  },

  loginBtnText: {
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },

  orText: {
    textAlign: 'center',
    marginTop: Metrics.ratio(40),
    fontSize: Metrics.generatedFontSize(18),
  },
  loginInput: {
    flex: 0.95,
  },
  logoStyle: {
    resizeMode: 'contain',
    width: Metrics.ratio(100),
    height: Metrics.ratio(100),
  },
  inputIcon: {
    width: Metrics.ratio(16),
  },
  fbBtn: {
    backgroundColor: '#4267b2',
    color: '#ffffff',
    textAlign: 'center',
    paddingVertical: Metrics.ratio(15),
    marginTop: Metrics.ratio(15),
    borderRadius: Metrics.ratio(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: Fonts.type.LatoHeavy,
  },
  fbIcon: {},

  RegisterTag: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Metrics.ratio(20),
    bottom: Metrics.ratio(20),
  },

  RegisterHere: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.ArialBold,
  },

  RegisterHereLink: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.ArialItalic,
    fontStyle: 'italic',
    color: '#3fa8f5',
    textDecorationLine: 'underline',
  },

  backgroundImg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  LogoImg: {
    width: Metrics.ratio(100),
    height: Metrics.ratio(100),
    marginVertical: Metrics.screenWidth * 0.08,
  },

  ScrollViewStyle: {
    width: Metrics.screenWidth,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.screenWidth * 0.05,
    borderTopLeftRadius: Metrics.ratio(10),
    borderTopRightRadius: Metrics.ratio(10),
  },

  ORText: {
    marginVertical: Metrics.ratio(15),
    textAlign: 'center',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.fifteen,
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
});
