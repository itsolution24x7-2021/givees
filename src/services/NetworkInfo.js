import NetInfo from '@react-native-community/netinfo';

class NetworkInfo {
  networkInfoListener(dispatch, networkInfoAction) {
    NetInfo.fetch().then((isNetworkConnected) => {
      console.log(
        'NetworkInfo -> networkInfoListener -> isNetworkConnected',
        isNetworkConnected,
      );
      dispatch(networkInfoAction(isNetworkConnected.isConnected));
    });
    NetInfo.addEventListener((state) => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      dispatch(networkInfoAction(state.isConnected));
    });
    NetInfo.addEventListener((isNetworkConnected) => {
      dispatch(networkInfoAction(isNetworkConnected.isConnected));
    });
  }

  removeNetworkInfoListener(dispatch, networkInfoAction) {
    NetInfo.isConnected.removeEventListener(
      'connectionChange',
      (isNetworkConnected) => {
        dispatch(networkInfoAction(isNetworkConnected.isConnected));
      },
    );
  }
}

export default new NetworkInfo();
