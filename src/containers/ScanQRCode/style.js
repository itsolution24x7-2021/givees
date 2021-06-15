import { Pressable, StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../theme";

export default StyleSheet.create({

  CheckoutHeading:{
    fontFamily: Fonts.type.LatoBlack,
    fontSize: Fonts.size.xxLarge,
    marginLeft:Metrics.ratio(20),
    marginTop:Metrics.ratio(2),
    color:'#3B3B3B',
  },

  backarrowImg: {
    width: Metrics.ratio(30),
    height: Metrics.ratio(30),
  },

  CheckOutArrow: {
    
    flexDirection:'row', 
    marginTop:Metrics.ratio(20), 
    marginBottom:Metrics.ratio(20),
  },

  CheckOutArrowImg: {
        width: Metrics.ratio(30),
        height: Metrics.ratio(30),
        alignSelf: 'flex-start',
        zIndex: 99,
        margin: Metrics.ratio(10),
  },

  scanStyle: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

});