import { StyleSheet } from "react-native";
import { Colors, Metrics, Fonts } from "../../theme";

export default StyleSheet.create({
 

    privacyTitle: {
        fontFamily: Fonts.type.ArialBold,
        color:'#2F2E41',
        fontSize: Fonts.size.small,
    },
    privacyDescription: {
        fontFamily: Fonts.type.Arial,
        marginBottom: Metrics.ratio(15),
        color:'#2F2E41',
    },

    PrivacyView:{
      flex:1,
        marginHorizontal:Metrics.screenWidth * 0.03,
    },
   
    
});