import React from 'react';
import { StyleSheet, SafeAreaView, StatusBar, Text, View, ScrollView } from 'react-native';

import LoginAsm from './DaNenTangHai/Asm/LoginAsm';
import RegisterAsm from './DaNenTangHai/Asm/RegisterAsm';
import StackAsm from './DaNenTangHai/Asm/StackAsm';
import HomeAsm from './DaNenTangHai/Asm/HomeAsm';
import DetailAsm from './DaNenTangHai/Asm/DetailAsm';

import { Provider } from 'react-redux';
import { store } from './DaNenTangHai/Asm/store/store';
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
