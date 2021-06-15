// @flow
import React, { useState } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

import { WithLocalSvg } from 'react-native-svg';

import styles from './style';
import { Images, Metrics } from '../../theme';
import { ActivityViewAll, Footer } from '../../components';
import MerchantDetailCart from '../../components/MerchantDetailCart';

const ActivityGiven = ({ navigation, route }) => {
  const [MerchantCartData, setCartData] = useState([
    {
      id: 3,
      userName: 'mer234',
      email: 'mer234@gmail.com',
      password: '$2b$10$LaTsoaGLILMMv8VpNCHdUOjqWF4A/0os3wT8PCC42jbIOZhoGUCRO',
      userType: 'custom',
      emailVerified: 1,
      otpVerified: 0,
      isBlocked: 0,
      isDelete: 0,
      createdAt: '2021-03-17T08:54:44.000Z',
      updatedAt: '2021-03-21T19:07:49.000Z',
      permissions: {
        id: 3,
        userId: 3,
        roleId: 3,
        canCreateAdmin: 0,
        canReadAdmin: 0,
        canUpdateAdmin: 0,
        canDeleteAdmin: 0,
        canBlockAdmin: 0,
        canCreateMerchant: 0,
        canReadMerchant: 0,
        canBlockMerchant: 0,
        canUpdateMerchant: 0,
        canDeleteMerchant: 0,
        canCreateUser: 0,
        canBlockUser: 0,
        canReadUser: 0,
        canUpdateUser: 0,
        canDeleteUser: 0,
        canReadOwnAccount: 1,
        canDeleteOwnAccount: 0,
        canUpdateOwnAccount: 1,
        canCreateCampion: 0,
        canCreateProduct: 0,
        canSeeCampion: 0,
        canBlockCampion: 0,
        canChatToMerchant: 0,
        canSeeActivities: 0,
        canDeleteProduct: 0,
        canEditProduct: 0,
        canReadProduct: 0,
        canDeleteCategory: 0,
        canReadCategory: 0,
        canEditCategory: 0,
        canReadPromoCode: 0,
        canCreatePromoCode: 0,
        canEditPromoCode: 0,
        canDeletePromoCode: 0,
        canBlockPromoCode: 0,
        canBlockCategory: 0,
        canBlockProduct: 0,
        canReadVoucherHistory: 0,
        canEditVoucherHistory: 0,
        canBlockVoucherHistory: 0,
        canDeleteVoucherHistory: 0,
        canCreateVoucherHistory: 0,
        canCreateCategory: 0,
        canDeleteCampion: 0,
        canReadSubCategory: 0,
        canEditSubCategory: 0,
        canBlockSubCategory: 0,
        canDeleteSubCategory: 0,
        canCreateSubCategory: 0,
        canReadPaymentDetail: 0,
        canEditPaymentDetail: 0,
        canBlockPaymentDetail: 0,
        canDeletePaymentDetail: 0,
        canCreatePaymentDetail: 0,
        canEditCampion: 0,
        canReadTransactionDetail: 0,
        canEditTransactionDetail: 0,
        canBlockTransactionDetail: 0,
        canDeleteTransactionDetail: 0,
        canCreateTransactionDetail: 0,
        canReadSupport: 1,
        canEditSupport: 0,
        canBlockSupport: 0,
        canDeleteSupport: 0,
        canCreateSupport: 0,
        canReadTermsCondition: 0,
        canEditTermsCondition: 0,
        canBlockTermsCondition: 0,
        canDeleteTermsCondition: 0,
        canCreateTermsCondition: 0,
        canReadActivityLog: 0,
        canEditActivityLog: 0,
        canBlockActivityLog: 0,
        canDeleteActivityLog: 0,
        canCreateActivityLog: 0,
        canReadAboutUs: 0,
        canEditAboutUs: 0,
        canBlockAboutUs: 0,
        canDeleteAboutUs: 0,
        canCreateAboutUs: 0,
        canReadActionRadius: 0,
        canEditActionRadius: 0,
        canBlockActionRadius: 0,
        canDeleteActionRadius: 0,
        canCreateActionRadius: 0,
        canReadFaqs: 0,
        canEditFaqs: 0,
        canBlockFaqs: 0,
        canDeleteFaqs: 0,
        canCreateFaqs: 0,
        canReadSalesTax: 0,
        canEditSalesTax: 0,
        canBlockSalesTax: 0,
        canDeleteSalesTax: 0,
        canCreateSalesTax: 0,
        canReadPercentRate: 0,
        canEditPercentRate: 0,
        canBlockPercentRate: 0,
        canDeletePercentRate: 0,
        canCreatePercentRate: 0,
        canReadAdditionalFees: 0,
        canEditAdditionalFees: 0,
        canBlockAdditionalFees: 0,
        canDeleteAdditionalFees: 0,
        canCreateAdditionalFees: 0,
        canReadAppBanners: 0,
        canEditAppBanners: 0,
        canBlockAppBanners: 0,
        canDeleteAppBanners: 0,
        canCreateAppBanners: 0,
        canReadHowToUse: 0,
        canEditHowToUse: 0,
        canBlockHowToUse: 0,
        canDeleteHowToUse: 0,
        canCreateHowToUse: 0,
        canReadRedemptions: 0,
        canUpdateRedemptions: 0,
        canDeleteRedemptions: 0,
        canReadSale: 1,
        canUpdateSale: 0,
        canDeleteSale: 0,
        canCreateCounter: 0,
        canReadCounter: 0,
        canUpdateCounter: 0,
        createdAt: '2021-03-17T08:54:45.000Z',
        updatedAt: '2021-03-17T08:54:45.000Z',
      },
      usersdetails: {
        id: 3,
        firstName: 'new',
        lastName: 'mer234',
        address: null,
        street: null,
        country: null,
        city: null,
        state: null,
        zipCode: null,
        dob: null,
        phoneNumber: null,
        about: null,
        imagePath: null,
        gender: null,
        public_profile: 1,
        bio: null,
        userId: 3,
        createdAt: '2021-03-17T08:54:45.000Z',
        updatedAt: '2021-03-17T08:54:45.000Z',
      },
      likes: {
        id: null,
        userId: null,
        likeType: null,
        likedId: null,
        status: null,
        createdAt: null,
        updatedAt: null,
      },
      wishlists: {
        id: null,
        campaignId: null,
        userId: null,
        createdAt: null,
        updatedAt: null,
      },
      merchantDetails: {
        id: 2,
        userId: 3,
        bussinessName: 'business234',
        storeName: 'Cookie Merchant',
        webSiteUrl: null,
        merchantCode: 'ED240DRDP5',
        likes: 0,
        receiveNotification: 1,
        lat: '24.873880804406987',
        lng: '67.05696344375612',
        createdAt: '2021-03-17T08:54:45.000Z',
        updatedAt: '2021-03-17T08:54:45.000Z',
      },
    },
  ]);

  const data = [
    {
      time: '05:15 PM',
      text: 'has sent Voucher to',
      sender: 'Margje Jutter',
      reciever: 'Anna Berlin',
    },
    {
      time: '05:25 PM',
      text: 'has sent voucher to',
      sender: 'Anna Berlin',
      reciever: 'Josh Washington',
    },
  ];

  const dataExpired = [
    {
      time: '05:15 PM',
      text: 'has sent Voucher',
      sender: 'Margje Jutter',
      // reciever: 'Anna Berlin',
    },
    {
      time: '05:15 PM',
      text: 'Funko pop figure from the collector place',
      status: 'Expired',
    },
  ];

  const dataRedeemed = [
    {
      time: '05:15 PM',
      text: 'has sent Voucher to',
      sender: 'Margje Jutter',
      reciever: 'Anna Berlin',
    },
    {
      time: '05:40 PM',
      text: '12 oz. Coffee from coffee hut Redeemed in Store',
      status: 'Redeemed',
      vendor: 'Margje Jutter',
    },
  ];

  const openModal = (val) => {
    navigation.navigate('checkOut');
  };

  return (
    <Footer route={route?.name}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          paddingBottom: Metrics.screenHeight * 0.09,
        }}>
        <View style={{ height: Metrics.screenHeight * 0.3 }}>
          <Image style={styles.BackgroundStyle} source={Images.BannerCup} />

          <View style={styles.CheckOutArrow}>
            <View>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.CheckOutArrowImg}>
                  <WithLocalSvg asset={Images.BackArrowSvg} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <ScrollView>
          <View
            style={{
              width: Metrics.screenWidth * 0.9,
              alignSelf: 'center',
            }}>
            <View style={styles.summaryStyle}>
              <View style={styles.headingCampaignName}>
                <Text style={styles.Campaigntextstyle}>
                  {route?.params?.status === 'expired' ||
                    route?.params?.status === 'redeemed'
                    ? 'Funko Pop Figure'
                    : '12 oz. Coffee'}
                </Text>
              </View>
            </View>

            <View style={styles.summaryStyle}>
              <Text style={styles.DescriptionDetailStyle}>
                Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit
                sed tu es conor Lorem Ipsum Dolor amit sed tu es conor Lorem
                Ipsum Dolor amit sed tu es conor...
              </Text>
            </View>

            <View style={styles.OptionView}>
              <TouchableOpacity
                style={styles.FreeDeliveryOpacity}
                onPress={() => navigation.navigate('Delivery')}>
                <Text style={styles.Optiontextstyle}>
                  <Image
                    style={styles.icondelivery}
                    source={Images.FreeDelivery}
                  />{' '}
                  Free Local Delivery
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.FreeDeliveryOpacity}
                onPress={() => navigation.navigate('VoucherDetail')}>
                <Text style={styles.Optiontextstyle}>
                  <Image style={styles.icondelivery} source={Images.CurbSide} />{' '}
                  Curbside Pickup
                </Text>
              </TouchableOpacity>
            </View>

            {(route?.params?.status === 'pending' ||
              route?.params?.status === 'accepted' ||
              route?.params?.status === 'received') && (
                <>
                  {MerchantCartData.map((data, index) => {
                    return (
                      <MerchantDetailCart
                        navigation={navigation}
                        data={data}
                        index={index}
                        setStateData={setCartData}
                        stateData={MerchantCartData}
                      />
                    );
                  })}
                </>
              )}

            {(route?.params?.status === 'pending' ||
              route?.params?.status === 'accepted' ||
              route?.params?.status === 'received') && (
                <View>
                  {(route?.params?.status === 'pending' ||
                    route?.params?.status === 'received') && (
                      <Text
                        style={{
                          ...styles.FrinedStyle,
                          marginTop: Metrics.screenHeight * 0.005,
                        }}>
                        {route?.params?.status === 'pending'
                          ? 'Receiver Details'
                          : 'Sender Details'}
                      </Text>
                    )}

                  <View
                    style={{
                      ...styles.cartBackground,
                      marginTop:
                        route?.params?.status === 'pending'
                          ? Metrics.screenHeight * 0.005
                          : Metrics.screenHeight * 0.01,
                    }}>
                    <Image
                      style={styles.ProductImgStyle}
                      source={Images.NotificationScreenIcon}
                    />

                    <View style={styles.detailCart}>
                      <View style={{}}>
                        <View
                          style={{ flexDirection: 'row', alignItems: 'center' }}>
                          <Text style={styles.FrinedStyle}>Handler</Text>
                          <Text style={styles.alreadyText}>
                            {'  '}(Already Friends)
                        </Text>
                        </View>
                        <Text style={styles.NameStyle}>Margje Jutter</Text>
                        <Text style={styles.NameStyle}>
                          {route?.params?.status === 'accepted'
                            ? 'Accepted at : 09/12/2020 09:22 AM'
                            : route?.params?.status === 'pending'
                              ? 'Status: Pending'
                              : route?.params?.status === 'received' &&
                              'Toronto, Ontario'}
                        </Text>
                      </View>
                    </View>
                  </View>

                  {route?.params?.status === 'accepted' && (
                    <>
                      <Text style={styles.sendFromText}>Note:</Text>
                      <Text style={styles.DescriptionDetailStyle}>
                        Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor
                        amit sed tu es conor Lorem Ipsum Dolor amit sed tu es
                        conor Lorem Ipsum Dolor amit sed tu es conor...
                    </Text>
                    </>
                  )}
                </View>
              )}
            <View
              style={{
                marginTop:
                  route?.params?.status === 'expired' ||
                    route?.params?.status === 'redeemed'
                    ? Metrics.ratio(0)
                    : Metrics.ratio(30),
              }}>
              {route?.params?.status === 'accepted' ? (
                <ActivityViewAll data={data} />
              ) : route?.params?.status === 'pending' ? (
                <View>
                  <Text style={styles.descriptionText2}>
                    Margje Jutter has not yet responded to your givees, do you
                    wish to cancel your offer?
                  </Text>
                  <View style={styles.btnView}>
                    <TouchableOpacity
                      style={styles.cancelBtn}
                      onPress={() => navigation.navigate('PurchasedVouchers')}
                    >
                      <Text style={styles.cancelBtnText}>YES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.redeemBtn}
                      onPress={() => navigation.goBack()}
                    >
                      <Text style={styles.redeemBtnText}>NOT NOW</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : route?.params?.status === 'expired' ? (
                <View
                  style={{
                    marginTop: Metrics.ratio(20),
                  }}>
                  <ActivityViewAll data={dataExpired} />
                </View>
              ) : route?.params?.status === 'redeemed' ? (
                <View
                  style={{
                    marginTop: Metrics.ratio(20),
                  }}>
                  <ActivityViewAll data={dataRedeemed} />
                  <Text style={styles.redeemDeliveryText}>
                    Redeemed through Delivery
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        </ScrollView>
      </View>
    </Footer>
  );
};

export default ActivityGiven;
