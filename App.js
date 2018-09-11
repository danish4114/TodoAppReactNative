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
import { createStackNavigator } from "react-navigation";
import Welcome from "./src/components/welcome";
import Todo from "./src/components/todo";
import HomePage from "./src/components/homepage";
import AddTodo from "./src/components/addtodo";
import JsonServer from "./src/redux/jsonServer";

const AppNav = createStackNavigator({
  Welcome: { screen: Welcome },
  HomePage: { screen: HomePage },
  Todo: { screen: Todo },
  AddTodo: { screen: AddTodo },
  JsonServer: { screen: JsonServer },
});
class App extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
  }
  render() {
    return <AppNav />;
  }
}
export default App;
