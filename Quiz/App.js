import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Merci :D
//       </Text>
//     </View>
//   );
// }

export default class Logo extends Component {
  render() {
    // let pic = {
    //   uri: './assets/quiz.png'
    // };
    return (
      //<Image source={pic} style={{ width: 193, height: 110 }} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("./assets/quiz.png")}
            style={{
              marginTop: 5,
              width: 150,
              height: 50,
              resizeMode: "stretch"
            }}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.questionsWrapper}>
            <Text>Lorem ipsum</Text>
            <View style={styles.questions}></View>
          </View>
          <View style={styles.answersWrapper}>
            <Text>Lorem ipsum</Text>
            <View style={styles.answers}>
              <Button title="answer1" onPress={Alert.alert("oui1")} />
              {/* <Button title="answer2" onPress={Alert.alert("oui2")} /> */}
            </View>
            <View style={styles.answers}>
              <Button title="answer3" onPress={Alert.alert("oui3")} />
              {/* <Button title="answer4" onPress={Alert.alert("oui4")} /> */}
            </View>
          </View>
        </View>
      </View>
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#e5e5d8",
    borderBottomWidth: 1,
    width: "100%"
  },
  content: {
    flex: 8,
    justifyContent: "center",
    alignItems: "center"
  },
  questionsWrapper: {
    flex: 2
  },
  questions: {},
  answersWrapper: {
    flex: 1,
    flexDirection: "row"
  },
  answers: {}
});
