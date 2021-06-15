import React, {useRef, useState, useEffect} from 'react';

import {
  Text,
  ScrollView,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import Feather from 'react-native-vector-icons/Ionicons';

import {
  Header,
  GoBackHeader,
  ActivityIndicator,
  Footer,
  ItemNotFound,
} from '../../components';
import {useDropDown} from '../../components/Toast';
import {unfriend_by_id} from '../../config/WebServices';
import {deleteResource} from '../../config/simpleApiCall';
import {request as friendListRequest} from '../../redux/actions/FriendList';
import {Fonts, Images, Metrics, Colors} from '../../theme';
import styles from './style';
import {searchItems} from '../../services/genericFunctions';

const data = [
  {
    type: 'Handler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
  },
  {
    type: 'Handler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 0,
  },
  {
    type: 'Handler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
  },
  {
    type: 'Handler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
  },
  {
    type: 'John',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 0,
  },
  {
    type: 'Handler',
    name: 'Margje Jutter Toronto, Ontario',
    image: Images.FriendsImage,
    status: 1,
  },
];

const AddFriend = (props) => {
  const dispatch = useDispatch();

  const [searchedData, setSearchData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState();

  const inputRef = useRef(null);
  const friendRef = useRef(friendListResponse?.data?.data);

  const {ref} = useDropDown();

  const userToken = useSelector((state) => {
    return state.login?.data?.accessToken;
  });

  const friendListResponse = useSelector((state) => {
    // setSearchData(friendListResponse?.data?.data);
    return state.friendList;
  });

  const isConnected = useSelector(
    (state) => state.networkInfo.isNetworkConnected,
  );

  useEffect(() => {
    dispatch(friendListRequest({token: userToken}));
  }, [isConnected]);

  useEffect(() => {
    if (friendListResponse?.failure && !friendListResponse.isFetching) {
      // createRef.toastRef.show(faqsResponse.errorMessage);
    }
  }, [friendListResponse]);

  const handleUnfriend = async (selected_friend) => {
    setLoading(true);
    try {
      const deleted_resp = await deleteResource(
        unfriend_by_id(selected_friend?.id),
        userToken,
        {},
      );
      setLoading(false);
      dispatch(friendListRequest({token: userToken}));
    } catch (error) {
      setLoading(false);
      ref.current.alertWithType('error', 'Error', error);
    }
  };

  const friendListMethod = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          marginVertical: Metrics.ratio(10),
          justifyContent: 'space-evenly',
          paddingHorizontal: Metrics.ratio(15),
        }}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <TouchableOpacity style={{justifyContent: 'center'}}>
            {/* <Image
              source={
                item?.usersdetails
                  ? {uri: item?.usersdetails}
                  : Images.logoProfile
              }
              style={
                !item?.usersdetails
                  ? {
                      ...styles.rounderIcon,
                      borderWidth: item?.usersdetails ? 2 : 0,
                      borderRadius: item?.usersdetails ? 200 : 0,
                    }
                  : {
                      flex: 1,
                      borderWidth: item?.usersdetails ? 2 : 0,
                      borderRadius: item?.usersdetails ? 200 : 0,
                    }
              }
              resizeMode={item?.usersdetails ? 'cover' : 'contain'}
            /> */}
            <Image
              style={{
                width: 55,
                height: 55,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 40,
              }}
              onLoadEnd={console.log('image loaded')}
              source={
                item?.usersdetails?.imagePath
                  ? {uri: item?.usersdetails?.imagePath}
                  : Images.questionMark
              }
            />
          </TouchableOpacity>
          <View style={{flex: 0.9, marginLeft: Metrics.ratio(15)}}>
            <Text
              style={{
                fontFamily: Fonts.type.ArialBold,
                fontSize: Fonts.size.small,
                color: 'black',
              }}>
              {item?.userName}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: Fonts.type.Arial,
                fontSize: Fonts.size.Xsmall,
              }}>
              {item?.usersdetails?.firstName} {item?.usersdetails?.lastName}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                fontFamily: Fonts.type.Arial,
                fontSize: Fonts.size.thirteen,
              }}>
              {item?.usersdetails?.city} {item?.usersdetails?.country}
            </Text>
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: item.status == 1 ? '#3FA9F5' : '#8F93A2',
              backgroundColor: '#3FA9F5',
              borderRadius: Metrics.ratio(23),
              height: Metrics.ratio(36),
              width: Metrics.ratio(116.6),
            }}
            onPress={
              () => handleUnfriend(item)
              // deleteResource()
              // console.log('IIIIIIIIIIIIIIIIIIII', item)}
            }>
            <Text
              style={{
                fontFamily: Fonts.type.ArialBold,
                fontSize: Fonts.size.xxSmall,
                color: 'white',
              }}>
              UNFRIEND
              {/* {item.status ? 'UNFRIEND' : 'UNFRIENDED'} */}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const filterFriend = () => {
    if (
      friendListResponse.data?.data &&
      friendListResponse?.data?.data.length &&
      searchedData.length
    ) {
      return {
        showMsg: false,
        showFilterData: true,
        showAllFriend: false,
      };
    } else if (
      friendListResponse.data?.data &&
      friendListResponse?.data?.data.length &&
      !searchedData.length
    ) {
      return {
        showMsg: false,
        showFilterData: false,
        showAllFriend: true,
      };
    } else if (
      friendListResponse.data?.data &&
      friendListResponse?.data?.data.length &&
      !searchedData.length &&
      inputRef.current.value
    ) {
      return {
        showMsg: true,
        showFilterData: false,
        showAllFriend: false,
      };
    }
  };

  return (
    <Footer route={props?.route?.name}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <GoBackHeader heading="Friend List" goBack={props.navigation.goBack} />
        <ActivityIndicator
          isLoading={friendListResponse?.isFetching || loading}
          size="large"
          color={Colors.primary}
        />

        <TouchableWithoutFeedback
          onPress={() => {
            inputRef.current.focus();
          }}>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 200,
              height: Metrics.screenHeight * 0.06,
              alignItems: 'center',
              flexDirection: 'row',
              elevation: 2,
              width: Metrics.screenWidth * 0.9,
              alignSelf: 'center',
              marginBottom: Metrics.ratio(25),
              backgroundColor: 'white',
            }}>
            <Feather
              name="md-search"
              size={24}
              color="#BBBBBB"
              style={{marginLeft: 10}}
            />
            <TextInput
              placeholder="Search by Handler or Name"
              style={{
                fontStyle: 'italic',
                marginLeft: 10,
                color: '#BBBBBB',
                fontSize: Metrics.ratio(12),
              }}
              ref={inputRef}
              onChangeText={(e) => {
                // friendListResponse?.data?.data
                let info = searchItems(
                  friendListResponse?.data?.data,
                  ['userName'],
                  e,
                );

                setSearchData(info);
                let dataInfo = filterFriend();
                setShowMessage(dataInfo);
              }}
            />
          </View>
        </TouchableWithoutFeedback>
        {(friendListResponse.data?.data &&
          friendListResponse?.data?.data.length) ||
        searchedData.length ? (
          <FlatList
            data={
              searchedData.length
                ? searchedData
                : friendListResponse?.data?.data
            }
            renderItem={friendListMethod}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <ItemNotFound heading="No Friend Found!" />
        )}
      </View>
    </Footer>
  );
};
export default AddFriend;
