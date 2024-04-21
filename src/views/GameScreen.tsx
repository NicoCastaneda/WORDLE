import { View, Text, TextInput, Button } from 'react-native';
import React, { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import { GameContext, Random } from '../context/gameContext';
import GameGrid from '../components/GameGrid';
import VirtualKeyboard from '../components/VirtualKeyboard';

export default function GameScreen() {
    const {selectedWord} = useContext(GameContext)
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

    const handleKeyPress = (key: string) => {
        if (key){
            const upperKey = key.toUpperCase()
        }
        if (key === 'ENTER') {
            if (currentWord.length === 5) {
                updateLetterStates(currentWord, targetWord)
                setAttempts([...attempts, currentWord.toUpperCase()])
                setCurrentWord('')
            } else{
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
        const newStates = {...letterStates}
        const wordUpper = word.toUpperCase()
        const targetWordUpper = targetWord.toUpperCase()

        for (let i =0; i<wordUpper.length; i++){
            const letter = wordUpper[i]
            if (targetWordUpper.includes(letter)){
                if (targetWordUpper[i] === letter){
                    newStates[letter] = 'correct'
                }
                else if (!newStates[letter] || newStates[letter] === 'absent'){
                    newStates[letter] = 'present'
                }
            } else {
                if (!newStates[letter]){
                    newStates[letter] = 'absent'
                }
            }      
        }

        setLetterStates(newStates)
    }


    return(
        <View style={styles.container}>
            <GameGrid currentWord={currentWord} attempts={attempts} targetWord={targetWord}/>
            <VirtualKeyboard onKeyPress={handleKeyPress} letterStates={letterStates}/>
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