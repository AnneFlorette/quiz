import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ImageBackground
} from "react-native";

export default class Question extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.questions}>
            <Text>La question</Text>
        </View>
        <View style={styles.answers}>
            <View style={styles.buttonsView}>
                <Button
                title="lorem"
                onPress={() => {
                    alert("You tapped the button 1!");
                }}
                color="#c76363"
                />
            </View>

            <View style={styles.buttonsView}>
                <Button
                title="answer2"
                onPress={() => {
                    alert("You tapped the button 2!");
                }}
                color="#63b1c7"
                />
            </View>
            <View style={styles.buttonsView}>
                <Button
                title="answer3"
                onPress={() => {
                    alert("You tapped the button 3!");
                }}
                color="#76c763"
                />
            </View>
            <View style={styles.buttonsView}>
                <Button
                title="answer4"
                onPress={() => {
                    alert("You tapped the button 4!");
                }}
                color="#b763c7"
                />
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    questions: {
      flex: 1,
      width: "100%"
    },
    answers: {
      flexWrap: 'wrap',
      backgroundColor:'pink',
    
      flexDirection: "row",
      justifyContent: "space-around",
    },
    buttonsView:{
      padding:10,
      width:'50%'
    }

  });