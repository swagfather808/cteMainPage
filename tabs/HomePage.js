import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Buttons } from 'react-native';



function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> Frank Ocean get in the studio please </Text>
            <StatusBar style="auto" />
            <Image
                style={styles.image1}
                source={require('../assets/icon.png')}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
    }
})

export default HomePage;