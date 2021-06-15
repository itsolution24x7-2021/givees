import { StyleSheet } from 'react-native';
import { Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  cardSubContainer: {
    paddingTop: Metrics.ratio(10),
  },
  contentContainerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: Metrics.screenHeight * 0.355,
    // backgroundColor: 'red',
  },
  itemAnimatedContainer: {
    borderRadius: Metrics.ratio(7),
    height: Metrics.screenHeight * 0.22,
    justifyContent: 'center',
    shadowColor: '#0000000D',
    elevation: 1,
    backgroundColor: 'white',
  },
  innerQuote: {
    width: Metrics.ratio(75),
    height: Metrics.ratio(64),
    borderRadius: Metrics.ratio(10),
    zIndex: -1,
    // left: Metrics.ratio(12),
  },
  topFlower: {
    width: Metrics.ratio(35),
    height: Metrics.ratio(35),
    position: 'absolute',
    zIndex: -1,
    left: Metrics.ratio(80),
    top: Metrics.ratio(-20),
  },
  bottomFlower: {
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
    position: 'absolute',
    zIndex: -1,
    left: Metrics.ratio(-18),
    bottom: Metrics.ratio(24),
  },
  rightFlower: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    position: 'absolute',
    zIndex: -1,
    right: Metrics.ratio(-16),
    bottom: Metrics.ratio(120),
  },
  quotesCardBg: {
    width: Metrics.ratio(176),
    height: Metrics.ratio(176),
    position: 'absolute',
    zIndex: -1,
    bottom: Metrics.ratio(-28),
    right: Metrics.ratio(4),
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  actionBtnView: {
    marginHorizontal: Metrics.ratio(6),
  },
  copyImage: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  saveImage: {
    width: Metrics.ratio(18),
    height: Metrics.ratio(18),
  },
  favoriteImage: {
    width: Metrics.ratio(20),
    height: Metrics.ratio(20),
  },
  secActionView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  secActionRow: {
    flexDirection: 'row',
  },
  noOfComment: {
    fontSize: Metrics.ratio(10),
    color: '#979DA8',
    fontFamily: Fonts.type.MontserratBold,
    marginHorizontal: Metrics.ratio(5),
  },
  commentImage: {
    marginHorizontal: Metrics.ratio(6),
    width: Metrics.ratio(12),
    height: Metrics.ratio(12),
  },
  quoteText: {
    fontSize: Metrics.ratio(25),
    fontFamily: Fonts.type.EBGaramondRegular,
    color: '#000000',
    marginBottom: Metrics.ratio(8),
    marginTop: Metrics.ratio(16),
  },
  quoteAuthor: {
    fontSize: Metrics.ratio(20),
    fontFamily: Fonts.type.EBGaramondRegular,
    color: '#000000',
  },
  titleStyles: {
    color: '#000000',
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.Arial,
    textAlign: 'center',
  },
  daysStyles: {
    color: '#FE4141',
    fontSize: Fonts.size.xxSmall,
    textAlign: 'center',
    fontFamily: Fonts.type.ArialBold,
    paddingLeft: 5,
  },
});
