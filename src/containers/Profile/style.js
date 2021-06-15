// @flow
import {StyleSheet} from 'react-native';
import {Metrics, Colors, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Metrics.ratio(10),
  },
  rounderIconProfile: {
    borderWidth: 2,
    borderColor: 'white',
    width: Metrics.ratio(75),
    height: Metrics.ratio(75),
    borderRadius: Metrics.ratio(100),
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rounderIcon: {
    // borderWidth: 2,
    // borderColor: 'white',
    width: Metrics.ratio(75),
    height: Metrics.ratio(75),
    borderRadius: Metrics.ratio(100),
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  handleName: {
    fontSize: Metrics.ratio(23),
    color: 'white',
    fontFamily: Fonts.ArialBlackBold,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  handleSubname: {fontSize: Metrics.ratio(15), color: 'white'},
  inputViewStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 1,
    paddingHorizontal: 20,
  },
});
