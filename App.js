import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from './tabs/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Frank Ocean get in the studio please </Text>
      <Image></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.chineseViolet,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontWeight: 'Bold',
    fontFamily: 'Coochin'
  },
});
