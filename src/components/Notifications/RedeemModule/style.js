import { Pressable, StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../../theme';

export default StyleSheet.create({
  container: {
    marginBottom: Metrics.ratio(10),
    flexDirection: 'row',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.8,
  },
  text: {
    marginLeft: 10,
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.Arial,
  },
  textStatus: {
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.ArialBlackBold,
  },

  textTime: {
    color: '#8F93A2',
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.Arial,
  },

  image: {
    height: Metrics.ratio(50),
    width: Metrics.ratio(50),
  },
});
