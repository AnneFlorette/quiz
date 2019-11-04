import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
      <Image source={require('./assets/quiz.png')} style={{ width: 300, height: 110 }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
