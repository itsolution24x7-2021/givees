// @flow
import {StyleSheet} from 'react-native';
import {Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  footer: {
    position: 'absolute',
    height: Metrics.screenHeight * 0.09,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
    borderColor: 'transparent',
    backgroundColor: 'white',
    paddingHorizontal: Metrics.ratio(20),
    zIndex: 9999,
    bottom: 0,
    width: Metrics.screenWidth * 1,
    flexDirection: 'row',
    elevation: 10,
  },
  btnView: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
