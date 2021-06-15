import React, {useCallback, useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Platform,
  Image,
  Linking,
  Alert,
} from 'react-native';

import Toast, {DURATION} from 'react-native-easy-toast';
import {getResourceWithToken, getResources} from '../../config/simpleApiCall';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';

import RangeSlider from '../../services/customPackages/rn-range-slider';
import {Fonts, Metrics, Images, Colors} from '../../theme';
import styles from './style';
import {
  Header,
  Carousel,
  MerchantProductDetail,
  ActivityIndicator,
  Footer,
  ItemNotFound,
} from '../../components';
import {initializeToken} from '../../config/WebServices';
import {request as LogoutRequest} from '../../redux/actions/authActions/Logout';
import {handleLikes} from '../../services/genericFunctions';
import {
  authenticate_home,
  not_authenticate_home,
} from '../../config/WebServices';
import {addToCart} from '../../redux/actions/cartActions/Cart';

const data = [
  {
    spacer: 'spacer',
  },
  {
    name: 'The Collector Place',
    title: 'Pokémon Card Pack',
    days: 'From @johndoe',
    image: Images.coffe,
    status: 'ACCEPT / DECLINE',
  },
  {
    name: 'The Coffee Shop',
    title: '12 oz Coffee',
    days: '5 Days Left',
    image: Images.BannerForget,
    status: 'GIVE / REDEEM',
  },
  {
    name: 'The Coffee Shop',
    title: '12 oz Coffee',
    days: '5 Days Left',
    image: Images.BannerForget,
    status: 'GIVE / REDEEM',
  },
  {
    name: 'The Coffee Shop',
    title: '12 oz Coffee',
    days: '5 Days Left',
    image: Images.BannerForget,
    status: 'GIVE / REDEEM',
  },
  {
    spacer: 'spacer',
  },
];

const offers = [
  {
    img: Images.BannerImage1,
    off: 20,
    price: 1220,
    title: 'Promotional Shoes',
    offerTime: 'Limited Offer',
  },
  {
    img: Images.BannerImage2,
    off: 0,
    price: 0,
    title: 'Promotional Makeup',
  },
  {
    img: Images.BannerImage3,
    off: 50,
    price: 5000,
    title: 'Promotional Test',
  },
];

