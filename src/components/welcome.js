import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  TouchableNativeFeedback,
  ActivityIndicator
} from "react-native";
import { Header } from "native-base";

class Welcome extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props){
    super(props);
    this.state={animating:true}
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({animating:false})
      
    }, 4000);
  }
  render() {
    return (
      <View style={styles.view}>
        <View>
          <Text style={styles.text}>WELCOME!</Text>
          <ActivityIndicator animating={this.state.animating} size='large' color='red'/>
        </View>
      </View>
    );
  }
}
export default Welcome;
const styles = StyleSheet.create({
  view: {
    margin: 10,
    borderRadius: 30,
    flex: 1,
    borderWidth: 1,
    borderColor: "blue",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    fontFamily:'Arial'
  }
});
