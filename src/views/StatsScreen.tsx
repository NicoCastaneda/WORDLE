import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import App from '../../App'
import AppNavigator from '../navigation/AppNavigator'

export default function SettingsScreen() {       /*stats sera una pantalla de estadisticas y puntaje. debera tener el historial con async storage de la cantidad de veces que se ha jugado y la cantidad de veces que se ha ganado en el juego */

  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})