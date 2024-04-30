import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import db from '../context/firebaseConfig';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';

export default function SettingsScreen() {

  const [totalScore, setTotalScore] = useState(0);
  const [totalGames, setTotalGames] = useState(0);
  const [totalWords, setTotalWords] = useState(0);

  useEffect(() => {
    const unsubscribe = onSnapshot(doc(db, 'statistics', 'general'), (doc) => {
      if (doc.exists()) {
        const data = doc.data();
        setTotalScore(data.totalScore || 0);
        setTotalGames(data.totalGames || 0);
        setTotalWords(data.totalWords || 0);
      } else {
        console.log('No existe el documento de estadísticas generales en Firestore.');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Estadísticas</Text>
      <View style={styles.card}>
        <Image source={require('../../assets/image.png')} style={styles.image} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Total de juegos</Text>
          <Text style={styles.cardValue}>{totalGames}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={require('../../assets/adivinados.png')} style={styles.image} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Palabras adivinadas</Text>
          <Text style={styles.cardValue}>{totalWords}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={require('../../assets/puntaje.png')} style={styles.image} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Total de puntos</Text>
          <Text style={styles.cardValue}>{totalScore}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Image source={require('../../assets/promedio.png')} style={styles.image} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>Promedio de puntos</Text>
          <Text style={styles.cardValue}>{totalGames > 0 ? (totalScore / totalGames).toFixed(2) : 0}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingVertical: 30,
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 30,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 10,
    backgroundColor: '#D8F7DE',
    padding: 20,
    borderRadius: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  cardInfo: {
    flex: 1,
    paddingHorizontal: 10,
  },
  cardTitle: {
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardValue: {
    marginTop: 10,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
  }
});
