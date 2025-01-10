import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Buttons} from 'react-native';
import Colors from './tabs/colors'
import MainPage from './tabs/mainPage';
let screen = <mainPage/>

export default function App() {
  return (
    <MainPage></MainPage>
  );
}

const styles = StyleSheet.create({
  
});
