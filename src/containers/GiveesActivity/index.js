import React, {useState} from 'react';
import {Empty, GoBackHeader, Footer} from '../../components';
import {Colors, Metrics, Fonts, Images} from '../../theme';
import styles from './style';
import {View, TouchableOpacity, Text} from 'react-native';
import All from './All';
import Given from './Given';
import Expired from './Expired';
import Redeemed from './Redeemed';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';

const data = ['ALL', 'GIVEN', 'EXPIRED', 'REDEEMED'];

const MyActivity = ({navigation, route}) => {
  const [selected, setSelected] = useState('ALL');
  const setValue = (val) => {
    setSelected(val);
  };
  // console.log(navigation, 'navigationnavigationnavigation');

  const loginResponse = useSelector((state) => {
    if (state?.login?.data?.accessToken) {
      // setProfileImage(state.login?.data?.data[0]?.imgs.imageUrl);
      return true;
    } else {
      return false;
    }
  });

  return (
    <Footer route={route?.name}>
      <View
        style={{
          ...styles.container,
          paddingBottom: Metrics.screenHeight * 0.09,
        }}>
        <GoBackHeader
          heading={'Your givees Activity'}
          goBack={navigation.goBack}
        />
        {loginResponse ? (
          <>
            <View style={styles.mainContainerView}>
              {data.map((items, index) => {
                return (
                  <TouchableOpacity onPress={() => setValue(items)}>
                    <View style={{alignItems: 'center'}}>
                      <Text
                        style={{
                          ...styles.mainContainerText,
                          color: items == selected ? '#3FA9F5' : '#DCDEE2',
                          // marginLeft:
                          //   index !== 0 ? Metrics.ratio(25) : Metrics.ratio(0),
                        }}>
                        {items}
                      </Text>
                    </View>
                    {items === selected ? (
                      <View style={styles.selectedDotMainView}>
                        <View style={styles.selectedDot} />
                      </View>
                    ) : null}
                  </TouchableOpacity>
                );
              })}
            </View>

            <ScrollView>
              {selected == 'ALL' ? (
                <All />
              ) : selected == 'GIVEN' ? (
                <Given />
              ) : selected == 'EXPIRED' ? (
                <Expired />
              ) : (
                <Redeemed />
              )}
            </ScrollView>
          </>
        ) : (
          <View
            style={{
              flex: 1,
              height: Metrics.screenHeight * 0.7,
              justifyContent: 'center',
            }}>
            <Empty message={'Login Required!'} />
          </View>
        )}
      </View>
    </Footer>
  );
};

export default MyActivity;
