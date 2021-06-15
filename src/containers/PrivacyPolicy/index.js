// @flow
import React, { useEffect } from 'react';

import { Text, View, FlatList } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import { Metrics, Colors } from '../../theme';
import styles from './style';
import { GoBackHeader, ActivityIndicator } from '../../components';
import { request as aboutReuest } from '../../redux/actions/Policy';
import { useDropDown } from '../../components/Toast';

const PrivacyPolicy = (props) => {
  const dispatch = useDispatch();
  const policyResponse = useSelector((state) => state.policy);
  const isConnected = useSelector(
    (state) => state.networkInfo.isNetworkConnected,
  );

  const { ref } = useDropDown();

  useEffect(() => {
    dispatch(aboutReuest({}));
  }, [isConnected]);

  useEffect(() => {
    if (policyResponse?.failure && !policyResponse.isFetching) {
      ref.current.alertWithType('error', 'Error', policyResponse.errorMessage);
    }
  }, [policyResponse]);

  const renderItemMethod = ({ item }) => {
    return (
      <View style={styles.PrivacyView}>
        <Text style={styles.privacyTitle}>{item?.title}</Text>
        <Text style={styles.privacyDescription}>{item?.description}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <GoBackHeader heading="Privacy" goBack={props.navigation.goBack} />

      {policyResponse?.isFetching === true && (
        <ActivityIndicator
          isLoading={true}
          size="large"
          color={Colors.primary}
        />
      )}

      <View>
        {policyResponse?.data?.data && policyResponse?.data?.data.length > 0 ? (
          <FlatList
            contentContainerStyle={{
              paddingBottom: Metrics.screenHeight * 0.12,
            }}
            data={policyResponse?.data?.data}
            renderItem={renderItemMethod}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={{ justifyContent: 'center' }}>
              {policyResponse.data.message}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
export default PrivacyPolicy;