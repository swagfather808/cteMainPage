import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Buttons, TextInput, Pressable } from 'react-native';
import Colors from './Colors'

function button1() {
    console.log('button1')
}

function button2() {
    console.log('button2')
}

function button3() {
    console.log('button3')
}

function HomePage() {
    return (
        <View style={styles.basePage}>
            <View style={styles.headerContainer}>
                <Text style={styles.moanaluaHeader}>Moanalua High School CTE Department  </Text>

                <Image
                    style={styles.image1}
                    source={require('../assets/favicon.png')}
                />

                <Pressable onPress={button1} >
                    <Text style={styles.barText}>| Home |</Text>
                </Pressable>

                <Pressable onPress={button2}>
                    <Text style={styles.barText}> FAQ |</Text>
                </Pressable>

                <Pressable onPress={button3}>
                    <Text style={styles.barText}> Teachers | </Text>
                </Pressable>
            </View>

            <View style={styles.searchbarContainer}>
                <TextInput
                    style={styles.searchbar}
                    placeholder='Find your course!'
                />

                <Image
                    style={styles.image1}
                    source={require('../assets/magnifyingGlass.png')}
                />

            </View>
        </View>

    )

}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
    },

    barText: {
        fontWeight: 'black',
        fontFamily: 'sans-serif',
        fontSize: 40,
    },

    moanaluaHeader: {
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
        fontSize: 40,
        borderRadius: 4,
    },

    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        borderWidth: 11,
        alignItems: 'center',
    },

    basePage: {
        backgroundColor: Colors.burntSienna
    },

    image1: {
        height: 100,
        width: 100,
    },

    searchbar: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold',
        borderWidth: 4,
        width: 500,
        height: 75,
        borderRadius: 100,
    },

    searchbarContainer: {
        alignItems: 'center'
    },

    searchbarImage: {

    },

})

export default HomePage;