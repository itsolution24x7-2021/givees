import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
import { Metrics, Images, Fonts, Colors } from '../../theme';

// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: Metrics.screenHeight * 0.095,
    flexDirection: 'row',
    shadowColor: Colors.black,
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
  },
  keyboard: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width,
    height,
  },
  header: {
    height: 65,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F5FF',
    paddingHorizontal: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    flexDirection: 'row',
  },
  chatTitle: {
    color: '#fff',
    fontWeight: '600',
    margin: 10,
    fontSize: 15,
  },
  chatImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5,
  },
  detailText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: 12,
    color: '#484EC8',
    marginRight: 35,
  },
  input: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    padding: 10,
    height: 40,
    width: width - 20,
    backgroundColor: '#fff',
    margin: 10,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
    },
    borderColor: '#696969',
    borderWidth: 1,
  },
  eachMsg: {
    flexDirection: 'row',
    margin: Metrics.screenHeight * 0.02,
  },
  rightMsg: {
    flexDirection: 'row',
    marginHorizontal: Metrics.screenWidth * 0.02,
    justifyContent: 'flex-end',
  },
  userPic: {
    width: Metrics.ratio(40),
    height: Metrics.ratio(40),
    marginHorizontal: Metrics.ratio(10),
  },
  msgBlock: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    backgroundColor: '#e6e6e6',
    padding: 15,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    marginTop: 5,
    flex: 0.8,
    
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  rightBlock: {
    alignSelf: 'flex-start',
    borderRadius: 20,
    backgroundColor: '#3FA9F5',
    padding: 15,
    shadowColor: '#3d3d3d',
    shadowRadius: 2,
    shadowOpacity: 0.5,
    marginTop: 5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 0.8,
  },

  msgTxt: {
    color: '#000000',
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.Arial,
    maxWidth: Metrics.screenWidth * 0.7,
  },
  rightTxt: {
    color: 'white',
    fontSize: Fonts.size.fourteen,
    fontFamily: Fonts.type.Arial,
    maxWidth: Metrics.screenWidth * 0.7,
    // letterSpacing: 0.2,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: Metrics.ratio(14),
    maxWidth: Metrics.screenWidth * 0.7,
  },

  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 10,
    // alignContent:"center"
    alignSelf: 'center',
  },
  inputRecoding: {
    flexDirection: 'row',
    marginRight: 10,
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 66,
    height: 40,
    alignItems: 'center',
    // flex: 1,
    marginHorizontal: 20,
    // alignContent:"center"
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  inputs: {
    // height: 40,
    // marginLeft: 16,
    // backgroundColor :"blue",
    // borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  btnCancel: {
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSend: {
    backgroundColor: 'red',
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 1,
  },
  footer: {
    flexDirection: 'row',
    height: Metrics.ratio(60),
    backgroundColor: '#eeeeee',
    paddingHorizontal: 10,
    padding: 5,
    alignItems: 'center',
  },
  iconSend: {
    width: 7,
    height: 15,
    alignSelf: 'center',
    marginLeft: 1,
  },

  container1: {
    backgroundColor: '#fff',
    height: Metrics.screenHeight * 0.095,
    flexDirection: 'row',
    shadowColor: Colors.black,
    // elevation: 4,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    // position: 'absolute',
    // top: 0,
    // zIndex: 1,
    // elevation: 1,
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
  },
  menuImage: {
    width: Metrics.ratio(25),
    height: Metrics.ratio(25),
  },
  TouchableMenu: {
    width: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextView: {
    flexDirection: 'row',
    // width: Metrics.screenWidth - Metrics.doubleBaseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headerText1: {
    // fontWeight: Platform.OS === "ios" ? "bold" : "bold",
    fontSize: Metrics.ratio(18),
    fontFamily: Fonts.type.regular,
    color: '#909090',
    flex: 1,
  },
  locationMsgRightView: {
    width: Metrics.screenWidth * 0.7,
    height: Metrics.screenWidth * 0.5,
    borderRadius: Metrics.ratio(8),
    overflow: 'hidden',
    padding: Metrics.ratio(4),
    margin: Metrics.ratio(5),
  },
  locationMsgRightMapView: {
    flex: 1,
    borderRadius: Metrics.ratio(8),
    overflow: 'hidden',
    marginBottom: Metrics.ratio(4),
  },
  locationMsgRightText: {
    fontSize: Metrics.ratio(16),
    marginBottom: Metrics.ratio(4),
  },
  voiceMsgContainer: {
    width: Metrics.screenWidth * 0.35,
    height: Metrics.screenWidth * 0.35,
    borderRadius: Metrics.ratio(8),
    overflow: 'hidden',
    padding: Metrics.ratio(8),
    margin: Metrics.ratio(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  voiceAnimationBg_1: {
    width: Metrics.ratio(80),
    height: Metrics.ratio(80),
    borderRadius: Metrics.ratio(80),
    justifyContent: 'center',
    alignItems: 'center',
  },
  voiceAnimationBg_2: {
    width: Metrics.ratio(60),
    height: Metrics.ratio(60),
    borderRadius: Metrics.ratio(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  voicePlayBtn: {
    backgroundColor: 'white',
    width: Metrics.ratio(35),
    height: Metrics.ratio(35),
    borderRadius: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  voicePauseBtn: {
    backgroundColor: 'white',
    width: Metrics.ratio(50),
    height: Metrics.ratio(50),
    borderRadius: Metrics.ratio(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  voiceMsgText: {
    fontSize: Metrics.ratio(16),
    marginTop: Metrics.ratio(8),
  },
  recorderContainer: {
    height: Metrics.ratio(50),
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Metrics.ratio(8),
  },
  recorderTimeText: {
    color: '#777',
    fontSize: Metrics.ratio(16),
  },
  recorderBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
