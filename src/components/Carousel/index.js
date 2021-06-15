import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Image } from 'react-native';

import PropTypes from 'prop-types';

import { WithLocalSvg } from 'react-native-svg';

import styles from './styles';
import { Images, Metrics, Fonts } from '../../theme';

const QuoteCarousel = (props) => {
  const {
    data,
    onMomentumScrollEnd,
    copyBtnPress,
    saveBtnPress,
    favoriteBtnPress,
    navigation,
  } = props;

  const SPACING = 5;
  const ITEM_SIZE = Metrics.screenWidth * 0.51; //42
  const SPACER_ITEM_SIZE = (Metrics.screenWidth - ITEM_SIZE) / 12;

  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item) => item.author}
      horizontal
      contentContainerStyle={{ ...styles.contentContainerStyle }}
      snapToInterval={ITEM_SIZE}
      decelerationRate={0}
      bounces={false}
      pagingEnabled
      onMomentumScrollEnd={(ev) => {
        onMomentumScrollEnd(
          Math.round(ev.nativeEvent.contentOffset.x / ITEM_SIZE),
        );
      }}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
        useNativeDriver: true,
      })}
      scrollEventThrottle={16}
      renderItem={({ item, index }) => {
        const inputRange = [
          (index - 3) * ITEM_SIZE,
          (index - 2) * ITEM_SIZE,
          (index - 1) * ITEM_SIZE,
        ];
        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [50, 40, 50],
        });

        if (item.spacer) {
          return <View style={{ width: SPACER_ITEM_SIZE }} />;
        }

        return (
          <View style={{ width: ITEM_SIZE, ...styles.itemContainer }}>
            <Animated.View
              style={{
                marginHorizontal: SPACING,
                padding: SPACING,
                transform: [{ translateY }],
                ...styles.itemAnimatedContainer,
              }}>
              {/* card top image */}
              <View
                style={{
                  borderRadius: 20,
                  alignItems: 'center',
                  position: 'absolute',
                  top: -Metrics.ratio(30),
                  right: 0,
                  width: '110%',
                }}>
                <Image
                  source={item.image}
                  resizeMode="cover"
                  style={{ ...styles.innerQuote }}
                />
              </View>

              {/*  */}
              <View style={styles.cardSubContainer}>
                <View
                  style={{
                    flexDirection: 'row',
                    width: Metrics.screenWidth * 0.3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: '#8F93A2',
                      fontFamily: Fonts.type.ArialBlackBold,
                      fontSize: Fonts.size.xxxSmall,
                    }}>
                    {item.name}
                  </Text>
                  {item.status !== 'ACCEPT' && (
                    <Text
                      style={{
                        color: '#FFAA00',
                        marginLeft: Metrics.ratio(5),
                        fontFamily: Fonts.type.ArialBold,
                        fontSize: Fonts.size.xxxSmall,
                      }}>
                      x3
                    </Text>
                  )}
                </View>

                {/*  */}
                <Text numberOfLines={2} style={{ ...styles.titleStyles }}>
                  {item.title}
                </Text>

                {item.status === 'ACCEPT' ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    {item.days.split(' ').map((v, i) => {
                      return (
                        <Text
                          numberOfLines={1}
                          style={{
                            ...styles.daysStyles,
                            fontStyle: i > 0 ? 'italic' : 'normal',
                            color: i > 0 ? '#3FA9F5' : '#8F93A2',
                            fontFamily:
                              i > 0
                                ? Fonts.type.ArialBold
                                : Fonts.type.ArialBoldItalic,
                          }}>
                          {v}
                        </Text>
                      );
                    })}
                  </View>
                ) : (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <WithLocalSvg asset={Images.ClockRed} />
                    <Text numberOfLines={1} style={{ ...styles.daysStyles }}>
                      {item.days}
                    </Text>
                  </View>
                )}
              </View>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: Metrics.ratio(24),
                  position: 'absolute',
                  bottom: -Metrics.ratio(10),
                  left: Metrics.ratio(15),
                  right: Metrics.ratio(15),
                  paddingHorizontal: 20,
                  paddingVertical: Metrics.ratio(7),
                  backgroundColor:
                    item.status === 'ACCEPT / DECLINE' ? '#25E866' : '#3FA9F5',
                }}
                onPress={() =>
                  item.status === 'ACCEPT / DECLINE'
                    ? navigation.navigate('My givees')
                    : navigation.navigate('ShareGivees')
                }>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: Fonts.type.ArialBold,
                    fontSize: Fonts.size.ten,
                  }}>
                  {item.status}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        );
      }}
    />
  );
};

QuoteCarousel.defaultProps = {
  data: [],
  onMomentumScrollEnd: undefined,
  copyBtnPress: undefined,
  saveBtnPress: undefined,
  favoriteBtnPress: undefined,
};

QuoteCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  onMomentumScrollEnd: PropTypes.func.isRequired,
  copyBtnPress: PropTypes.func.isRequired,
  saveBtnPress: PropTypes.func.isRequired,
  favoriteBtnPress: PropTypes.func.isRequired,
};

export default QuoteCarousel;
