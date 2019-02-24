import React from 'react';
import { Platform, StatusBar, Text, StyleSheet, View } from 'react-native';

export default class Title extends React.Component {
  render() {
  	return(
		<Text style={styles.welcome}>i am title!</Text>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});