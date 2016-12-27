/**
 * footer component
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  footer: {
  	flex:1,
    flexDirection:'column',
  	justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#333',
    minHeight:60,
    maxHeight:60
  },
  text:{
  	color:"#fff",
    textAlign:'center'
  }
});


export default class Footer extends Component {
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
