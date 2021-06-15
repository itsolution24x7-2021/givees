// @flow
import { connect } from 'react-redux';
import React, { useRef, useState, useEffect } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Images, Metrics, Colors, Fonts } from '../../theme';
import styles from './style';
import { strings } from '../../I18n';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MerchantDetailCart from '../../components/MerchantDetailCart';

const GiveesReceived = ({ navigation: { navigate, goBack } }) => {
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
        storeName: 'store234',
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
    {
      id: 8,
      userName: 'mer444',
      email: 'mer444@gmail.com',
      password: '$2b$10$1mX5p1ZJoBb2btiwpjv6feNp0Z1rMxAkFUWoqlEAVv7nI3XbZAxzy',
      userType: 'custom',
      emailVerified: 1,
      otpVerified: 0,
      isBlocked: 0,
      isDelete: 0,
      createdAt: '2021-03-17T09:39:04.000Z',
      updatedAt: '2021-03-25T10:12:57.000Z',
      permissions: {
        id: 8,
        userId: 8,
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
        createdAt: '2021-03-17T09:39:05.000Z',
        updatedAt: '2021-03-17T09:39:05.000Z',
      },
      usersdetails: {
        id: 8,
        firstName: 'Admin ',
        lastName: 'Merchant',
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
        userId: 8,
        createdAt: '2021-03-17T09:39:05.000Z',
        updatedAt: '2021-03-17T09:39:05.000Z',
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
        id: 3,
        userId: 8,
        bussinessName: 'AdMer',
        storeName: 'Store444',
        webSiteUrl: null,
        merchantCode: 'UKTK4E8244',
        likes: 0,
        receiveNotification: 1,
        lat: '24.873880804406987',
        lng: '67.05696344375612',
        createdAt: '2021-03-17T09:39:04.000Z',
        updatedAt: '2021-03-17T09:39:04.000Z',
      },
    },
  ]);
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      {/* <ScrollView style={{flex:1}}> */}
      <View style={styles.CheckOutArrow}>
        <View>
          <TouchableOpacity onPress={() => goBack()}>
            <Image style={styles.CheckOutArrowImg} source={Images.BackArrow} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.BCampaignHeading}>Promotional</Text>
        </View>
        <View style={styles.AddTocartViewStyle}>
          <TouchableOpacity>
            <Image style={styles.AddTocartImg} source={Images.AddToCart} />
          </TouchableOpacity>
        </View>
      </View>

      <Image style={styles.BannerBGimg} source={Images.BannerCampaignBG} />
      <ScrollView>
        <View style={styles.summaryStyle}>
          <View style={styles.subTotal}>
            <View style={styles.headingCampaignName}>
              <Text style={styles.Campaigntextstyle}>sarim</Text>
            </View>

            <View style={styles.PriceView}>
              <Text style={styles.Campaigntextstyle}>$3.49</Text>
            </View>
          </View>
        </View>

        <View style={styles.summaryStyle}>
          <Text style={styles.DescriptionDetailStyle}>
            Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit sed tu
            es conor Lorem Ipsum Dolor amit sed tu es conor Lorem Ipsum Dolor
            amit sed tu es conor...
          </Text>
        </View>

        <View style={styles.OptionView}>
          <TouchableOpacity
            style={styles.FreeDeliveryOpacity}
            onPress={() => navigate('Delivery')}>
            <Text style={styles.Optiontextstyle}>
              <Image style={styles.icondelivery} source={Images.FreeDelivery} />{' '}
              Free Local Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.FreeDeliveryOpacity}
            onPress={() => navigate('VoucherDetail')}>
            <Text style={styles.Optiontextstyle}>
              <Image style={styles.icondelivery} source={Images.CurbSide} />{' '}
              Curbside Pickup
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View style={styles.summaryStyle}>
        <View style={styles.DetailBox}>
          <Text style={styles.DetailBoxText}>
            <View style={styles.dottStyle}></View> Category 9211 Male Sport
            Shoes
          </Text>
          <Text style={styles.DetailBoxText}>
            <View style={styles.dottStyle}></View> Merchant Name
          </Text>
          <Text style={styles.DetailBoxText}>
            <View style={styles.dottStyle}></View> Description of the product
          </Text>
        </View>
      </View> */}

        {MerchantCartData.map((data, index) => {
          console.log(data, 'dtat');
          return (
            <MerchantDetailCart
              navigation={navigation}
              data={MerchantCartData}
              index={index}
              index={index}
              setStateData={setCartData}
              stateData={MerchantCartData}
            />
          );
        })}

        <View style={{ justifyContent: 'flex-end', flex: 1, marginTop: 15 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <TouchableOpacity
              style={styles.CheckoutBtn}
              onPress={() => navigate('AddCreditCard')}>
              <View style={{ justifyContent: 'center' }}>
                <Text style={styles.CheckoutBtnText}>ADD TO CART</Text>
              </View>

              <View style={styles.CheckoutImg}>
                <Image resizeMode="contain" source={Images.btnCart} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ShoppingBtn}
              onPress={() => navigate('checkOut')}>
              <Text style={styles.ShoppingBtnText}>CONTINUE SHOPPING</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default GiveesReceived;
