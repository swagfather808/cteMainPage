import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Buttons, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import Colors from '../tabs/Colors'
import { Link } from 'expo-router';
import MainButton from './MainButton';

const [buttonImage1, setButtonImage1] = useState('')
const [buttonText1, setButtontext1] = useState('Home')

function button1() {
    console.log('button1')
    setButtonImage1('../assets/wrench.png')
}

function button2() {
    console.log('button2')
}

function button3() {
    console.log('button3')
}

function NomePage(props) {
    return (
        <View style={styles.basePage}>
            <View style={styles.headerContainer}>
                <Text style={styles.moanaluaHeader}>Moanalua High School CTE Department  </Text>

                <Image
                    style={styles.image1}
                    source={require('../assets/favicon.png')}
                />
                <Link href='./BusinessPage'>
                    <Pressable onPress={button1} >
                        <Text style={styles.barText}>| Home |</Text>
                    </Pressable>
                </Link>

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
            </View>

            <View style={styles.imageContainer}>
                <Image
                    style={styles.bottomImage1}
                    source={require('../assets/blackguy-suit.png')}
                />

                <Image
                    style={styles.bottomImage2}
                    source={require('../assets/mechanic.png')}
                />

                <Image
                    style={styles.bottomImage3}
                    source={require('../assets/engineer.png')}
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
        flex: 1,
        alignItems: 'center'
    },

    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bottomImage1: {
        backgroundColor: Colors.chineseViolet,
        borderWidth: 4,
        height: 425,
        width: 300,
    },

    bottomImage2: {
        backgroundColor: Colors.chineseViolet,
        borderWidth: 4,
        height: 425,
        width: 300,
    },

    bottomImage3: {
        backgroundColor: Colors.chineseViolet,
        borderWidth: 4,
        height: 425,
        width: 300,
    },



})

export default NomePage;