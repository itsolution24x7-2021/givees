import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
  Mygiveesheading: {
    fontFamily: Fonts.type.ArialBlackBold,
    color: '#3B3B3B',
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
  },

  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingBottom: Metrics.screenHeight * 0.09,
  },
});
