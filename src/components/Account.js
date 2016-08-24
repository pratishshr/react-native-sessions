/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/24/16.
 */
/**
 * Author: Pratish Shrestha <pratishshrestha@lftechnology.com>
 * on 8/24/16.
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Account extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.navigator.popToTop(0);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> This is Account </Text>
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
    backgroundColor: 'red'
  }
});

export default Account;