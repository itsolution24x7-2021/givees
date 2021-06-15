// @flow
import {connect} from 'react-redux';
import React, {useRef, useState, useEffect} from 'react';
import {Text, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import {Images, Metrics, Colors, Fonts} from '../../theme';
import styles from './style';
import {strings} from '../../I18n';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MerchantDetailCart from '../../components/MerchantDetailCart';
import {CustomTextInput, Footer} from '../../components';
import QRSacanModal from '../../components/QRScanModal';
import {WithLocalSvg} from 'react-native-svg';

const VoucherDetail = (props) => {
  const [modal, setModal] = useState(null);
  const [MerchantCartData, setCartData] = useState([
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
  const modalStateChange = () => {
    setModal(!modal);
  };
  return (
    <Footer route={props?.route?.name}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          // paddingBottom: Metrics.screenHeight * 0.09,
        }}>
        {/* <ScrollView style={{flex:1}}> */}
        <View style={styles.CheckOutArrow}>
          <View>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              {/* <Image style={styles.CheckOutArrowImg} source={Images.BackArrow} /> */}

              <View style={styles.CheckOutArrowImg}>
                <WithLocalSvg asset={Images.BackArrowSvg} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <Image style={styles.BannerBGimg} source={Images.WatchCampaignBG} />
        <ScrollView>
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
            <Text
              style={{
                ...styles.DescriptionDetailStyle,
                marginBottom: Metrics.ratio(10),
              }}>
              Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit sed
              tu es conor Lorem Ipsum Dolor amit sed tu es conor Lorem Ipsum
              Dolor amit sed tu es conor...
            </Text>
          </View>

          {MerchantCartData.map((data, index) => {
            // console.log(data, 'dtat');
            return (
              <View style={{marginHorizontal: Metrics.ratio(10)}}>
                <MerchantDetailCart
                  navigation={props.navigation}
                  data={data}
                  index={index}
                  setStateData={setCartData}
                  stateData={MerchantCartData}
                />
              </View>
            );
          })}
          <View style={styles.MerchantEnterCode}>
            <Text style={styles.EnterText}>Enter Merchant Code</Text>
            <CustomTextInput
              placeholder={'Merchant Code'}
              customInputStyle={{
                height: Metrics.ratio(40),
              }}
              onSubmitRef={'ref'}
              onChangeInput={(val) => console.log(`val`, val)}
              onSubmit={(val) => console.log(`val`, val)}
            />
          </View>

          <View>
            <Text style={styles.ORText}>{strings('Auth.or')}</Text>
          </View>

          <View style={{paddingBottom: Metrics.screenHeight * 0.09}}>
            <TouchableOpacity
              style={styles.ButtonStyleScan}
              onPress={() => {
                setModal(true);
                // props.navigation.navigate('QRScanCamera');
              }}>
              <Image style={styles.ScanIcon} source={Images.QrcodeBtn} />
              <Text style={styles.ButtonStyleScanText}>
                {' '}
                SCAN STORE QR CODE{' '}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.ButtonStyleContinu}
              onPress={() =>
                props.navigation.navigate('ConfirmDelivery', {
                  message: 'ready to redeemed',
                })
              }>
              <Text style={styles.ButtonStyleContinuText}>CONTINUE</Text>
            </TouchableOpacity>
          </View>
          <View
            onStartShouldSetResponder={modalStateChange}
            onMoveShouldSetResponder={modalStateChange}>
            <QRSacanModal
              subheading="Scanning QR Code"
              state={modal}
              modalStateChange={modalStateChange}
              navigation={props.navigation}
            />
          </View>
        </ScrollView>
      </View>
    </Footer>
  );
};

export default VoucherDetail;
