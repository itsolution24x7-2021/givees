import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  Paymentheading: {
    fontFamily: Fonts.type.ArialBlackBold,
    color: '#3B3B3B',
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
  },
  cartText: {
    flex: 1,
    paddingLeft: Metrics.ratio(25),
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.Arial,
    color: '#515C6F',
  },
  cartIconStyle: {
    alignSelf: 'flex-start',
    zIndex: 99,
    resizeMode: 'contain',
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
    justifyContent: 'center',
  },
  cartArrowStyle: {
    width: Metrics.ratio(18),
    height: Metrics.ratio(18),
    alignSelf: 'flex-start',
    zIndex: 99,
  },
  ViewCart: {
    flexDirection: 'row',
    marginVertical: Metrics.screenHeight * 0.01,
  },
  lineViewCart: {
    borderWidth: 0.5,
    marginLeft: Metrics.screenWidth * 0.1,
    borderColor: '#E7EAF0',
    marginVertical: Metrics.screenHeight * 0.01,
  },

  PaymentCartBtn: {
    backgroundColor: '#3fa8f5',
    // marginHorizontal: Metrics.screenHeight * 0.1,
    // paddingVertical: Metrics.screenHeight * 0.01,
    marginVertical: Metrics.screenHeight * 0.04,
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

  PaymentCartBtnText: {
    color: '#fff',
    textAlign: 'center',
    // paddingVertical: Metrics.screenHeight * 0.01,
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    letterSpacing: Metrics.ratio(0.72),
  },

  PaymentCartImg: {
    width: '100%',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 5,
  },
});
