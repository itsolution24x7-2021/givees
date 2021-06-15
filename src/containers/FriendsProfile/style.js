// @flow
import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Metrics.ratio(10),
  },
  rounderIcon: {
    width: Metrics.ratio(93),
    height: Metrics.ratio(93),
    marginLeft: Metrics.ratio(5),
    borderWidth: 3,
    borderColor: 'white',
    padding: Metrics.ratio(2),
    borderRadius: Metrics.ratio(200),
  },
  renderPrivate_Account_Icon: {
    width: Metrics.ratio(91),
    height: Metrics.ratio(57),
  },
  inputViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 20,
  },
  CheckOutArrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    alignSelf: 'flex-start',
    zIndex: 99,
    marginLeft: Metrics.ratio(15),
    // marginBottom: Metrics.ratio(),
  },

  picAndButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1,
    paddingLeft: Metrics.ratio(10),
    alignItems: 'center',
  },
  pic: {
    alignItems: 'center',
  },
  btnMainView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2,
  },

  messageBtn: {
    borderWidth: 1,
    borderRadius: 20,
    width: Metrics.ratio(195),
    height: Metrics.ratio(35),
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnText: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.Arial,
    color: 'white',
  },

  doubleBtn: {
    flexDirection: 'row',
    marginTop: Metrics.ratio(13),
    justifyContent: 'space-between',
    width: Metrics.ratio(195),
  },

  secondaryBtn: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 20,
    width: Metrics.ratio(90),
    height: Metrics.ratio(30),
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoView: {
    paddingLeft: Metrics.screenWidth * 0.04,

    flex: 1,
    // paddingBottom: Metrics.ratio(10),
  },

  nameText: {
    fontSize: Fonts.size.xLarge,
    fontFamily: Fonts.type.ArialBold,
    color: 'white',
  },

  birthdayView: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 10,
  },

  birthdayText: {
    color: '#FFFFFF',
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.Arial,
    marginLeft: 10,
    marginBottom: -Metrics.ratio(5),
  },

  CheckoutBtn: {
    backgroundColor: '#3fa8f5',
    width: Metrics.ratio(165),
    height: Metrics.ratio(46),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: Metrics.screenHeight * 0.03,
    borderRadius: Metrics.ratio(30),
    flexDirection: 'row',
    elevation: 4,
  },

  CheckoutImg: {
    width: '100%',
    alignItems: 'flex-end',
    flex: 1,
    marginRight: 5,
  },

  CheckoutBtnText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: Metrics.screenHeight * 0.01,
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    letterSpacing: Metrics.ratio(0.72),
  },
});
