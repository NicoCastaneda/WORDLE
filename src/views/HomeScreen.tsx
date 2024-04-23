import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/image.png')} 
                style={styles.image}
            />
            <Text style={styles.title}>¡Bienvenido a WORDLE!</Text>
            <Text style={styles.subtitle}>Encuentra la palabra secreta</Text>

            <Text style={styles.howToPlay}>
                <Text style={styles.htpTitle}>¿Cómo Jugar?</Text>{'\n\n'}
                - Toque las letras para formar palabras.{'\n'}
                - Una vez que haya formado una palabra, toque el botón de "ENTER".{'\n'}
                - Las letras correctas se mostrarán en verde, 
                las letras que esten contenidas en la palabra pero que no esten en su posición correcta se mostrarán en amarillo
                y las letras incorrectas se mostrarán en gris.{'\n'}
                - Si adivinas la palabra correcta, ganas puntos. {'\n'}
                - Entre menos intentos hagas, más puntos ganarás.{'\n'}
                - ¡Buena suerte!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
        marginTop: -50,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 25,
        color: 'green',
        marginBottom: 20,
    },
    htpTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    howToPlay: {
        fontSize: 18,
        textAlign: 'left',
    },
});
