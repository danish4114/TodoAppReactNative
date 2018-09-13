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
import { Header, Icon } from "native-base";
// import Icon from "react-native-vector-icons/FontAwesome";
import { createStackNavigator } from "react-navigation";
import Welcome from "./src/components/welcome";
import Todo from "./src/components/todo";
import HomePage from "./src/components/homepage";
import AddTodo from "./src/components/addtodo";
import JsonServer from "./src/redux/jsonServer";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
// import Icon from "react-native-vector-icons/Entypo";
// import  Icon from 'react-native-vector-icons/FontAwesome5';

const AppNav = createMaterialBottomTabNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      tabBarIcon: (
        <Icon
          type="Entypo"
          style={{ color: "#f5f5f5", fontSize: 20 }}
          name="circular-graph"
        />
      )
    }
  },
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      tabBarIcon: (
        <Icon
          type="Entypo"
          name="home"
          style={{ color: "#f5f5f5", fontSize: 20 }}
        />
      )
    }
  },
  Todo: {
    screen: Todo,
    navigationOptions: {
      tabBarIcon: (
        <Icon
          type="FontAwesome"
          name="tasks"
          style={{ color: "#f5f5f5", fontSize: 20 }}
        />
      )
    }
  },
  AddTodo: {
    screen: AddTodo,
    navigationOptions: {
      tabBarIcon: (
        <Icon
          type="Entypo"
          name="add-to-list"
          style={{ color: "#f5f5f5", fontSize: 20 }}
        />
      )
    }
  },
  JsonServer: {
    screen: JsonServer,
    navigationOptions: {
      tabBarIcon: (
        <Icon
          type="Entypo"
          name="circular-graph"
          style={{ color: "#f5f5f5", fontSize: 20 }}
        />
      )
    }
  }
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
