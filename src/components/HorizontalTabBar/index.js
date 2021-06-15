import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Image,
  findNodeHandle,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import {Metrics} from '../../theme';

const images = {
  man:
    'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  women:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  kids:
    'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  skullcandy:
    'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  help:
    'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};

const data = Object.keys(images).map(i => ({
  key: i,
  title: i,
  image: images[i],
  ref: React.createRef(),
}));

const Indicator = ({measures, scrollX}) => {
  const inputRange = data.map((_, i) => i * Metrics.screenWidth);
  const indicatorWidth = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.width),
  });
  const translateX = scrollX.interpolate({
    inputRange,
    outputRange: measures.map(measure => measure.x),
  });
  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: Metrics.ratio(4),
        width: indicatorWidth,
        left: 0,
        backgroundColor: 'white',
        bottom: -10,
        transform: [
          {
            translateX,
          },
        ],
      }}
    />
  );
};

const Tab = React.forwardRef(({item, onItemPress}, ref) => {
  return (
    <TouchableOpacity onPress={onItemPress}>
      <View ref={ref}>
        <Text
          style={{
            color: 'white',
            fontSize: 60 / data.length,
            textTransform: 'uppercase',
          }}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
});

const Tabs = ({data, scrollX, onItemPress}) => {
  const [measures, setMeasures] = React.useState([]);
  const containerRef = React.useRef();
  React.useEffect(() => {
    const m = [];
    data.forEach(item => {
      item.ref.current.measureLayout(
        containerRef.current,
        (x, y, width, height) => {
          m.push({x, y, width, height});
          if (m.length == data.length) {
            setMeasures(m);
          }
        },
      );
    });
  }, []);
  
  return (
    <View style={{position: 'absolute', top: 100, width: Metrics.screenWidth}}>
      <View
        ref={containerRef}
        style={{justifyContent: 'space-evenly', flex: 1, flexDirection: 'row'}}>
        {data.map((item, index) => {
          return (
            <Tab
              key={item.key}
              item={item}
              ref={item.ref}
              onItemPress={() => {
                onItemPress(index);
              }}
            />
          );
        })}
      </View>
      {measures.length > 0 && (
        <Indicator measures={measures} scrollX={scrollX} />
      )}
    </View>
  );
};

export default function TabBar() {
  const ref = React.useRef();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const onItemPress = React.useCallback(itemIndex => {
    ref?.current?.scrollToOffset({
      offset: itemIndex * Metrics.screenWidth,
    });
  });
  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={data}
        keyExtractor={item => item.key}
        horizontal
        showHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        bounces={false}
        renderItem={item => {
          console.log('TabBar -> item', item);
          return (
            <View
              style={{
                width: Metrics.screenWidth,
                height: Metrics.screenHeight,
              }}>
              <Image
                source={{uri: item.item.image}}
                style={{flex: 1, resizeMode: 'cover'}}
              />
              <View
                style={[
                  StyleSheet.absoluteFillObject,
                  {backgroundColor: 'rgba(0,0,0,0.3)'},
                ]}
              />
            </View>
          );
        }}
      />
      <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress} />
    </View>
  );
}
