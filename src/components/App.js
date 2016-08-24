import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableHighlight, Navigator} from 'react-native';

import Name from './Name';
import Dashboard from './Dashboard';

import * as routes from './routes';

class App extends Component {
  renderScene(route, navigator) {
    return routes.renderScene(route, navigator);
  }
  
  render() {
    return (
      <Navigator
          initialRoute={{name: 'dashboard'}}
          renderScene={this.renderScene}/> 
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

export default App;