/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';


import Main from "./app/main";

class RetailApp extends Component {
  render(){
      return(
        <View style={{flex: 1}}>
          <Main/>
        </View>
      );
    }
}



AppRegistry.registerComponent('RetailApp', () => RetailApp);
