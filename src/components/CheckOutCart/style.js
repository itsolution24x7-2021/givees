import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  cartBackground: {
    backgroundColor: 'white',
    elevation: 5,
    width: '87%',
    marginLeft: Metrics.screenWidth * 0.11,
    paddingVertical: Metrics.screenWidth * 0.02,
    flexDirection: 'row',
    borderRadius: Metrics.ratio(9),
    marginBottom: Metrics.screenHeight * 0.02,
  },

  cartPrice: {
    flex: 1,
    justifyContent: 'space-between',
    
  },

  QuantityIcon: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems : "center",
    marginBottom: Metrics.ratio(3)
  },

  ProductImgStyle: {
    width: Metrics.screenWidth * 0.3,
    height: Metrics.screenWidth * 0.3,
    borderRadius: Metrics.ratio(9),
    marginLeft: -30,
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

  productName: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.ArialBold,
  },

  productStock: {
    fontFamily: Fonts.type.Arial,
    color: '#8F93A2',
    fontSize: Fonts.size.xxxSmall,
  },

  productPrice: {
    fontSize: Fonts.size.large,
    fontFamily: Fonts.type.ArialBold,
    color: '#3FA9F5',
  },

  closeIcon: {
    height: Metrics.ratio(30),
    width: Metrics.ratio(30),
    marginTop: -Metrics.ratio(7),
    marginRight: -Metrics.ratio(5),
  },

  IconCount: {
    height: Metrics.ratio(18),
    width: Metrics.ratio(18),
  },

  textCount: {
    fontSize: Fonts.size.small,
    color: '#727C8E',
    fontFamily: Fonts.type.Arial,
    paddingHorizontal: Metrics.screenWidth * 0.04,
  },

  detailCart: {
    marginHorizontal: Metrics.screenWidth * 0.02,
    flex: 1,
  },

  multiText: {
    color: '#FFAA00',
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.ArialBold,
  },

  iconStyles: {
    marginHorizontal: Metrics.screenWidth * 0.02,
    flex: 1,
    alignItems: 'flex-end',
  },
  PMIcon: {
    flexDirection: 'row',
  },
});
