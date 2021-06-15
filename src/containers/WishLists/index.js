import React from 'react';
import {
  View,
  FlatList,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Images, Metrics, Fonts} from '../../theme';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Footer, GoBackHeader, MerchantProductDetail} from '../../components';

const wishList = [
  {
    name: 'Cagarny 6820 Male Watch Cagarny 6820 h',
    value: 'x3',
    sub: 'Category 4420 Male',
    place: 'China Wirehouse Only',
    status: 'disliked',
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
    freeDelivery: true,
    crubSideDelivery: true,
    likes: 0,
    id: 11111,
  },
];
// {
//     type: "Free Local delivery",
//     img: Images.FreeDelivery
// },
const WishList = (props) => {
  const handleLikes = () => {
    console.log('working on likes');
  };

  return (
    <Footer route={props?.route?.name}>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <GoBackHeader heading="Wish List" goBack={props.navigation.goBack} />
        <FlatList
          contentContainerStyle={{
            paddingBottom: Metrics.screenHeight * 0.09,
          }}
          data={wishList}
          renderItem={(data, index) => (
            <MerchantProductDetail
              navigation={props.navigation}
              navigation={props.navigation}
              data={data?.item}
              index={index}
              handleLikes={handleLikes}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </Footer>
  );
};

export default WishList;
