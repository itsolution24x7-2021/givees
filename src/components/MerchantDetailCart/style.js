import { Pressable, StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  MerchantCartView: {
    elevation: 2,
    backgroundColor: 'white',
    marginVertical: Metrics.ratio(10),
    borderRadius: Metrics.ratio(20),
    width: Metrics.screenWidth * 0.92,
    alignSelf: 'center',
  },
  MerchantSecondView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  MerchantName: {
    marginTop: Metrics.ratio(10),
    color: '#3B3B3B',
    fontSize: Fonts.size.fifteen,
    fontFamily: Fonts.type.ArialBold,
  },

  MerchantAddressView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
  iconStyle: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  MerchantAdressText: {
    color: '#8F93A2',
    flex: 1.9,
    fontSize: Fonts.size.xxSmall,
    fontFamily: Fonts.type.Arial,
  },

  HeartView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: Metrics.ratio(12),
    right: 0,
    marginRight: Metrics.ratio(10),
    alignItems: 'center',
  },
  HeartViewText: {
    color: '#000000',
    fontSize: Fonts.size.ten,
    fontFamily: Fonts.type.ArialBold,
    marginRight: Metrics.ratio(10),
  },

  MerchantDetailView: {
    marginLeft: Metrics.screenWidth * 0.03,
  },
  MerchantDetailViewText: {
    fontSize: Fonts.size.ten,
    fontFamily: Fonts.type.Arial,
    color: '#8F93A2',
    marginLeft: Metrics.screenWidth * 0.03,
    marginRight: Metrics.screenWidth * 0.06,
  },

  ViewDetailBtn: {
    marginTop: 15,
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
    marginBottom: 8,
  },

  ViewDetailBtnText: {
    color: '#3FA9F5',
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.Arial,
  },

  MerchantViewImg: {
    overflow: 'hidden',
    marginHorizontal: Metrics.screenWidth * 0.03,
    borderRadius: 9,
  },

  MerchantImgSize: {
    width: Metrics.ratio(70),
    height: Metrics.ratio(70),
  },
});
