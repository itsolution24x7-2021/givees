// @flow
import {connect, shallowEqual} from 'react-redux';
import React, {Component, useEffect, useState, useRef} from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ImageBackground,
  FlatList,
  Keyboard,
  Platform,
} from 'react-native';
import {GoBackHeader, ChatHeader} from '../../components';
import {Metrics, Fonts, Images} from '../../theme';
import styles from './style';
import Feather from 'react-native-vector-icons/Feather';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';

import {WithLocalSvg} from 'react-native-svg';

const MessageDetails = ({navigation, route}) => {
  let userId = 1;
  const {name} = route.params;
  const [sliderIndex, setSliderIndex] = useState();
  const [text, setText] = useState('');
  const [show, setShow] = useState(false);
  const [messages, setMessages] = useState([
    {
      msg:
        'Hey when are you going? Hey when are you going? Hey when are you going?',
      img: Images.FriendsImage,
      id: 1,
      time: '9.45AM',
    },
    {
      msg:
        'Wednesday, Next week Hey when are you going? Hey when are you going? Wednesday, Next week Hey when are you going? Hey when are you going?',
      img: Images.FriendsImage,
      id: 0,
      time: '9.45AM',
    },
    {
      msg:
        'Sounds perfect. I have to go through a few things,Sounds perfect. I have to go through a few things,Sounds perfect. I have to go through a few things,Sounds perfect. I have to go through a few things, then I am ready.',
      img: Images.FriendsImage,
      id: 1,
      time: '9.45AM',
    },
    {
      msg: 'Where is this place?',
      img: Images.FriendsImage,
      id: 0,
      time: '9.45AM',
    },
    {
      msg: 'Sounds perfec',
      img: Images.FriendsImage,
      id: 1,
      time: '9.45AM',
    },
    {
      msg: 'Where is this place?',
      img: Images.FriendsImage,
      id: 0,
      time: '9.45AM',
    },
    {
      msg:
        'Sounds perfect. I have to go through a few things, then I am ready.',
      img: Images.FriendsImage,
      id: 1,
      time: '9.45AM',
    },
    {
      msg: 'Where is this place?',
      img: Images.FriendsImage,
      id: 0,
      time: '9.45AM',
    },
    {
      msg:
        'Sounds perfect. I have to go through a few things, then I am ready.',
      img: Images.FriendsImage,
      id: 1,
      time: '9.45AM',
    },
    {
      msg: 'Where is this place?',
      img: Images.FriendsImage,
      id: 0,
      time: '9.45AM',
    },
  ]);

  const flatListRef = useRef();

  const renderItem = ({item}) => {
    if (item.id == userId) {
      return (
        <View style={{...styles.eachMsg}}>
          <View style={{justifyContent: 'flex-end'}}>
            <Image source={Images.FriendsImage} style={styles.userPic} />
          </View>
          <View style={styles.msgBlock}>
            {/* <Text style={{ ...styles.userName, color: '#000' }}>{`${firstName} ${lastName}`}</Text> */}
            <View style={{justifyContent: 'flex-start'}}>
              <Text style={styles.msgTxt}>{item.msg}</Text>
            </View>
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                paddingHorizontal: Metrics.ratio(8),
                flex: 1,
              }}>
              <Text
                style={[
                  styles.msgTxt,
                  {
                    fontSize: Metrics.ratio(10),
                    color: '#9F9F9F',
                    letterSpacing: 0.4,
                  },
                ]}>
                {item.time}
              </Text>
            </View>
          </View>
        </View>
      );
    } else {
      return (
        <View style={{...styles.rightMsg}}>
          <View style={styles.rightBlock}>
            {/* <Text style={{ ...styles.userName, color: '#000' }}>{`${firstName} ${lastName}`}</Text> */}
            <Text style={styles.rightTxt}>{item.msg}</Text>
            <View
              style={{
                alignItems: 'flex-end',
                paddingHorizontal: Metrics.ratio(8),
                flex: 1,
                alignSelf: 'flex-end',
              }}>
              <Text
                style={[
                  styles.rightTxt,
                  {
                    fontSize: Metrics.ratio(10),
                  },
                ]}>
                {item.time}
              </Text>
            </View>
          </View>

          <View style={{justifyContent: 'flex-end'}}>
            <Image source={Images.FriendsImage} style={styles.userPic} />
          </View>
        </View>
      );
    }
  };

  useEffect(() => {
    const emojiVersion = (() => {
      const version = parseFloat(Platform.Version);
      if (Platform.OS === 'ios') {
        return version < 13.2 ? 11 : 12.1;
      }
      if (Platform.OS === 'android') {
        return version < 29 ? 11 : 12.1;
      }
    })();
  }, [messages]);

  const sendMessage = () => {
    // alert("Cel")
    let params = {
      msg: 'This is a test message',
      img: Images.FriendsImage,
      id: 0,
      time: '9.45AM',
    };
    setMessages([...messages, params]);
    flatListRef.current.scrollToEnd({animating: true});
  };

  const onClick = (emoji) => {
    setText(text + emoji);
    // setShow(!show);
  };

  return (
    <>
      <ImageBackground
        source={Images.messageBackgroundImage}
        style={{height: null, width: null, flex: 1}}>
        <View>
          <ChatHeader heading={name} goBack={navigation.goBack} />
        </View>
        <View style={{alignItems: 'center', marginBottom: 10}}>
          <Text
            style={{
              color: '#9F9F9F',
              fontSize: Fonts.size.xxSmall,
              fontFamily: Fonts.type.Arial,
              marginTop: Metrics.ratio(5),
            }}>
            Yesterday
          </Text>
        </View>

        {/* {messages.map((message) => {})} */}

        <FlatList
          // onMomentumScrollEnd={(event) => {
          //   let sliderIndex = event.nativeEvent.contentOffset.x
          //     ? event.nativeEvent.contentOffset.x / width
          //     : 0;
          //   setSliderIndex(sliderIndex);
          //   // flatListRef.current.scrollToEnd({ animating: true });
          // }}
          style={{flex: 1}}
          ref={flatListRef}
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onContentSizeChange={() =>
            flatListRef.current.scrollToEnd({animated: true})
          }
        />
        <View
          style={{
            // height: Metrics.screenHeight * 0.055,
            alignItems: 'center',
            flexDirection: 'row',
            // marginBottom: 10,
          }}>
          <View
            style={{
              width: Metrics.screenWidth * 0.82,
              backgroundColor: 'white',
              flexDirection: 'row',
              alignItems: 'center',
              margin: Metrics.ratio(10),
              borderRadius: 200,
            }}>
            <TouchableOpacity
              style={{marginLeft: Metrics.ratio(10)}}
              onPress={() => (Keyboard.dismiss(), setShow(!show))}>
              <WithLocalSvg asset={Images.smileyEmoji} />
            </TouchableOpacity>
            <TextInput
              placeholder="Type Message Here..."
              style={{
                marginLeft: Metrics.ratio(10),
                fontFamily: Fonts.type.ArialItalic,
                fontSize: Fonts.size.ten,
                width: '88%',
              }}
              value={text}
              onChangeText={(text) => setText(text)}
              onFocus={() => setShow(false)}
            />
          </View>
          <TouchableOpacity
            style={{
              marginTop: Metrics.screenHeight * 0.01,
              flex: 1,
              alignItems: 'center',
              marginRight: Metrics.ratio(10),
            }}
            onPress={sendMessage}>
            <WithLocalSvg asset={Images.sendButton} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      {show && (
        <EmojiSelector
          onEmojiSelected={onClick}
          category={Categories.symbols}
          showSearchBar={false}
          columns={10}
          // showTabs={false}
          showSectionTitles={true}
          shouldInclude={(emoji) => {
            // console.log(`emoji.added_in`, emoji, parseInt(emoji.added_in));

            if (Platform.OS === 'android') {
              // if (parseInt(emoji.added_in) <= 4.9) {
              //   console.log(
              //     `emoji.added_in <= 4.9`,
              //     emoji.added_in,
              //     parseInt(emoji.added_in),
              //   );
              //   return emoji;
              // } else
              // console.log(
              //   `emoji.added_in`,
              //   emoji.added_in,
              //   parseInt(emoji.added_in),
              // );

              if (
                parseInt(emoji.added_in) === 0

                // parseInt(emoji.added_in) === 6.0 ||
                // parseInt(emoji.added_in) === 6.1
              ) {
                console.log(`emoji.added_in`, emoji, parseInt(emoji.added_in));

                return emoji;
              }
            }
            //  else {
            //   return emoji;
            // }
          }}
        />
      )}
    </>
  );
};

export default MessageDetails;
