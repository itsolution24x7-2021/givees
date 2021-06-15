// @flow
import React, { useEffect } from 'react';

import { Text, View, FlatList, } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { GoBackHeader, ActivityIndicator, Footer, } from '../../components';
import { Metrics, Colors } from '../../theme';
import styles from './style';
import { request as aboutReuest } from '../../redux/actions/About';
import { useDropDown } from '../../components/Toast';

const About = (props) => {
  const dispatch = useDispatch();
  const aboutResponse = useSelector((state) => state.about);
  const isConnected = useSelector(
    (state) => state.networkInfo.isNetworkConnected,
  );

  const { ref } = useDropDown();

  useEffect(() => {
    dispatch(aboutReuest({}));
  }, [isConnected]);

  useEffect(() => {
    if (aboutResponse?.failure && !aboutResponse.isFetching) {
      ref.current.alertWithType('error', 'Error', aboutResponse.errorMessage);
    }
  }, [aboutResponse]);

  const renderAboutMethod = ({ item }) => {
    return <Text style={styles.AboutDetail}>{item?.about}</Text>;
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <GoBackHeader heading="About Us" goBack={props.navigation.goBack} />

      {aboutResponse?.isFetching === true && (
        <ActivityIndicator
          isLoading={true}
          size="large"
          color={Colors.primary}
        />
      )}

      <View>
        {aboutResponse?.data?.getAllAbouts &&
          aboutResponse?.data?.getAllAbouts.length > 0 ? (
          <FlatList
            data={aboutResponse?.data?.getAllAbouts}
            contentContainerStyle={{
              paddingBottom: Metrics.screenHeight * 0.12,
            }}
            renderItem={renderAboutMethod}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ justifyContent: 'center' }}>
              {aboutResponse.data.message}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default About;
