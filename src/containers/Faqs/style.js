import { StyleSheet, Platform } from 'react-native';
import { Metrics, Fonts } from '../../theme';
//Constant
const { screenWidth, screenHeight, ratio } = Metrics;
const styles = StyleSheet.create({
  heading: {
    fontSize: Metrics.ratio(18),
    fontWeight: '900',
    letterSpacing: Metrics.ratio(-1),
    color: '#000',
  },

  circleView: {
    backgroundColor: '#727c8e',
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
    borderRadius: Metrics.ratio(25),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: Metrics.ratio(20),
    marginRight: Metrics.ratio(5),
    marginTop: Metrics.ratio(-3),
  },

  NumberCountText: {
    color: 'white',
    fontFamily: Fonts.type.ArialBlackBold,

  },
  BoxShadowMainView: {
    flex: 0.95,
    paddingVertical: Metrics.ratio(15),
    paddingHorizontal: Metrics.ratio(8),
    backgroundColor: '#fff',
    marginVertical: Metrics.ratio(15),
    marginTop: Metrics.ratio(-15),
    marginRight: Metrics.ratio(15),
    borderRadius: Metrics.ratio(8),
  },

  BoxShadowView: {
    shadowColor: '#0000000D',
    elevation: 2,
    backgroundColor: 'white',
    paddingVertical: Metrics.ratio(15),
    paddingHorizontal: Metrics.ratio(8),
    backgroundColor: '#fff',
    marginTop: Metrics.ratio(-15),
    borderRadius: Metrics.ratio(8),
  },

  IconStyle: {
    width: Metrics.ratio(22),
    height: Metrics.ratio(22),
  },

  mainViewFaq: {
    marginTop: Metrics.ratio(30),
  },

  faqDetail: {
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.Arial,
    color: '#727C8E',
    marginTop: Metrics.ratio(10),
    paddingHorizontal: Metrics.ratio(7)
  },

  faqHeading: {
    flex: 1,
    fontFamily: Fonts.type.ArialBlackBold,
    fontSize: Fonts.size.fifteen,
    paddingHorizontal: Metrics.ratio(7)
  },

  Contactheading: {
    fontFamily: Fonts.type.ArialBlackBold,
    color: '#3B3B3B',
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
  },
});
export default styles;
