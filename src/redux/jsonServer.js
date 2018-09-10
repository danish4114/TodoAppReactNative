import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  TouchableNativeFeedback
} from "react-native";
import { Header } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

class JsonServer extends Component {
  constructor(props) {
    super(props);
  }

 componentWillMount() {
    console.log("DDDDDDDDDDDDDDDDDDDD");
    const baseUrl = 'http://jsonplaceholder.typicode.com/todos';
    console.log(baseUrl);
    
   axios.get(baseUrl)
      .then(response => {
        console.log(response,'asdasd');
      })
      .catch(error => {
        console.log(error,'error');
      });
  }
  render() {
    return <Text>kdnvsd</Text>;
  }
}
export default JsonServer;
