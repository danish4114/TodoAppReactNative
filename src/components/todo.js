import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Button,
  TouchableNativeFeedback,
  SectionList
} from "react-native";
import { Header, Item, Content } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import data from "../db.json";
import { CheckBox } from "react-native-elements";
import { connect } from "react-redux";
import { toggleTodo, editTodo } from "../redux/actions";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = { todo: data.todolist, checked: false };
  }
  onPress = () => {
    this.props.navigation.navigate("AddTodo", { state: this.state.todo });
  };
  onChange = (index, completed) => {
    this.props.forToggle({ index, completed });
  };
  editTodo = (e, index) => {
    this.props.forEdit({ e, index });
  };
  render() {
    const result = this.props.data.map((Content, index) => {
      return (
        <View
          key={index}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <CheckBox
              checked={Content.completed}
              onPress={() => {
                this.onChange(index, Content.completed);
              }}
            />
            <TextInput
              value={Content.name}
              onChangeText={e => this.editTodo(e, index)}
            />
          </View>
          {Content.completed == true && (
            <Text style={{ marginRight: 10 }}>completed</Text>
          )}
        </View>
      );
    });
    return (
      <View>
        <Header>
          <Text style={styles.headerText}>Todo List</Text>
          <TouchableNativeFeedback onPressIn={this.onPress}>
            <Icon
              style={styles.homeIcon}
              name="home"
              size={40}
              color="#f5f5f5"
            />
          </TouchableNativeFeedback>
        </Header>
        {result}
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.fetchReducer.data.todolist);
  return {
    data: state.fetchReducer.data.todolist
  };
};
const mapDispatchToProps = dispatch => {
  console.log(toggleTodo());
  return {
    forToggle: (index, completed) => dispatch(toggleTodo(index, completed)),
    forEdit: (value, index) => dispatch(editTodo(value, index))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);

const styles = StyleSheet.create({
  headerText: {
    textAlign: "center",
    alignSelf: "center",
    fontSize: 30,
    color: "#f5f5f5",
    marginRight: 35
  },
  section: {
    padding: 10,
    backgroundColor: "black",
    color: "#F5F5F5",
    fontSize: 20
  },
  item: {
    padding: 10,
    fontSize: 15
  }
});
