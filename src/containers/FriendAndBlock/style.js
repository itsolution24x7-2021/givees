// @flow
import { StyleSheet } from 'react-native';
import { Metrics, Colors, Fonts } from '../../theme';

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-around',
    marginTop: Metrics.ratio(10)
  },
  rounderIcon: {
    width: 78,
    height: 78,
    marginLeft: 5,
    borderWidth: 2,
    borderColor: "white",
    padding: 2,
    borderRadius: 200
  },
  inputViewStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
    flex:1,
    paddingHorizontal: 20
  }
});
