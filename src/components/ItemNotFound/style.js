import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  emptyItem: {
    alignSelf: 'center',
    marginTop: Metrics.screenHeight * 0.05,
  },
  emptyItemText: {
    fontFamily: Fonts.type.ArialBlackBold,
    fontSize: Fonts.size.eighteen,
    color: '#8F93A2',
  },
});
