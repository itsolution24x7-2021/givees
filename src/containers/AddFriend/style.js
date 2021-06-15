import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  Marchantheading: {
    fontFamily: Fonts.type.ArialBlackBold,
    color: '#3B3B3B',
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
  },
  searchBarView: {
    backgroundColor: 'white',
    borderRadius: Metrics.ratio(30),
    height: Metrics.screenHeight * 0.06,
    alignItems: 'center',
    marginHorizontal: Metrics.screenWidth * 0.04,
    marginVertical: Metrics.screenHeight * 0.01,
    flexDirection: 'row',
    elevation: 2,
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
  searchBarText: {
    flex: 7,
    fontFamily: Fonts.type.ArialItalic,
    fontSize: Fonts.size.ten,
  },
});
