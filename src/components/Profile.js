/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/24/16.
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, Navigator} from 'react-native';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.goToAccount = this.goToAccount.bind(this);
  }

  componentDidMount() {
    alert('You are in profile');
  }

  goBack() {
    this.props.navigator.jumpBack();
  }

  goToAccount() {
    this.props.navigator.push({
      name: 'account',
      config: Navigator.SceneConfigs.PushFromRight
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> This is Profile</Text>
        <Text onPress={this.goToAccount}>Go to Account</Text>
        <Text onPress={this.goBack}>Back</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  }
});

export default Profile;