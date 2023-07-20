import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: "red"}}>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>

      <View>
        <Text style={styles.text}>Hello World..!</Text>
      </View>

      <Button style={{backgroundColor: 'red'}} title='Click Me' />
    </View>
  );
}

const styles = StyleSheet.create({
  // Literal based js Object ekak
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    borderWidth: 2,
    backgroundColor: 'red'
  },

  text: {
    margin: 16,
    borderWidth: 2, // 2px
    borderColor: 'red', 
    fontSize: 20
  }
});