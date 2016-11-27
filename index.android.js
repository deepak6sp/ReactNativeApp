/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  MapView
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    padding: 10,
    backgroundColor: 'aqua'
  },
  inputStyle:{
    margin:10,
    borderColor: 'gray',
    borderWidth: 1,
    height:30,

  }
});

exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render: function(): ReactElement<any> {
      return <GeolocationExample />;
    },
  }
];

class RetailApp extends Component {
  constructor(props){
    super(props);
    this.state = { date: new Date(),timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60};
  }
  state = {
   initialPosition: 'unknown',
   lastPosition: 'unknown',
 };

 watchID: ?number = null;

  componentDidMount() {
     navigator.geolocation.getCurrentPosition(
       (position) => {
         var initialPosition = JSON.stringify(position);
         this.setState({initialPosition});
       },
       (error) => alert(JSON.stringify(error)),
       {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
     );
     this.watchID = navigator.geolocation.watchPosition((position) => {
       var lastPosition = JSON.stringify(position);
       this.setState({lastPosition});
     });
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }
  _onPressButton() {
    alert("You tapped the button!");
  }
  onDateChange(){
    alert("date changed");
  }
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text>
         <Text style={styles.title}>Initial position: </Text>
         {this.state.initialPosition}
       </Text>
       <Text>
         <Text style={styles.title}>Current position: </Text>
         {this.state.lastPosition}
       </Text>

        <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
          <Text>this is button</Text>
        </TouchableOpacity>
      </View>
    );
  }
}



AppRegistry.registerComponent('RetailApp', () => RetailApp);
