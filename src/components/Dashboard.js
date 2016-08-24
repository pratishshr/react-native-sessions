/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/24/16.
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Navigator} from 'react-native';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.goToProfile = this.goToProfile.bind(this);
  }
  goToProfile() {
    this.props.navigator.push({
      name: 'profile',
      config: Navigator.SceneConfigs.PushFromRight
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text> This is Dashboard</Text>
        <TouchableHighlight onPress={this.goToProfile}>
          <Text> Go to Profile</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default Dashboard;