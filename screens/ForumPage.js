import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
export default class ForumPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    
    return (
      <ScrollView style={styles.container}>
        <Text>Welcome to FORUM PAGE!</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