const MyGivees = (props) => {
  const createRef = {
    toastRef: useRef(null),
  };

  const navigation = useNavigation();
  const {dangerouslyGetState} = useNavigation();
  const {index, routes} = dangerouslyGetState();

  const dispatch = useDispatch();
  const notAuthRes = useSelector((state) => state.home?.data);
  const isConnected = useSelector(
    (state) => state.networkInfo.isNetworkConnected,
  );

  const current_user_token = useSelector(
    (state) => state.login.data.accessToken,
  );

  const cartResponse = useSelector((state) => {
    return state.cart.data;
  });

  const handleLinkPress = async (url) => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported && url) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    }
  };

  useEffect(() => {
    // dispatch(homeRequestNoAuth({}));
  }, [isConnected]);

  const [wishList, setwishList] = useState([
    {
      name: 'Cagarny 6820 Male Watch',
      value: 'x3',
      sub: 'Category 4420 Male Quarta ',
      place: 'China Wirehouse Only',
      status: 0,
      freeDelivery: true,
      crubSideDelivery: true,
      likes: 0,
      id: 1,
    },
    {
      name: 'Cagarny 6820 Male Watch ',
      value: 'x3',
      sub: 'Category 4420 Male Quarta Watach',
      place: 'China Wirehouse Only',
      status: 0,
      freeDelivery: false,
      crubSideDelivery: true,
      likes: 0,
      id: 11,
    },
    {
      name: 'Cagarny 6820 Male Watch',
      value: 'x3',
      sub: 'Category 4420 Male Quarta Watach',
      place: 'China Wirehouse Only',
      status: 0,
      freeDelivery: true,
      crubSideDelivery: false,
      likes: 4,
      id: 1111,
    },
    {
      name: 'Cagarny 6820 Male Watch',
      value: 'x3',
      sub: 'Category 4420 Male Quarta Watach',
      place: 'China Wirehouse Only',
      status: 0,
      freeDelivery: true,
      crubSideDelivery: true,
      likes: 0,
      id: 11111,
    },
  ]);
  const [sortedItem, setSortedItem] = useState(null);
  const [authenticate_user, setAuthenticate_user] = useState(false);
  const [appBanners, setAppBanners] = useState([]);
  const [campaign, setCampaign] = useState([]);
  const [status, setStatus] = useState('dislike');
  const [loader, setLoader] = useState(true);
  const [loading, setLoading] = useState(true);
  const [likeArray, setLikeArray] = useState([]);
  const [vouchers, setVouchers] = useState([]);

  const handleLike = (item, index) => {
    handleLikes(item, index, likeArray, setLikeArray, wishList, setwishList, [
      wishList[index].likes,
    ]);
  };

  const handleCart = (selected_data) => {
    dispatch(addToCart(cartResponse, selected_data));
  };

  const loginResponse = useSelector((state) => {
    if (state.login?.data?.data) {
      // setProfileImage(state.login?.data?.data[0]?.imgs.imageUrl);
      return state.login?.data?.data[0]?.imgs?.imageUrl;
    } else false;
    // return false;
  });

  const loginData = useSelector((state) => {
    if (state.login?.data) {
      // console.log(`state.login?.data  `, state.login?.data);
      return state.login?.data?.data ? true : true;
    }
  });

  const logoutResponse = useSelector((state) => {
    return state.logout;
  });

  const loginTokenResponse = useSelector((state) => {
    if (state.login?.data?.accessToken) {
      return true;
    } else false;
  });

  useEffect(() => {
    initializeToken().then((user_token) => {
      if (user_token && current_user_token) {
        getResourceWithToken(authenticate_home, user_token)
          .then((res) => {
            setLoader(false);
            setCampaign(res.campaigns);
            setAppBanners(res.appBanners);
            setLoading(false);
            setVouchers(res.receivedVouchers);
            setAuthenticate_user(true);
          })

          .catch((error) => {
            setLoader(false);
            setLoading(false);
            if (error?.sessionExpired) {
              Alert.alert('Error', error.message, [
                {
                  text: 'OK',
                  onPress: () => {
                    dispatch(LogoutRequest(user_token));
                  },
                },
              ]);
            }
          });
      } else {
        getResources(not_authenticate_home)
          .then((res) => {
            setLoader(false);
            setCampaign(res.campaigns);
            setAppBanners(res.appBanners);
            setLoading(false);
            setAuthenticate_user(false);
          })

          .catch((error) => {
            setLoader(false);
            setLoading(false);
          });
      }

      setLoader(false);
    });
  }, [isConnected, current_user_token]);

  useEffect(() => {
    logoutResponse.failure === true && logoutResponse.isFetching === false
      ? createRef.toastRef.show(logoutResponse.errorMessage)
      : null;
  }, [logoutResponse, loginData]);

  const getComments = (index) => {
    // alert(index)
    // if (activeIndex !== index) {
    // setIsLoading(true);
    // setComments([]);
    // setActiveIndex(index);
    // setTimeout(() => {
    //     console.log(data[index + 1], 'index', index);
    //     // setComments(_comments);
    //     setIsLoading(false);
    // }, 500);
    // }
  };

  const renderBanerItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{...styles.BannerCampainge}}
        onPress={() => handleLinkPress(item?.url)}>
        <Image
          resizeMode="contain"
          source={{uri: item?.imageUrl}}
          style={styles.bannerImg}
        />
      </TouchableOpacity>
    );
  };

  const Thumb = () => {
    return <View style={styles.root} />;
  };
  const Rail = () => {
    return <View style={styles.rootRail} />;
  };
  const RailSelected = () => {
    return <View style={styles.rootRailSelected} />;
  };
  const Label = ({text, ...restProps}) => {
    return (
      <View style={styles.rootLabel} {...restProps}>
        <Text style={styles.textLabel}>{text}</Text>
      </View>
    );
  };
  const Notch = (props) => {
    return <View style={styles.rootNotch} {...props} />;
  };

  const renderThumb = useCallback(() => <Thumb />, []);
  const renderRail = useCallback(() => <Rail />, []);
  const renderRailSelected = useCallback(() => <RailSelected />, []);
  const renderLabel = useCallback(
    (value) => (
      <Label text={`${value === 0 ? value : value - 50}-${value} Kilometers`} />
    ),
    [],
  );
  const renderNotch = useCallback(() => <Notch />, []);

  const handleValueChange = useCallback((low, high) => {
    // setLow(low);
    // setHigh(high);
    // console.log(`{low , high}`, { low, high });
  }, []);

  setTimeout(() => {
    setLoader(false);
  }, 1500);

  return (
    <Footer route={props?.route?.name}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ActivityIndicator
          opacity={0.85}
          isLoading={loader || loading}
          size="large"
          color={Colors.primary}
        />
        <ScrollView
          style={styles.screenContainer}
          contentContainerStyle={{paddingBottom: Metrics.screenHeight * 0.1}}
          keyboardShouldPersistTaps="always">
          <Header
            navigation={props.navigation}
            profile
            searchBar
            right
            searchBarPlaceholder="Start shopping here"
            cart={cartResponse && cartResponse.length}
            profileImage={loginResponse}
          />

          <View style={{elevation: 10}}>
            {loginTokenResponse && (
              <>
                {/* Toast */}

                <View
                  style={{
                    width: Metrics.screenWidth * 0.9,
                    alignSelf: 'center',
                    marginVertical: Metrics.ratio(10),
                    marginTop: Metrics.ratio(25),
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.type.ArialBold,
                      fontSize: Fonts.size.sixteen,
                    }}>
                    My givees
                  </Text>
                </View>

                <Carousel
                  navigation={props.navigation}
                  data={data}
                  onMomentumScrollEnd={getComments}
                  copyBtnPress={() => {}}
                  saveBtnPress={() => {}}
                  favoriteBtnPress={() => {}}
                />

                {/* <View
                  style={{
                    width: Metrics.screenWidth * 0.9,
                    alignSelf: 'center',
                    marginVertical: Metrics.ratio(10),
                    // marginTop: Metrics.ratio(25),
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontFamily: Fonts.type.ArialBold,
                      fontSize: Fonts.size.small,
                    }}>
                    Sort by Distance
                  </Text>
                  <View
                    style={{
                      justifyContent: 'center',
                      marginLeft: Metrics.ratio(5),
                    }}>
                    <AntDesign
                      name="down"
                      size={Metrics.ratio(12)}
                      color="black"
                    />
                  </View>
                </View> */}

                {/* <>
                  <RangeSlider
                    style={{height: 120, marginHorizontal: 15}}
                    gravity={'center'}
                    min={0}
                    max={1000}
                    step={50}
                    disableRange={false}
                    floatingLabel={false}
                    renderLabel={renderLabel}
                    renderThumb={renderThumb}
                    renderRail={renderRail}
                    renderRailSelected={renderRailSelected}
                    renderNotch={renderNotch}
                    lineWidth={6}
                    thumbRadius={17.5}
                    labelPadding={4}
                    rangeEnabled={false}
                    thumbBorderWidth={2}
                    selectionColor="#3df"
                    blankColor="#f618"
                    // onValueChanged={handleValueChange}
                  />
                  <View style={styles.horizontalContainer}>
                    <Text style={styles.valueText}>0 Kilometer</Text>
                    <Text style={styles.valueText}>1000 Kilometers</Text>
                  </View>
                </> */}
              </>
            )}

            {/* App banners render */}
            {!!appBanners.length && (
              <FlatList
                data={appBanners}
                renderItem={renderBanerItem}
                keyExtractor={(item) => item.id}
              />
            )}
            {/* campiagn render */}
            <FlatList
              data={campaign}
              renderItem={(data, index) => (
                <MerchantProductDetail
                  navigation={props.navigation}
                  data={data?.item}
                  index={data?.index}
                  handleLikes={handleLike}
                  handleCart={handleCart}
                />
              )}
              keyExtractor={(item) => item.id}
            />

            {!campaign.length && <ItemNotFound heading={'No Campaign Found'} />}

            {/* Below commented button is for testing Screen's Navigation */}

            {/* <TouchableOpacity
        onPress={() => props.navigation.navigate('ActivityDetails')}
        style={{
          backgroundColor: 'blue',
          borderRadius: 20,
          marginHorizontal: Metrics.screenWidth * 0.2,
          marginVertical: Metrics.screenHeight * 0.04,
        }}>
        <Text style={{ color: '#fff', alignSelf: 'center', padding: 9 }}>
          Activity Expire
        </Text>
      </TouchableOpacity> */}
          </View>
          <Toast
            ref={(toast) => (createRef.toastRef = toast)}
            style={{
              backgroundColor: 'red',
              width: '90%',
              alignItems: 'center',
            }}
            position="top"
            positionValue={10}
            // opacity={0.8}
            textStyle={{color: 'white', textAlign: 'center'}}
          />
        </ScrollView>
      </View>
    </Footer>
  );
};

export default MyGivees;
