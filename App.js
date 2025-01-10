import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Buttons} from 'react-native';
import Colors from './tabs/colors'
import mainPage from './tabs/mainPage'
let screen = <mainPage/>

export default function App() {
  return (
    <View>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  
});
