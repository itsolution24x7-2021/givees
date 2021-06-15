// @flow
import {StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../../theme';

export default StyleSheet.create({
  InputView: {
    paddingHorizontal: Metrics.ratio(15),
    backgroundColor: '#f0f1f6',
    marginTop: Metrics.ratio(5),
    borderRadius: Metrics.ratio(30),
    height: Metrics.ratio(50),
    borderColor: '#d8dde9',
    borderWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInputStyle: {
    flex: 0.95,
    color: '#3B3B3B',
    paddingVertical: 0,
    // fontSize: Fonts.size.fifteen,
    fontFamily: Fonts.type.Arial,

    // backgroundColor: 'red',
  },
  inputIcon: {
    width: Metrics.ratio(30),
    alignItems: 'center',
  },
  errormsg: {
    color: 'red',
    fontSize: Fonts.size.fourteen,
    marginHorizontal: Metrics.ratio(15),
  },
  rightIcon: {
    width: Metrics.ratio(20),
  },
  flagView: {
    height: '100%',
    width: '30%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  countryPhoneCode: {fontSize: 14, color: '#000'},

  itemView: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: '2%',
    marginBottom: '1%',
  },
  itemCountryFlag: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemCountryName: {flex: 2, fontSize: 14, color: '#000'},
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalFlatList: {
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '80%',
    height: '70%',
    borderRadius: 5,
  },
});
