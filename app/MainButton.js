import { StyleSheet, Pressable, View, Text } from 'react-native';

export default function MainButton(props) {
    return (
        <Pressable onPress={props.onPress} style={styles.button}>
            <Text style={styles.text}>{props.text}</Text>
        </Pressable>
    );
}