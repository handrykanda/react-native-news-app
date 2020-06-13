import 'react-native-gesture-handler';

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text, StyleSheet, View} from 'react-native';

//redux stuff
import {Provider} from 'react-redux';
import store from './src/redux/store';

//screens
import TabScreen from './src/screens/TabScreen';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <TabScreen />
        </NavigationContainer>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({});
