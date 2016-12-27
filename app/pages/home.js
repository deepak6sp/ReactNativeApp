/**
 * home component
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  home: {
  	flex:8,
  	justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  page:{
  	color:"#000"
  }
});


export default class Home extends Component {
  render(){
      return(
        <View style={styles.home}>
        	<Text style={styles.page}>
        		HomePage
        	</Text>
        </View>
      )
    }
}
