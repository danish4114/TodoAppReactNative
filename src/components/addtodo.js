import React, { Component } from "react";
import {
  Alert,
  Text,
  View,
  // Button,
  StyleSheet,
  FlatList,
  SectionList,
  List,
  ListItem,
  ListView,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TextInput
} from "react-native";
import { Input, Button } from "react-native-elements";
import { connect } from "react-redux";
import { targetNewValue, addNewValue } from "../redux/actions";
import Icon from "react-native-vector-icons/Entypo";
import { Header } from "native-base";

class AddTodo extends Component {
  static navigationOptions = {
    header: null,
    headerBackTitle: null
  };
  constructor(props) {
    super(props);
  }
  onChange = e => {
    this.props.newValue(e);
  };
  onPress = () => {
    this.props.addtodo();
    this.props.navigation.navigate("Todo");
  };
  toHome = () => {
    this.props.navigation.navigate("HomePage");
  };
  todolist = () => {
    this.props.navigation.navigate("Todo");
  };
  render() {
    return (
      <View style={styles.view}>
        <Header>
          <View style={{ flex: 1, justifyContent: "space-between" }}>
            <Icon
              onPress={this.toHome}
              style={styles.homeIcon}
              name="home"
              size={35}
              color="#f5f5f5"
            />
          </View>
          <Text style={styles.headerText}>AddTodo</Text>
          <Icon
            onPress={this.todolist}
            style={styles.homeIcon}
            name="list"
            size={35}
            color="#f5f5f5"
          />
        </Header>
        <View style={styles.inputView}>
          <Input
            value={this.props.newValu}
            onChangeText={e => this.onChange(e)}
            inputContainerStyle={{
              borderColor: "#4CA8D6",
              borderWidth: 2,
              borderRadius: 30,
              marginBottom: 15
            }}
            style={{ borderRadius: 30 }}
            placeholder="Addtodo......"
          />
          <Button
            onPress={this.onPress}
            buttonStyle={{ borderRadius: 20, width: 150 }}
            title="ADDTODO"
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    newValu: state.fetchReducer.newValue
  };
};
const mapDispatchToProps = dispatch => {
  return {
    newValue: value => dispatch(targetNewValue(value)),
    addtodo: () => dispatch(addNewValue())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

const styles = StyleSheet.create({
  section: {
    backgroundColor: "black",
    padding: 10,
    color: "#f5f5f5",
    paddingLeft: 10,
    fontSize: 20
  },
  sectionItem: {
    marginLeft: 30
  },
  view: {
    backgroundColor: "#f5f5f5",
    flex: 1
  },
  Button: {
    width: 100
  },
  headerText: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    color: "#f5f5f5",
    marginRight: 70
  },
  homeIcon: {
    marginTop: 8
  },
  loginView: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  },
  inputView: {
    flex: 1,
    borderRadius: 30,
    margin: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});
