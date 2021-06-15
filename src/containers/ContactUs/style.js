import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  Contactheading: {
    fontFamily: Fonts.type.ArialBlackBold,
    color: '#3B3B3B',
    fontSize: Fonts.size.xxLarge,
    marginLeft: Metrics.ratio(20),
  },
  textAreaStyle: {
    backgroundColor: '#f0f1f6',
    borderRadius: 20,
    paddingHorizontal: Metrics.screenWidth * 0.03,
    textAlignVertical: 'top',
    marginTop: -Metrics.ratio(5),
  },
  ButtonStyleSubmit: {
    // flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: '#12abf3',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Metrics.ratio(20),
    borderRadius: Metrics.ratio(30),
    height: Metrics.ratio(46),
    width: Metrics.ratio(202),
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    elevation: 4,
  },
  ButtonStyleSubmitText: {
    color: '#fff',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
  },

  countryPicker: {
    // width: Metrics.screenWidth * 0.93,
    // marginRight: Metrics.ratio(10),
    marginBottom: Metrics.ratio(20),
    height: Metrics.ratio(45),
    backgroundColor: '#f0f1f6',
    borderWidth: Metrics.ratio(0.05),
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.screenWidth * 0.04,
  },
});
