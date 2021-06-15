// @flow
import {connect} from 'react-redux';
import React, {useRef, useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Images, Metrics, Colors, Fonts} from '../../theme';
import styles from './style';
import {WithLocalSvg} from 'react-native-svg';
import AcceptModal from '../../components/AcceptModal';

import {Footer} from "../../components"

const ReceiverVoucher = (props) => {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState('');

  const modalStateChange = () => {
    setModal(false);
  };

  const openModal = (type) => {
    setType(type);
    setModal(true);
  };

  return (
    <Footer route={props?.route?.name}>
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: Metrics.screenHeight * 0.09,
      }}>
      {/* <ScrollView style={{flex:1}}> */}

      <View style={{height: Metrics.screenHeight * 0.35}}>
        <Image style={styles.BannerBGimg} source={Images.WatchCampaignBG} />

        <View style={styles.headerContainer}>
          <View style={styles.CheckOutArrow}>
            <View>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                {/* <Image
                  style={styles.CheckOutArrowImg}
                  source={Images.BackArrow}
                /> */}

                <View style={styles.CheckOutArrowImg}>
                  <WithLocalSvg asset={Images.BackArrowSvg} />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.TagstyleView}>
            <Text style={styles.TagstyleText}>
              You have been sent a givees!
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={styles.summaryStyle}>
            <View style={styles.subTotal}>
              <View style={styles.headingCampaignName}>
                <Text style={styles.Campaigntextstyle}>
                  Cagarny 6820 Male Watch (Bundle of two)
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.summaryStyle}>
            <Text style={styles.DescriptionDetailStyle}>
              Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit sed
              tu es conor Lorem Ipsum Dolor amit sed tu es conor Lorem Ipsum
              Dolor amit sed tu es conor...
            </Text>
          </View>

          <View style={styles.summaryStyle}>
            <View style={styles.OptionView}>
              <TouchableOpacity
                style={styles.FreeDeliveryOpacity}
                onPress={() => props.navigation.navigate('Delivery')}>
                <Text
                  style={{
                    ...styles.Optiontextstyle,
                    fontSize: Fonts.size.twelve,
                  }}>
                  <Image
                    style={styles.icondelivery}
                    source={Images.FreeDelivery}
                  />{' '}
                  Free Local Delivery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.FreeDeliveryOpacity}
                onPress={() => props.navigation.navigate('VoucherDetail')}>
                <Text
                  style={{
                    ...styles.Optiontextstyle,
                    fontSize: Fonts.size.twelve,
                  }}>
                  <Image style={styles.icondelivery} source={Images.CurbSide} />{' '}
                  Curbside Pickup
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.expiryDateStyle}>
              Expiry Date: Dec. 1, 2020
            </Text>
          </View>

          <View style={styles.summaryStyle}>
            <Text style={styles.sendFromText}>Sent From:</Text>
            <View style={styles.cartBackground}>
              <Image style={styles.ProductImgStyle} source={Images.coffe} />

              <View style={styles.detailCart}>
                <View style={{marginTop: Metrics.screenHeight * 0.02}}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.FrinedStyle}>Handler</Text>
                    <Text style={styles.alreadyText}>
                      {'  '}(Already Friends)
                    </Text>
                  </View>
                  <Text style={styles.NameStyle}>John Smith</Text>
                  <Text style={styles.NameStyle}>Toronto Ontario</Text>
                </View>
              </View>
            </View>

            <Text style={styles.sendFromText}>John Says:</Text>
            <Text style={styles.DescriptionDetailStyle}>
              Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit sed
              tu es conor Lorem Ipsum Dolor amit sed tu es conor Lorem Ipsum
              Dolor amit sed tu es conor...
            </Text>
          </View>

          <View style={styles.btnViewStyle}>
            <TouchableOpacity
              style={styles.ButtonStyleDECLINE}
              onPress={() => openModal('decline')}>
              <Text style={styles.ButtonStyleScanText}> DECLINE </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ButtonStyleACCEPT}
              onPress={() => openModal('accept')}>
              <Text style={styles.ButtonStyleContinuText}> ACCEPT </Text>
              <View style={styles.TrickIconView}>
                <Image
                  style={styles.TrickIcon}
                  source={Images.CircleWithTick}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <AcceptModal
          type={type}
          state={modal}
          modalStateChange={modalStateChange}
          navigation={props.navigation}
        />
      </ScrollView>
    </View>
    
    </Footer>
  );
};

export default ReceiverVoucher;
