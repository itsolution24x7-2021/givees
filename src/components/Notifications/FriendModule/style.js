import { Pressable, StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: Metrics.screenWidth * 0.8,
  },

  declineView: {
    backgroundColor: '#EF4040',
    borderRadius: 25,
    height: Metrics.ratio(25),
    width: Metrics.ratio(70),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Metrics.ratio(5),
  },

  acceptView: {
    backgroundColor: '#3FA9F5',
    borderRadius: 25,
    height: Metrics.ratio(25),
    width: Metrics.ratio(70),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: Metrics.ratio(15),
  },

  acceptAndDeclineText: {
    color: '#FFFFFF',
    fontSize: Fonts.size.xxSmall,
    fontFamily: Fonts.type.ArialBold,
  },

  textStatus: {
    color: '#3B3B3B',
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.ArialBlackBold,
  },

  text: {
    marginLeft: Metrics.ratio(10),
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.Arial,
  },

  textTime: {
    color: '#8F93A2',
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.Arial,
  },

  buttonView: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginBottom: Metrics.ratio(10),
  },
  image: {
    height: Metrics.ratio(50),
    width: Metrics.ratio(50),
  },
});
