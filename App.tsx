import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Text, View, ScrollView } from 'react-native';

import LoginAsm from './src/screen/auth/LoginAsm';
import RegisterAsm from './src/screen/auth/RegisterAsm';
import StackAsm from './src/screen/stack/StackAsm';
import HomeAsm from './src/screen/tab/HomeAsm';
import DetailAsm from './src/screen/stack/DetailAsm';

import { Provider } from 'react-redux';
import { store } from './src/store/store';
function App(): React.JSX.Element {

  return (


    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar

          barStyle={'dark-content'}
          backgroundColor="rgba(255, 255, 255, 1)"
        />
        <StackAsm />


        {/* <CameraBai2/> */}
      </SafeAreaView>

    </Provider>

  );
}


export default App;
