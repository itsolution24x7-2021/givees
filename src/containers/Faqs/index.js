import React, { useRef, useState, useEffect } from 'react';

import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';

import { Transition, Transitioning } from 'react-native-reanimated';

import { useDispatch, useSelector } from 'react-redux';

import styles from './style';
import { Images, Metrics, Colors } from '../../theme';
import { GoBackHeader, ActivityIndicator, Footer, } from '../../components';
import { request as faqsReuest } from '../../redux/actions/Faqs';

//Component
const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const data = [
  {
    category: 'How Does warranty delivery?',
    subCategories:
      'This limited warranty will apply to the products. For product defects under normal use circumstances and at the discretion of the company, Brand will provide free of charge repair and/or replacement services within the warranty period. Daraz will not take any responsibility for the after-sale services',
  },
  {
    category: 'How long is my delivery?',
    subCategories:
      'Tokoto Express products will be delivered to you faster than ever before! Within 6 - 10 Business Days for customers everywhere .',
  },
  {
    category: 'How to become tokoto saller?',
    subCategories:
      'Head over to the Daraz website and register while listing your products. \nProvide your personal and business details.\nProvide information about the products you want to sell on Daraz.',
  },
  {
    category: 'How to become a saller?',
    subCategories:
      'Head over to the Daraz website and register while listing your products. \nProvide your personal and business details.\nProvide information about the products you want to sell on Daraz.',
  },
  {
    category: 'How Does warranty delivery?',
    subCategories:
      'This limited warranty will apply to the products. For product defects under normal use circumstances and at the discretion of the company, Brand will provide free of charge repair and/or replacement services within the warranty period. Daraz will not take any responsibility for the after-sale services',
  },
  {
    category: 'How long is my delivery?',
    subCategories:
      'Tokoto Express products will be delivered to you faster than ever before! Within 6 - 10 Business Days for customers everywhere .',
  },
];
export default function App(props) {
  const createRef = { toastRef: useRef(null) };
  let [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const faqsResponse = useSelector((state) => state.faqs);
  const isConnected = useSelector(
    (state) => state.networkInfo.isNetworkConnected,
  );

  useEffect(() => {
    dispatch(faqsReuest({}));
  }, [isConnected]);

  useEffect(() => {
    if (faqsResponse?.failure && !faqsResponse.isFetching) {
      // createRef.toastRef.show(faqsResponse.errorMessage);
    }
  }, [faqsResponse]);


  const [currentIndex, setCurrentIndex] = React.useState(null);
  const ref = React.useRef();
  return (
    <Footer route={props?.route?.name}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <GoBackHeader heading="FAQs" goBack={props.navigation.goBack} />
        {/* <Header
          goBackWithHeading
          heading="FAQs"
          navigation={props.navigation}
        /> */}

        {faqsResponse?.isFetching === true && (
          <ActivityIndicator
            isLoading={true}
            size="large"
            color={Colors.primary}
          />
        )}

        <ScrollView>
          <Transitioning.View ref={ref} transition={transition}>
            <View style={styles.mainViewFaq}>
              {faqsResponse?.data?.faqs &&
                faqsResponse?.data?.faqs.map(({ question, answer }, index) => {
                  return (
                    <View style={{
                      flexDirection: 'row', justifyContent: 'flex-end'
                    }}>
                      <View style={{
                        borderLeftColor:
                          faqsResponse?.data?.faqs.length - 1 === index
                            ? 'transparent'
                            : '#727C8E',
                        borderLeftWidth:
                          faqsResponse?.data?.faqs.length - 1 === index ? 0 : 3,
                        borderLeftWidth: Metrics.ratio(1),
                        marginLeft: Metrics.ratio(20),
                        marginRight: Metrics.ratio(16),
                        flexDirection: 'row',
                        position: 'absolute',
                        height: '100%',
                        width: 30,
                        right: Metrics.screenWidth * 0.80,
                        zIndex: 1,
                      }}
                      >
                        <View>
                          <View
                            style={[
                              styles.circleView,
                              {
                                backgroundColor:
                                  index === currentIndex
                                    ? '#3FA9F5'
                                    : '#727c8e',
                                marginLeft: index == currentIndex ? -14 : -14,
                              },
                            ]}>
                            <Text style={styles.NumberCountText}>
                              {index + 1}
                            </Text>
                          </View>
                        </View>
                      </View>

                      <View style={styles.BoxShadowMainView}>
                        <View
                          style={[
                            styles.BoxShadowView,
                            {
                              marginLeft: index == currentIndex ? 16 : 3,
                              width: index == currentIndex ? '95.7%' : '100%',
                            }
                          ]}>
                          <View style={{ flexDirection: 'row', }}>
                            <Text style={styles.faqHeading}>{question}</Text>
                            <TouchableOpacity
                              onPress={() => {
                                ref.current.animateNextTransition();
                                setCurrentIndex(
                                  index === currentIndex ? null : index,
                                );
                              }}
                              style={{
                                justifyContent: 'center',
                                alignItems: 'flex-end',
                              }}>
                              <Image
                                style={styles.IconStyle}
                                source={
                                  index === currentIndex
                                    ? Images.MinusIcon
                                    : Images.PlusIcon
                                }
                              />
                            </TouchableOpacity>
                          </View>

                          <View>
                            {index === currentIndex && (
                              <Text style={styles.faqDetail}>{answer}</Text>
                            )}
                          </View>
                        </View>
                      </View>
                    </View>
                  );
                })}
            </View>
          </Transitioning.View>
        </ScrollView>
      </View>
    </Footer >
  );
}
