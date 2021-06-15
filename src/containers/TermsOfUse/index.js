// @flow
import React, { useEffect } from 'react';

import { Text, View, FlatList, } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { Metrics, Colors } from '../../theme';
import styles from './style';
import { GoBackHeader, ActivityIndicator } from '../../components';
import { request as aboutReuest } from '../../redux/actions/Terms';
import { useDropDown } from '../../components/Toast';

const TermsofUse = (props) => {
  const dispatch = useDispatch();
  const termsResponse = useSelector((state) => state.terms);
  const isConnected = useSelector(
    (state) => state.networkInfo.isNetworkConnected,
  );

  const { ref } = useDropDown();

  useEffect(() => {
    dispatch(aboutReuest({}));
  }, [isConnected]);

  useEffect(() => {
    if (termsResponse?.failure && !termsResponse.isFetching) {
      ref.current.alertWithType('error', 'Error', termsResponse.errorMessage);
    }
  }, [termsResponse]);

  const renderTermsMethod = ({ item }) => {
    return <Text style={styles.TermsDetail}>{item?.title}</Text>;
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <GoBackHeader heading="Terms Of Use" goBack={props.navigation.goBack} />

      {termsResponse?.isFetching === true && (
        <ActivityIndicator
          isLoading={true}
          size="large"
          color={Colors.primary}
        />
      )}

      <View>
        {termsResponse?.data?.termsCondition &&
          termsResponse?.data?.termsCondition.length > 0 ? (
          <FlatList
            data={termsResponse?.data?.termsCondition}
            contentContainerStyle={{
              paddingBottom: Metrics.screenHeight * 0.12,
            }}
            renderItem={renderTermsMethod}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ justifyContent: 'center' }}>
              {termsResponse.data.message}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default TermsofUse;
