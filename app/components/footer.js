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
    height:60
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
