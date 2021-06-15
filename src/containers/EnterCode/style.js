import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  headingForget: {
    textAlign: 'center',
    color: '#8F93A2',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Metrics.ratio(35),
    marginTop: Metrics.screenWidth * 0.06,
    marginBottom: Metrics.screenWidth * 0.06,
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

  ButtonStyleConfirm: {
    backgroundColor: '#3fa8f5',
    width: Metrics.screenWidth * 0.85,
    alignSelf: 'center',
    // marginHorizontal: Metrics.screenHeight * 0.12,
    paddingVertical: Metrics.screenHeight * 0.01,
    marginVertical: Metrics.screenHeight * 0.04,
    borderRadius: Metrics.ratio(30),
    flexDirection: 'row',
    elevation: 4,
    flex: 1,
    // marginTop: Metrics.screenHeight * 0.29,
    position: 'absolute',
    bottom: 0,
  },

  ConfirmTextStyle: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    textAlign: 'center',
    paddingVertical: Metrics.screenHeight * 0.01,
    width: Metrics.screenWidth * 0.85,
  },

  ScrollCode: {
    width: Metrics.screenWidth,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.screenWidth * 0.02,
    borderTopLeftRadius: Metrics.ratio(10),
    borderTopRightRadius: Metrics.ratio(10),
  },

  BackArrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    alignSelf: 'flex-start',
    zIndex: 99,
    margin: Metrics.ratio(10),
  },

  logoImg: {
    width: Metrics.ratio(100),
    height: Metrics.ratio(100),
    // marginBottom: Metrics.screenWidth * 0.08,
  },
});
