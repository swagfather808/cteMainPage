import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Buttons, TextInput } from 'react-native';
import Colors from './Colors'



function HomePage() {
    return (
        <View style={styles.container}>
            
            <StatusBar style="auto" />
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
    },

    container:{
        backgroundColor: Colors.charcoal
    },

    image1: {
        height: 200, 
        width: 200, 
    },

    
})

export default HomePage;