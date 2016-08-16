import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableHighlight, TextInput} from 'react-native';

import Name from './Name';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Saugat'
    };
    //this.changeName = this.changeName.bind(this);
  }

  componentWillMount() {
    console.log('will mount')
  }

  componentDidMount() {
    console.log('did mount');
    setTimeout(() => {
      this.setState({name: 'Pratish'})
    }, 1000)
  }

  componentWillUnmount() {

  }

  changeName(name) {
    this.setState({name: name})
  }

  render() {
    console.log('render');
    return (
      <View style={styles.container}>
        <Name name={this.state.name}/>
        <TouchableHighlight onPress={() => {this.changeName('Grishma')}} style={styles.button} underlayColor="red">
          <View>
            <Text>Change Name</Text>
          </View>
        </TouchableHighlight>
        <TextInput style={styles.textInput} multiline={true} keyboardType="phone-pad">
          <View style={styles.textView}></View>
          </TextInput>
        <Text>{this.state.name}</Text>
        <Text> Hello World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    height: 40,
    backgroundColor: '#AACCEE',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 20
  },
  textInput: {
    width: 100,
    height: 50,
    backgroundColor: '#f3f3f3',
    alignSelf: 'center',
    paddingLeft: 10
  },
  textView: {
    width: 100,
    height: 50,
    backgroundColor: 'red'
  }
});

export default App;