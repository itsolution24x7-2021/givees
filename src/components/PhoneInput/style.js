import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../theme';

export default StyleSheet.create({
    containerStyle: {
        paddingVertical: Metrics.ratio(0),
        fontSize: Fonts.size.fifteen,
        fontFamily: Fonts.type.NunitoLight,
        borderRadius: Metrics.ratio(30),
        overflow: 'hidden',
        borderColor: '#E3EFF0',
        borderWidth: Metrics.ratio(1),
        height: Metrics.ratio(50),
    },
    flagButtonStyle: {
        backgroundColor: '#F0F2F7',
        padding: Metrics.ratio(0),
        margin: Metrics.ratio(0),
        paddingRight: Metrics.ratio(40),
        width: Metrics.ratio(105),
    },
    textInputStyle: {
        backgroundColor: '#F0F2F7',
        borderColor: '#E3EFF0',
        borderLeftWidth: Metrics.ratio(1),
        paddingLeft: Metrics.ratio(10),
    },
    codeTextStyle: {
        position: 'absolute',
        left: Metrics.ratio(-60),
        color: '#3B3B3B'
    },

    textContainerStyle: {
        backgroundColor: '#F0F2F7',
        paddingVertical: Metrics.ratio(0),
        paddingLeft: Metrics.ratio(0),
    },
    polygon: {
        fontSize: Metrics.ratio(20),
        color: '#3B3B3B',
        position: 'absolute',
        right: -2,
        bottom: 13,
    },
    textView: {
        marginLeft: Metrics.ratio(5),
        position: 'absolute',
        left: 14,
        top: 2,
        zIndex: 1
    },
    codeText: {
        width: Metrics.ratio(40),
        fontSize: Metrics.ratio(9)
    },
    placeholderTextColor: {
        color: '#F0F2F7',
    }
});