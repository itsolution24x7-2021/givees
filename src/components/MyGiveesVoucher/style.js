import { Pressable, StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  cartBackground: {
    backgroundColor: 'white',
    elevation: 2,
    width: '85%',
    shadowColor: '#0000000D',
    left: Metrics.ratio(45),
    paddingVertical: Metrics.screenWidth * 0.09,
    borderRadius: Metrics.ratio(5),
    marginBottom: Metrics.screenHeight * 0.04,
    marginTop: Metrics.ratio(5),
  },

  ProductImgStyle: {
    width: Metrics.screenWidth * 0.22,
    height: Metrics.screenWidth * 0.22,
    borderRadius: Metrics.ratio(9),
    marginLeft: -Metrics.ratio(45),
  },

  ContentView: {
    // marginTop: Metrics.screenHeight * 0.01,
    marginLeft: Metrics.screenWidth * 0.02,
    // backgroundColor: 'yellow',
  },

  VoucherName: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.ArialBold,
  },

  CategoryName: {
    fontSize: Fonts.size.xxSmall,
    fontFamily: Fonts.type.Arial,
    color: '#8F93A2',
    // marginTop: Metrics.ratio(2),
  },

  WireHouseStyle: {
    fontSize: Fonts.size.xxSmall,
    fontFamily: Fonts.type.Arial,
    color: '#8F93A2',
    // marginTop: Metrics.ratio(2),
  },

  ExpiryStyle: {
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.ArialBold,
    marginTop: Metrics.screenHeight * 0.01,
    color: '#000',
  },

  Optiontextstyle: {
    // padding: Metrics.ratio(5),

    fontSize: Fonts.size.ten,
    color: '#fff',
    fontFamily: Fonts.type.Arial,
  },
  optionViewStyle: {
    marginHorizontal: Metrics.screenWidth * 0.01,
    backgroundColor: '#8F93A2',
    height: Metrics.ratio(17),
    width: Metrics.ratio(114),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Metrics.ratio(29),
  },
  deliveryContent: {
    flexDirection: 'row',
    position: 'absolute',
    marginVertical: Metrics.screenWidth * 0.02,
    justifyContent: 'space-between',
    alignSelf: 'flex-end',
  },

  btnMyGiveesView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btnMyGivees: {
    backgroundColor: '#3FA9F5',
    marginRight: Metrics.screenWidth * 0.03,
    borderRadius: Metrics.ratio(30),
    elevation: 2,
    height: Metrics.ratio(25),
    width: Metrics.ratio(110),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnMyGiveesGive: {
    backgroundColor: '#FFAA00',
    marginRight: Metrics.screenWidth * 0.03,
    borderRadius: Metrics.ratio(30),
    elevation: 3,
    height: Metrics.ratio(25),
    width: Metrics.ratio(110),
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnMyGiveesText: {
    color: '#fff',
    // paddingHorizontal: Metrics.screenWidth * 0.08,
    // paddingVertical: Metrics.screenWidth * 0.01,

    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.ten,
  },

  acceptbtnCart: {
    // width: '30%',
    backgroundColor: '#25E866',
    // padding: Metrics.ratio(2),
    height: Metrics.ratio(17),
    width: Metrics.ratio(95),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Metrics.ratio(29),
    marginVertical: Metrics.screenHeight * 0.01,
  },

  acceptbtnCartText: {
    fontSize: Fonts.size.ten,
    textAlign: 'center',
    color: '#fff',
    fontFamily: Fonts.type.Arial,
  },
  profileSend: {
    color: '#000',
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.xxxSmall,
  },

  userSentIcon: {
    width: Metrics.ratio(16),
    height: Metrics.ratio(16),
    borderRadius: Metrics.ratio(30),
    marginHorizontal: Metrics.screenWidth * 0.005,
  },

  ViewSentIcon: {
    flexDirection: 'row',
  },

  qrView: {
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: Metrics.ratio(20),
    right: Metrics.ratio(10),
  },

  statusView: {
    position: 'absolute',
    bottom: -Metrics.ratio(12),
    alignSelf: 'flex-end',
  },
});
