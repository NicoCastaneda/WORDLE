import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/image.png')} 
                style={styles.image}
            />
            <Text style={styles.subtitle}>¡Encuentra la palabra secreta!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: -150,
        marginBottom: 100,
    },
    subtitle: {
        fontSize: 25,
        color: 'green',
    },
});