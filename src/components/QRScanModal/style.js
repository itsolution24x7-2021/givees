import {StyleSheet} from 'react-native';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: Metrics.ratio(20),
    paddingVertical:Metrics.screenWidth * 0.06,
    width: Metrics.screenWidth * 0.9,
    alignItems: 'center',
    elevation: Metrics.ratio(9),
  },

  modalText: {
    marginBottom: Metrics.ratio(15),
    textAlign: 'center',
    fontSize: Fonts.size.xxLarge,
    fontWeight: 'bold',
  },

  modalTextHeading: {
    color: '#3FA9F5',
    fontFamily: Fonts.type.ArialBlackBold,
    fontSize:Metrics.ratio(26),
    paddingTop:Metrics.screenWidth * 0.01,
  },


});
