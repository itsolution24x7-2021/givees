import { StyleSheet, Dimensions } from 'react-native';
// import { Fonts } from '../../utils/fonts';
// import Colors from '../../theme/Colors';
// import {Images, Metrics, Fonts, Colors} from '../../theme';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'pink',
    },
    headerContainer: {
        flex: 2.3,
        justifyContent: 'space-between',
        width: width,
    },
    headerChild: {
        backgroundColor: "pink",
        flexDirection: 'row',
        flex: 2,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    tabsText: { fontSize: 18, fontFamily: 'LexendDeca-Regular' },
    headingText: { fontSize: 22, fontWeight: 'bold', marginLeft: 20 },
    tabsContainer: {
        // flex: 1.5,
        backgroundColor: "pink",
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerContainer: {
        padding: height * 0.01,
        // flex: .1,
        backgroundColor: "pink",
        // borderTopColor: '#E3E5E9',
        // borderTopWidth: 2,
        justifyContent: 'center',
    },
    footerSubContainer: {
        width: width * 0.9,
        height: height * 0.06,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },
    headerHeading: { fontSize: width * 0.04 },
    bodyContainer: { flex: 1 },
    footerScreenNameInactive: {
        fontSize: height * 0.018,
        color: 'grey',
        textAlign: 'center',
        // fontFamily: Fonts.LexendDecaRegular,
    },
    footerScreenNameActive: {
        fontSize: height * 0.018,
        color: '#5432D3',
        textAlign: 'center',
        // fontFamily: Fonts.LexendDecaRegular,
    },
    addButtonContainer: {
        width: height * 0.06,
        height: height * 0.06,
        backgroundColor: "pink",
        borderRadius: height * 0.1,
        bottom: height * 0.025,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerAlign: { alignItems: 'center' },
    centerJustify: { justifyContent: 'center' },
});







