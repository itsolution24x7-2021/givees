import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  headingForget: {
    textAlign: 'center',
    color: '#8F93A2',
    fontSize: Metrics.ratio(35),
    marginTop: Metrics.screenWidth * 0.06,
    marginBottom: Metrics.screenWidth * 0.06,
    fontFamily: Fonts.type.ArialBold,
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
    // flex: 1,
    // marginTop: Metrics.screenHeight * 0.29,
    // position: 'absolute',
    // bottom: 0,
  },

  ConfirmTextStyle: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    textAlign: 'center',
    paddingVertical: Metrics.screenHeight * 0.01,
    width: Metrics.screenWidth * 0.85,
  },

  BackArrowStyle: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    alignSelf: 'flex-start',
    zIndex: 99,
    margin: Metrics.ratio(10),
  },

  LogoStyle: {
    width: Metrics.ratio(100),
    height: Metrics.ratio(100),

    // marginBottom: Metrics.screenWidth * 0.08,
  },

  BackgroundStyle: {
    height: Metrics.screenHeight * 0.4,
    width: Metrics.screenWidth,
    position: 'absolute',
  },

  ScrollStyle: {
    width: Metrics.screenWidth,
    backgroundColor: Colors.white,
    paddingHorizontal: Metrics.screenWidth * 0.02,
    borderTopLeftRadius: Metrics.ratio(10),
    borderTopRightRadius: Metrics.ratio(10),
  },
});
