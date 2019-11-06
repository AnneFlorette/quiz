import React, { Component } from "react";
import Home  from './components/Home';
import Question  from './components/Question';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ImageBackground
} from "react-native";


export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("./assets/quiz.png")}
            style={{
              marginTop: 25,
              width: 150,
              height: 50,
              resizeMode: "stretch"
            }}
          />
        </View>
        <Home/>
        <Question/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#e5e5d8",
    borderBottomWidth: 1,
    width: "100%"
  }
});
