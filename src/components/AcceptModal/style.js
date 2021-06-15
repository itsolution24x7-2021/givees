import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

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
    padding: Metrics.ratio(30),
    width: Metrics.screenWidth * 0.9,
    alignItems: 'center',
    elevation: Metrics.ratio(9),
  },

  textStyle: {
    color: 'white',
    fontFamily: Fonts.type.ArialBold,
    fontSize: Fonts.size.twelve,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: Metrics.ratio(15),
    textAlign: 'center',
    fontSize: Fonts.size.xxLarge,
    fontWeight: 'bold',
  },

  modalTextEmail: {
    marginTop: Metrics.ratio(15),
    marginBottom: Metrics.ratio(15),
    color: '#8f93a2',
    fontSize: Fonts.size.xSmall,
    fontFamily: Fonts.type.ArialBold,
    textAlign: 'center',
  },

  openButton: {
    backgroundColor: '#3FA9F5',
    paddingVertical: Metrics.screenHeight * 0.02,
    paddingHorizontal: Metrics.screenWidth * 0.15,
    borderRadius: Metrics.ratio(30),
    marginHorizontal: Metrics.screenWidth * 0.01,
    // position:'absolute',
    // bottom:-50,
  },

  ModalNoButton: {
    backgroundColor: '#EF4040',
    paddingVertical: Metrics.screenHeight * 0.02,
    paddingHorizontal: Metrics.screenWidth * 0.15,
    borderRadius: Metrics.ratio(30),
    marginHorizontal: Metrics.screenWidth * 0.01,
  },

  textAreaStyle: {
    backgroundColor: '#f0f1f6',
    borderRadius: 20,
    paddingHorizontal: Metrics.screenWidth * 0.04,
    textAlignVertical: 'top',
    width: Metrics.screenWidth * 0.8,
    height: Metrics.screenHeight * 0.24,
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.thirteen,
  },
  bothButtonView: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -18,
  },
});
