import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

class Name extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <Text>{this.props.name}</Text>
    )
  }
}


export default Name;