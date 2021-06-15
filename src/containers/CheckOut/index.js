// @flow
import {connect} from 'react-redux';
import React, {useRef, useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Modal,
} from 'react-native';

import {WithLocalSvg} from 'react-native-svg';

import {
  addToCart,
  deleteFromCart,
  deleteItemFromCart,
} from '../../redux/actions/cartActions/Cart';
import {Images, Metrics, Colors, Fonts} from '../../theme';
import styles from './style';
import {strings} from '../../I18n';
import CheckOutCarts from '../../components/CheckOutCart';
import {
  PromoCodeVoucher,
  ButtonWithIcon,
  Header,
  GoBackHeader,
  Empty,
  Footer,
} from '../../components';
import {GiveesHomeStack} from '../../navigation/AppStack';

const CheckOut = (props) => {
  const [modalState, setModalState] = useState(false);
  // const [modalVisible, setModalVisible] = useState(props.state);
  const [CartData, setCartData] = useState([
    {
      id: '1',
      productName: 'Coffee 1AS',
      flavour: 'Fudge Flavour',
      status: 'Limited Edition',
      price: 0,
      initial_price: 5.3,
      productImage: Images.productImg,
    },
    {
      id: '2',
      productName: 'Coffee 2CS',
      flavour: 'Fudge Flavour',
      status: 'Limited Edition',
      price: 0,
      initial_price: 10.0,
      productImage: Images.productImg,
    },
    {
      id: '3',
      productName: 'Coffee 3CS',
      flavour: 'Fudge Flavour',
      status: 'Limited Edition',
      price: 0,
      initial_price: 1.0,
      productImage: Images.productImg,
    },
  ]);

  const removeItem = (id) => {
    var array = [...CartData];
    var index = array.map((v) => v.id).indexOf(id);
    if (index !== -1) {
      const filteredCart = CartData.filter((v) => v.id !== id);
      setCartData(filteredCart);
      console.log(filteredCart, 'filteredCart');
    }
    // console.log(index, id, 'INNNNASDASDASDSDDS');
  };

  useEffect(() => {
    console.log(`modalState`, modalState);
  }, [modalState]);

  const setModalImage = () => {
    setModalState(false);
  };

  const subTotal = CartData.reduce(
    (a, b) => a + (b.price === 0 ? b.initial_price : b.price),
    0,
  );
  const tax = 0.5;

  return (
    <Footer route={props?.route?.name}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        {/* <ImageBackground
        style={{ flex: 1 }}
        resizeMode="stretch"
      source={Images.backgroundRegister}>*/}

        <GoBackHeader heading="Checkout" goBack={props.navigation.goBack} />

        {CartData.length < 1 ? (
          <View
            style={{
              flex: 1,
              // backgroundColor: 'red',
              marginBottom: Metrics.screenHeight * 0.18,
              justifyContent: 'center',
            }}>
            <Empty message={'Cart is Empty.'} />
          </View>
        ) : (
          <>
            <ScrollView>
              <View
                style={{
                  flex: 1,
                  paddingTop: Metrics.screenHeight * 0.01,
                }}>
                {CartData.map((data, index) => {
                  return (
                    <CheckOutCarts
                      data={data}
                      removeItem={removeItem}
                      index={index}
                      setCartData={setCartData}
                      CartData={CartData}
                    />
                  );
                })}
              </View>

              <View
                style={{
                  flex: 1,
                }}>
                <View
                  style={{
                    flex: 1,
                    paddingBottom: Metrics.screenHeight * 0.09,
                  }}>
                  <View style={styles.summaryStyle}>
                    <Text style={styles.orderStyle}>Order Summary</Text>
                    <View style={styles.subTotal}>
                      <View>
                        <Text style={styles.Subtotaltextstyle}>Subtotal</Text>
                        <Text
                          style={{
                            ...styles.Subtotaltextstyle,
                            marginTop: Metrics.ratio(5),
                          }}>
                          TAX
                        </Text>
                      </View>

                      <View style={styles.priceTotal}>
                        <Text
                          style={styles.Pricetextstyle}>{`$${subTotal.toFixed(
                          2,
                        )}`}</Text>
                        <Text
                          style={{
                            ...styles.Pricetextstyle,
                            marginTop: Metrics.ratio(5),
                          }}>
                          {`$${tax}`}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.lineStyle}></View>

                    <View>
                      <Text style={styles.Totalstyle}>TOTAL</Text>
                      <Text style={styles.SubtotalPriceStyle}>{`$${(
                        subTotal + tax
                      ).toFixed(2)}`}</Text>
                      {/* <Text style={styles.DeliveryStyle}>Free Delivery</Text> */}
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    paddingBottom: Metrics.screenHeight * 0.09,
                    flex: 1,
                    justifyContent: 'flex-end',
                  }}>
                  <View
                    style={{
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      alignSelf: 'flex-end',
                      marginHorizontal: Metrics.ratio(10),
                      marginBottom: -Metrics.ratio(70),

                      // right: 0,
                    }}>
                    <TouchableOpacity onPress={() => setModalState(true)}>
                      <View
                        style={{
                          // height: 30,
                          width: '41%',
                          paddingHorizontal: '5%',
                          paddingVertical: '3%',
                          backgroundColor: '#FFAA00',
                          borderTopRightRadius: Metrics.ratio(50),
                          borderTopLeftRadius: Metrics.ratio(50),
                          borderBottomLeftRadius: Metrics.ratio(50),
                          marginRight: Metrics.ratio(10),
                          // marginBottom: -5,
                        }}>
                        <Text
                          style={{
                            textAlign: 'right',
                            color: '#fff',
                            fontFamily: Fonts.type.ArialBlackBold,
                            fontSize: Fonts.size.small,
                            paddingRight: Metrics.ratio(5),
                          }}>
                          Have Promo Code?
                        </Text>
                      </View>

                      <View
                        style={{
                          alignSelf: 'flex-end',
                          marginRight: Metrics.ratio(10),
                          marginBottom: -Metrics.ratio(12),
                          width: 0,
                          height: 0,
                          backgroundColor: 'transparent',
                          borderStyle: 'solid',
                          borderRightWidth: Metrics.ratio(8),
                          borderTopWidth: Metrics.ratio(8),
                          borderRightColor: 'transparent',
                          borderTopColor: '#FFAA00',
                          transform: [{rotate: '90deg'}],
                        }}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalState(true)}>
                      <WithLocalSvg asset={Images.promoCode} />
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity
                    style={{...styles.CheckoutBtn}}
                    onPress={() => props.navigation.navigate('PaymentMethod')}>
                    <View style={{width: '90%'}}>
                      <Text style={styles.CheckoutBtnText}>CHECKOUT</Text>
                    </View>

                    <View style={styles.CheckoutImg}>
                      <Image
                        style={{
                          width: Metrics.ratio(29),
                          height: Metrics.ratio(29),
                        }}
                        resizeMode="contain"
                        source={Images.CircleNext}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </>
        )}

        <PromoCodeVoucher
          state={modalState}
          changeState={() => setModalState(!modalState)}
        />
      </View>
    </Footer>
  );
};

export default CheckOut;
