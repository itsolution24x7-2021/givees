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

  searchBarView: {
    backgroundColor: 'white',
    borderRadius: Metrics.ratio(30),
    height: Metrics.screenHeight * 0.06,
    alignItems: 'center',
    marginHorizontal: Metrics.screenWidth * 0.04,
    marginBottom: Metrics.screenHeight * 0.01,
    marginTop: -Metrics.screenHeight * 0.015,
    flexDirection: 'row',
    elevation: 2,
  },

  searchBarText: {
    flex: 7,
    fontFamily: Fonts.type.ArialItalic,
    fontSize: Fonts.size.ten,
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
    width: Metrics.ratio(174),
    height: Metrics.ratio(32),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: Metrics.screenHeight * 0.03,
    marginTop: Metrics.screenHeight * 0.01,
    borderRadius: Metrics.ratio(30),
    flexDirection: 'row',
    elevation: 4,
  },

  CheckoutBtnText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: Fonts.type.LatoHeavy,
    fontSize: Fonts.size.ten,
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
    marginVertical: Metrics.screenWidth * 0.09,
  },

  datepickerView: {
    backgroundColor: '#f0f1f6',
    marginTop: Metrics.ratio(5),
    marginBottom: Metrics.ratio(15),
    borderRadius: Metrics.ratio(30),
    height: Metrics.ratio(50),
    width: Metrics.screenWidth * 0.45,
  },

  customDateIcon: {
    top: Metrics.screenHeight * 0.008,
    width: Metrics.ratio(20),
    height: Metrics.ratio(22),
  },
  emptyItem: {
    alignSelf: 'center',
    marginTop: Metrics.screenHeight * 0.05,
  },
  emptyItemText: {
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.eighteen,
    color: '#8F93A2',
  },
});
