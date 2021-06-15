import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: Metrics.screenHeight * 0.09,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrView: {
    borderWidth: Metrics.ratio(5),
    borderColor: '#000',
    borderRadius: Metrics.ratio(10),
    height: Metrics.screenHeight * 0.45,
    width: Metrics.screenHeight * 0.45,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
