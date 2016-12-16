/**
 * header component
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
  	flex:1,
    flexDirection:'row',
    backgroundColor: '#333'
  },
  menuButton:{
    width: 50,
    color:"#fff",
    backgroundColor: 'red',
    paddingTop:20,
    textAlign:"center"
  },
  logo:{
    flex:1,
    textAlign:"right",
    color:"#fff",
    backgroundColor: 'blue',
    paddingTop:20,
    paddingRight:10
  }

});


export default class Header extends Component {
  render(){
      return(
        <View style={styles.header}>
          <Text style={styles.menuButton}>
            Menu
          </Text>
        	<Text style={styles.logo}>
        		Logo
        	</Text>
        </View>
      )
    }
}
