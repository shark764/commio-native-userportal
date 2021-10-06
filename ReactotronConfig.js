import Reactotron from 'reactotron-react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'React Native - Commio - User Portal',
  })
  .useReactNative({
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
  })
  .connect();
