/**
 * footer component
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  footer: {
  	flex:1,
  	justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    height:50
  },
  text:{
  	color:"#fff"
  }
});


export default class Header extends Component {
  render(){
      return(
        <View style={styles.footer}>
        	<Text style={styles.text}>
        		Footer
        	</Text>
        </View>
      )
    }
}
