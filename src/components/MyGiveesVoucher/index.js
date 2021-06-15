import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

import styles from './style';
import { Images, Fonts, Metrics } from '../../theme';

const MyGiveesVoucher = (props) => {
  const {
    MygiveesImg,
    VoucherName,
    VoucherCategory,
    VoucherAddress,
    AcceptPedding,
    SenderName,
    ExpiryDate,
    Phone,
    Status,
    freeDelivery,
    crubSideDelivery,
  } = props.data;

  return (
    <ScrollView>
      <View style={styles.cartBackground}>
        {(crubSideDelivery || freeDelivery) && (
          <View style={styles.deliveryContent}>
            {freeDelivery && (
              <TouchableOpacity style={styles.optionViewStyle}>
                <Text style={styles.Optiontextstyle}>
                  <Image
                    style={{
                      height: Metrics.ratio(9),
                      width: Metrics.ratio(14),
                    }}
                    resizeMode="contain"
                    source={Images.FreeDeliveryWhite}
                  />{' '}
                  Free Local Delivery
                </Text>
              </TouchableOpacity>
            )}
            {crubSideDelivery && (
              <TouchableOpacity style={styles.optionViewStyle}>
                <Text style={styles.Optiontextstyle}>
                  <Image source={Images.CurbSidePickUpWhite} />
                  {'  Curbside Pickup'}
                </Text>
              </TouchableOpacity>
            )}
          </View>
        )}

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View>
            <Image style={styles.ProductImgStyle} source={MygiveesImg} />
          </View>

          <View style={styles.ContentView}>
            <Text style={styles.VoucherName}>{VoucherName}</Text>
            <Text style={styles.CategoryName}>{VoucherCategory}</Text>
            <Text style={styles.WireHouseStyle}>{VoucherAddress}</Text>
            {Phone == 'Visible' ? (
              <Text style={styles.WireHouseStyle}>+1-123-123-1234</Text>
            ) : null}

            {AcceptPedding == 'True' ? (
              <TouchableOpacity style={styles.acceptbtnCart}>
                <Text style={styles.acceptbtnCartText}>Accepted</Text>
              </TouchableOpacity>
            ) : AcceptPedding == 'False' ? (
              <TouchableOpacity
                style={{
                  ...styles.acceptbtnCart,
                  ...{
                    backgroundColor: '#3B3B3B',
                  },
                }}>
                <Text style={styles.acceptbtnCartText}>Pending</Text>
              </TouchableOpacity>
            ) : null}

            {SenderName == 'True' ? (
              <View style={styles.ViewSentIcon}>
                <Text style={styles.profileSend}>Sent By:</Text>
                <Image style={styles.userSentIcon} source={Images.coffe} />
                <Text
                  style={{
                    ...styles.profileSend,
                    fontSize: Fonts.size.ten,
                    fontFamily: Fonts.type.ArialBold,
                  }}>
                  {' '}
                  John Smith
                </Text>
              </View>
            ) : null}
            <Text style={styles.ExpiryStyle}>{ExpiryDate}</Text>
          </View>
        </View>
        <View style={styles.qrView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('QRCodeGenerator')}>
            <Image source={Images.QRCodeCart} />
          </TouchableOpacity>
        </View>

        <View style={styles.statusView}>
          {Status == '1' ? (
            <View style={styles.btnMyGiveesView}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('RedeemGivees')}
                style={styles.btnMyGivees}>
                <Text style={styles.btnMyGiveesText}>REDEEM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('ShareGivees')}
                style={styles.btnMyGiveesGive}>
                <Text style={styles.btnMyGiveesText}>GIVE</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.btnMyGiveesView}>
              <TouchableOpacity onPress={() => props.navigation.navigate('ReceiverVoucher')}
                style={{
                  ...styles.btnMyGivees,
                  ...{
                    backgroundColor: '#EF4040',
                  },
                }}>
                <Text style={styles.btnMyGiveesText}>DECLINE</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => props.navigation.navigate('ReceiverVoucher')}
                style={{
                  ...styles.btnMyGiveesGive,
                  ...{
                    backgroundColor: '#25E866',
                  },
                }}>
                <Text style={styles.btnMyGiveesText}>ACCEPT</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default MyGiveesVoucher;
