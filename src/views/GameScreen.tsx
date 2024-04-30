import { View, Text, TextInput, Button, Modal } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GameContext, Random, Words } from '../context/gameContext';
import GameGrid from '../components/GameGrid';
import VirtualKeyboard from '../components/VirtualKeyboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import db from '../context/firebaseConfig'
import { collection, addDoc, doc, updateDoc, getDoc, setDoc } from 'firebase/firestore';

export default function GameScreen() {

    const [selectedWord, setSelectedWord] = useState(Words[Random()]);

    const [gameOver, setGameOver] = useState(false);
    const [victory, setVictory] = useState(false);
    const [score, setScore] = useState(5000);
    const [totalGames, setTotalGames] = useState(0);
    const [totalWords, setTotalWords] = useState(0);
    const [totalScore, setTotalScore] = useState(0);
    const [currentWord, setCurrentWord] = useState('')
    const [attempts, setAttempts] = useState([])
    const targetWord = selectedWord
    const initialLetterStates = {
        A: '', B: '', C: '', D: '', E: '',
        F: '', G: '', H: '', I: '', J: '',
        K: '', L: '', M: '', N: '', O: '',
        P: '', Q: '', R: '', S: '', T: '',
        U: '', V: '', W: '', X: '', Y: '', Z: ''
    }

    const [letterStates, setLetterStates] = useState(initialLetterStates)

    useFocusEffect(
        React.useCallback(() => {
            console.log(`palabra: ${selectedWord}`);
        }, [])
    );

    useEffect(() => {
        const fetchInitialStats = async () => {
            try {
                const statsRef = doc(db, 'statistics', 'general');
                const statsSnap = await getDoc(statsRef);
                if (statsSnap.exists()) {
                    const data = statsSnap.data();
                    setTotalGames(data.totalGames);
                    setTotalWords(data.totalWords);
                    setTotalScore(data.totalScore);
                }
            } catch (error) {
                console.error('Error fetching initial stats: ', error);
            }
        };
    
        fetchInitialStats();
    }, []);

    
    const saveDataToFirestore = async (totalGames: number, totalWords: number, totalScore: number) => {
        try {
            // Referencia al documento de estadísticas generales
            const statsRef = doc(db, 'statistics', 'general');
    
            // Obtener el documento actual
            const statsDoc = await getDoc(statsRef);
    
            if (statsDoc.exists()) {
                // Si el documento existe, obtener los datos actuales
                const currentData = statsDoc.data();
    
                // Sumar los nuevos valores a los valores existentes
                const newTotalGames = currentData.totalGames + totalGames;
                const newTotalWords = currentData.totalWords + totalWords;
                const newTotalScore = currentData.totalScore + totalScore;
    
                // Actualizar los datos en Firestore
                await updateDoc(statsRef, {
                    totalGames: newTotalGames,
                    totalWords: newTotalWords,
                    totalScore: newTotalScore,
                });
            } else {
                // Si el documento no existe, crear uno nuevo con los datos proporcionados
                await setDoc(statsRef, {
                    totalGames: totalGames,
                    totalWords: totalWords,
                    totalScore: totalScore,
                });
            }
    
            console.log('Data saved to Firestore successfully!');
        } catch (error) {
            console.error('Error saving data to Firestore: ', error);
        }
    };
    


    const handleKeyPress = async (key: string) => {
        if (key) {
            const upperKey = key.toUpperCase()
        }
        if (key === 'ENTER') {
            if (currentWord.length === 5) {
                updateLetterStates(currentWord, targetWord)
                setAttempts([...attempts, currentWord.toUpperCase()])

                //verificacion de victoria
                if (currentWord.toUpperCase() === targetWord) {
                    // El jugador ha adivinado la palabra, muestra el modal de victoria
                    setGameOver(true);
                    setVictory(true);

                    await saveDataToFirestore(1, 1, score);

                } else if (attempts.length > 0) {
                    // El jugador ha usado un intento, reduce el puntaje
                    setScore(score - 1000);
                    if (attempts.length >= 5) {
                        // El jugador ha usado todos sus intentos, muestra el modal de derrota
                        setGameOver(true);
                        setVictory(false);

                        await saveDataToFirestore(1, 0, 0);
                    }
                }

                setCurrentWord('')
            } else {
                alert('The word must be 5 characters long')
            }
        } else if (key === '←') {
            setCurrentWord(currentWord.slice(0, -1))
        } else {
            if (currentWord.length < 5) {
                setCurrentWord(currentWord + key.toUpperCase())
            }
        }
    }

    const updateLetterStates = (word: string, targetWord: string) => {
        const newStates = { ...letterStates }
        const wordUpper = word.toUpperCase()
        const targetWordUpper = targetWord.toUpperCase()

        for (let i = 0; i < wordUpper.length; i++) {
            const letter = wordUpper[i]
            if (targetWordUpper.includes(letter)) {
                if (targetWordUpper[i] === letter) {
                    newStates[letter] = 'correct'
                }
                else if (!newStates[letter] || newStates[letter] === 'absent') {
                    newStates[letter] = 'present'
                }
            } else {
                if (!newStates[letter]) {
                    newStates[letter] = 'absent'
                }
            }
        }

        setLetterStates(newStates)
    }

    const handlePlayAgain = () => {
        setCurrentWord('');
        setAttempts([]);
        setGameOver(false);
        setVictory(false);
        setLetterStates(initialLetterStates);
        setScore(5000);
        const newTargetWord = Words[Random()];
        setSelectedWord(newTargetWord);
        console.log(newTargetWord);
    };

    return (
        <View style={styles.container}>
            <GameGrid currentWord={currentWord} attempts={attempts} targetWord={targetWord} />
            <VirtualKeyboard onKeyPress={handleKeyPress} letterStates={letterStates} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={gameOver}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalTitle}>
                            {victory ? '¡Victoria!' : 'Derrota'}
                        </Text>
                        <Text style={styles.modalText}>
                            {victory ? 'Has adivinado la palabra!' : 'No has adivinado la palabra.'}
                        </Text>
                        <Text style={styles.modalText}>
                            La palabra era "{selectedWord}"
                        </Text>
                        <Text style={styles.modalText}>
                            Puntuación obtenida: {score}
                        </Text>
                        <Button title="Jugar de nuevo" onPress={handlePlayAgain} />
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    modalTitle: {
        fontSize: 20,
        marginBottom: 15,
        textAlign: "center"
    },
    modalText: {
        fontSize: 16,
        marginBottom: 15,
        textAlign: "center"
    }
})