import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, CheckBox, } from 'react-native';
import { Images, Metrics } from '../../theme';

import { WithLocalSvg } from 'react-native-svg';
import Feather from 'react-native-vector-icons/Feather';

import styles from './style';
import { Footer } from '../../components';
import MerchantDetailCart from '../../components/MerchantDetailCart';
import { Timer } from '../../services/customPackages/react-native-flip-timer/src';

const ConfirmDelivery = (props) => {
  const [confirmRedeem, setConfirmRedeem] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [readyRedeemed, setReadyRedeemed] = useState(false);
  const [timer, setTimer] = useState(false);

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
  ]);
  return (
    <Footer route={props?.route?.name}>
      <View
        style={{
          backgroundColor: 'white',
          flex: 1,
          paddingBottom: Metrics.screenHeight * 0.09,
        }}>
        <View style={{ height: Metrics.screenHeight * 0.3 }}>
          <Image style={styles.BannerBGimg} source={Images.WatchCampaignBG} />

          <View style={styles.headerContainer}>
            <View style={{ marginVertical: Metrics.screenHeight * 0.04 }}>
              <View>
                <TouchableOpacity onPress={() => props.navigation.goBack()}>
                  <View style={styles.CheckOutArrowImg}>
                    <WithLocalSvg asset={Images.BackArrowSvg} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {(confirmRedeem || readyRedeemed) && (
              <View style={styles.TagstyleView}>
                <Text style={styles.TagstyleText}>REDEEMED</Text>
              </View>
            )}
          </View>
        </View>
        {/* <View style={styles.CheckOutArrow}>
        <View>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>

            <View style={styles.CheckOutArrowImg}>
              <WithLocalSvg asset={Images.BackArrowSvg} />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Image style={styles.BannerBGimg} source={Images.WatchCampaignBG} /> */}

        <ScrollView>
          <View>
            <View style={styles.summaryStyle}>
              <View style={styles.subTotal}>
                <View style={styles.headingCampaignName}>
                  <Text style={styles.Campaigntextstyle}>
                    Cagarny 6820 Male Watch (Bundle of two)
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{ ...styles.summaryStyle, marginBottom: Metrics.ratio(10) }}>
              <Text style={styles.DescriptionDetailStyle}>
                Lorem Ipsum Dolor amit sed tu es conor,Lorem Ipsum Dolor amit
                sed tu es conor Lorem Ipsum Dolor amit sed tu es conor Lorem
                Ipsum Dolor amit sed tu es conor...
              </Text>
            </View>

            {MerchantCartData.map((data, index) => {
              return (
                <MerchantDetailCart
                  navigation={props.navigation}
                  data={data}
                  index={index}
                  setStateData={setCartData}
                  stateData={MerchantCartData}
                />
              );
            })}
          </View>

          {props?.route?.params?.message === 'ready to redeemed' ? (
            readyRedeemed ? (
              <View style={{ alignItems: 'center' }}>
                <Text
                  style={{
                    ...styles.descriptionText2,
                    width: Metrics.screenWidth * 0.8,
                    marginBottom: Metrics.ratio(5),
                  }}>
                  Show this screen to store associate before closing
                </Text>

                <Timer
                  time={10}
                  onStop={(v) => setTimer(v)}
                  play={true}
                  flipNumberProps={{
                    numberWrapperStyle: {
                      backgroundColor: 'white',
                      borderColor: 'transparent',
                    },
                    flipCardStyle: {
                      backgroundColor: 'white',
                      borderColor: 'transparent',
                    },
                  }}
                />
                <Text
                  style={{
                    ...styles.textTransaction,
                    marginVertical: Metrics.ratio(20),
                  }}>
                  Transaction ID{' '}
                  <Text style={styles.textNumber}>123456789</Text>
                </Text>

                <View
                  style={{
                    alignItems: 'center',
                    marginBottom: Metrics.ratio(10),
                  }}>
                  <TouchableOpacity
                    disabled={!timer}
                    style={{
                      ...styles.doneBtn,
                      backgroundColor: timer ? '#3FA9F5' : '#8F93A2',
                    }}
                    onPress={() =>
                      props.navigation.navigate('VouchersDetailsRedeem')
                    }>
                    <Text style={styles.doneText}>CLOSE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              <View style={styles.bottomView}>
                <View style={styles.readyView}>
                  <View>
                    <Text style={styles.descriptionText}>
                      Location Confirmed
                    </Text>
                    <Text
                      style={{
                        ...styles.readyText,
                        lineHeight: Metrics.ratio(28),
                      }}>
                      Ready to be Redeemed
                    </Text>
                    <Text style={styles.tapStyle}>
                      Tap only in presence of merchant
                    </Text>
                  </View>

                  <WithLocalSvg asset={Images.BlueTick} />
                </View>

                <View
                  style={{
                    ...styles.checkBoxView,
                    marginHorizontal: 0,
                    marginBottom: Metrics.ratio(25),
                  }}>
                  <TouchableOpacity
                    onPress={() => setToggleCheckBox(!toggleCheckBox)}
                    style={styles.checkbox}>
                    {toggleCheckBox && (
                      <Feather
                        name="check"
                        color="#3fa8f5"
                        size={Metrics.ratio(16)}
                      />
                    )}
                  </TouchableOpacity>
                  {/* <CheckBox
                tintColors={{ true: '#3fa8f5', false: '#fff' }}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              /> */}
                  <Text style={styles.checkBoxText}>
                    I understand this action is final. I have confirmed above
                    details and I am at point of purchase.
                  </Text>
                </View>

                <View style={styles.btnView}>
                  <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => props.navigation.goBack()}
                  >
                    <Text style={styles.cancelBtnText}>CANCEL</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.redeemBtn}
                    onPress={() => setReadyRedeemed(true)}>
                    <Image source={Images.Redeem_Icon} />
                    <Text style={styles.redeemBtnText}>REDEEM</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )
          ) : (
            <>
              {!confirmRedeem ? (
                <>
                  <View style={styles.bottomView}>
                    <View>
                      <Text style={styles.headingText}>Address</Text>
                      <Text style={styles.descriptionText}>
                        Leonel Messi 123 main St. any town, prov A-2
                      </Text>
                    </View>
                    <View style={{ marginTop: Metrics.ratio(10) }}>
                      <Text style={styles.headingText}>Email</Text>
                      <Text style={styles.descriptionText}>
                        leonel@gmail.com
                      </Text>
                    </View>
                    <View style={{ marginTop: Metrics.ratio(10) }}>
                      <Text style={styles.headingText}>Phone Number</Text>
                      <Text style={styles.descriptionText}>
                        +1-123-123-1234
                      </Text>
                    </View>
                    <View style={{ marginTop: Metrics.ratio(10) }}>
                      <Text style={styles.headingText}>Note</Text>
                      <Text style={styles.descriptionText}>
                        Please drop on porch
                      </Text>
                    </View>
                  </View>
                  <View style={styles.checkBoxView}>
                    <TouchableOpacity
                      onPress={() => setToggleCheckBox(!toggleCheckBox)}
                      style={styles.checkbox}>
                      {toggleCheckBox && (
                        <Feather
                          name="check"
                          color="#3fa8f5"
                          size={Metrics.ratio(16)}
                        />
                      )}
                    </TouchableOpacity>
                    {/* <CheckBox
                tintColors={{ true: '#3fa8f5', false: '#fff' }}
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
              /> */}
                    <Text style={styles.checkBoxText}>
                      I understand this action is final. I have confirmed above
                      details and I am at point of purchase.
                    </Text>
                  </View>
                  <View
                    style={{
                      marginHorizontal: Metrics.ratio(20),
                      marginTop: Metrics.ratio(5),
                    }}>
                    <Text style={styles.contactSoonText}>
                      Store will contact you soon for delivery
                    </Text>
                  </View>
                  <View style={styles.btnView}>
                    <TouchableOpacity style={styles.cancelBtn} >
                      <Text style={styles.cancelBtnText}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.redeemBtn}
                      onPress={() => setConfirmRedeem(true)}>
                      <Image source={Images.Redeem_Icon} />
                      <Text style={styles.redeemBtnText}>REDEEM</Text>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <View style={styles.bottomView2}>
                  <Text style={styles.descriptionText2}>
                    Cookie Merchant will contact you to confirm delivery. Please
                    contact store directly if you have any question.
                  </Text>

                  <View
                    style={{
                      alignItems: 'center',
                      marginVertical: Metrics.screenHeight * 0.03,
                    }}>
                    <Text style={styles.textTransaction}>
                      Transaction ID{' '}
                      <Text style={styles.textNumber}>123456789</Text>
                    </Text>
                    <Text style={styles.textTransaction}>
                      Please save it for your record
                    </Text>
                  </View>
                  <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                      style={styles.doneBtn}
                      onPress={() =>
                        props.navigation.navigate('My givees', {
                          screen: 'PurchasedVouchers',
                        })
                      }>
                      <Text style={styles.doneText}>DONE</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )}
            </>
          )}
        </ScrollView>
      </View>
    </Footer>
  );
};

export default ConfirmDelivery;
