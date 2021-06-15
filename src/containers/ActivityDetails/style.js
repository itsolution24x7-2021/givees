import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';
import {Colors, Metrics, Fonts} from '../../theme';

export default StyleSheet.create({

  CheckOutArrow: {
    flexDirection: 'row',
    zIndex: 999,
    position: 'absolute',
    marginVertical: Metrics.screenHeight * 0.04,
  },

  CheckOutArrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
    alignSelf: 'flex-start',
    margin: Metrics.ratio(10),
  },

  BannerBGimg: {
    width: null,
    resizeMode: 'stretch',
  },
  
  summaryStyle: {
    marginHorizontal: Metrics.screenWidth * 0.04,
  },

  ActivityTextHeading:{
    fontFamily: Fonts.type.ArialBlackBold,
    fontSize: Fonts.size.large,
    marginVertical:Metrics.screenHeight * 0.01
  },

  ActivityTextDetail:{
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.thirteen,
  },
 
  OptionView: {
    flexDirection: "row",
    marginVertical: Metrics.screenHeight * 0.03,
    justifyContent:"space-around"
  },

  FreeDeliveryOpacity: {
    backgroundColor: '#fff',
    elevation: 6,
    flexDirection:"row",
    paddingVertical: Metrics.screenHeight * 0.01,
    paddingHorizontal: Metrics.screenHeight * 0.02,
    borderRadius: 30,
  },

  Optiontextstyle: {
    fontFamily: Fonts.type.Arial,
    fontSize: Fonts.size.small,
    color: '#8F93A2',

  },

  icondelivery: {
    width: 16,
    height: 10,
  },
 

});
