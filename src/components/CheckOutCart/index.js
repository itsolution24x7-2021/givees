import {connect} from 'react-redux';
import React, {useRef, useState, useEffect} from 'react';

import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';

import {Images, Metrics, Colors, Fonts} from '../../theme';
import styles from './style';
import {strings} from '../../I18n';

import {useDispatch, useSelector} from 'react-redux';

import {
  addToCart,
  deleteFromCart,
  deleteItemFromCart,
} from '../../redux/actions/cartActions/Cart';

const CheckOutCart = ({data, removeItem, index, CartData, setCartData}) => {
  const dispatch = useDispatch();

  const cartResponse = useSelector((state) => {
    return state.cart.data;
  });

  const {
    productName,
    flavour,
    status,
    price,
    productImage,
    id,
    initial_price,
  } = data;

  const [count, setCount] = useState(1);
  const [totalAmount, setTotalAmount] = useState(
    !price ? initial_price : price,
  );
  const reduceCount = () => {
    // dispatch(deleteItemFromCart(cartResponse, data));
    if (count > 1) {
      setCount(count - 1);
      updateItemPrice('subtract');
    } else {
      // alert('cannot be 0');
    }
  };

  useEffect(() => {
    // console.log(`price`, price);
    setTotalAmount(price === 0 ? initial_price : price);
  }, [count, price]);

  const updateItemPrice = (status) => {
    let duplicate = [...CartData];
    duplicate[index] = {
      ...CartData[index],
      price:
        status === 'add'
          ? price === 0
            ? price + initial_price * 2
            : price + initial_price
          : price - initial_price,
    };
    setCartData(duplicate);
  };

  return (
    <View style={styles.cartBackground}>
      <Image style={styles.ProductImgStyle} source={productImage} />

      <View style={styles.detailCart}>
        <View>
          <Text style={styles.productName}>
            {productName}
            <Text style={styles.multiText}> x{count}</Text>
          </Text>
        </View>
        <View style={styles.cartPrice}>
          <View>
            <Text style={styles.productStock}>{flavour}</Text>
            <Text style={styles.productStock}>{status}</Text>
          </View>

          <Text style={styles.productPrice}>${totalAmount.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.iconStyles}>
        <TouchableOpacity
          onPress={() =>
            // removeItem(id), dispatch(deleteFromCart(cartResponse, data))
            removeItem(id)
          }>
          <Image style={styles.closeIcon} source={Images.CrossIcon} />
        </TouchableOpacity>
        <View style={styles.QuantityIcon}>
          <View style={styles.PMIcon}>
            <TouchableOpacity onPress={reduceCount}>
              <Image style={styles.IconCount} source={Images.MinusIcon} />
            </TouchableOpacity>
            <Text style={styles.textCount}>{count}</Text>
            <TouchableOpacity
              onPress={() => {
                console.log('data@@@@@@@@@@@@', {cartResponse, data});
                // setCount(count + 1), dispatch(addToCart(cartResponse, data));
                setCount(count + 1);
                updateItemPrice('add');
                dispatch(addToCart(cartResponse, data));
              }}>
              <Image style={styles.IconCount} source={Images.PlusIcon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckOutCart;
