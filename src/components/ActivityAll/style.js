import {Pressable, StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#FFFFFF'},

  mainContainerView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: Metrics.ratio(10),
  },

  mainContainerText: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.ArialBold,
  },

  selectedDotMainView: {
    alignItems: 'center',
    marginTop: Metrics.ratio(2),
  },

  selectedDot: {
    height: Metrics.ratio(8),
    width: Metrics.ratio(8),
    backgroundColor: '#3FA9F5',
    borderRadius: 200,
  },

  textComponentView: {
    marginBottom: Metrics.ratio(25),
    marginLeft: Metrics.ratio(15),
  },

  textCompText: {
    color: '#8F93A2',
    fontSize: Fonts.size.large,
    fontFamily: Fonts.type.LatoBold,
  },
  dotCircle: {
    // marginVertical: Metrics.ratio(14),
    height: Metrics.ratio(7),
    width: Metrics.ratio(7),
    backgroundColor: '#DCDEE2',
    borderRadius: 200,
    // marginLeft: Metrics.ratio(11.5),
  },

  dash: {
    marginHorizontal: Metrics.ratio(2.3),
    // marginTop: -Metrics.screenHeight * 0.025,
    width: Metrics.ratio(1),
    // height: Metrics.ratio(80),
    height: '15%',
    flexDirection: 'column',
  },

  dateText: {
    fontFamily: Fonts.type.LatoHeavy,
    fontSize: Fonts.size.xxxSmall,
    color: '#8F93A2',
  },

  activityView: {
    elevation: 1,
    // marginTop: -Metrics.screenHeight * 0.02,
    justifyContent: 'center',
    marginHorizontal: Metrics.ratio(10),
    borderRadius: Metrics.ratio(2),
    backgroundColor: 'white',
    // height: Metrics.screenHeight * 0.1,
    width: Metrics.screenWidth * 0.7,
    paddingVertical: Metrics.ratio(10),
  },

  activityText: {
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.LatoMedium,
    paddingHorizontal: Metrics.ratio(10),
  },

  activitySubText: {
    fontSize: Fonts.size.thirteen,
    fontFamily: Fonts.type.LatoBlack,
  },
});
