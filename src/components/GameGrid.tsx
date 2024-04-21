import { View, StyleSheet, Text } from "react-native"

const GameGrid = ({currentWord, attempts, targetWord}) => {
    const rows=6
    const columns=5

    const getLetterColors = (attempt: string, targetWord: string) =>{
        let result = new Array(attempt.length).fill('#929292')
        let targetWordCopy = targetWord.toUpperCase().split('')

        for (let i=0; i<attempt.length; i++){
            if (attempt[i] === targetWordCopy[i]){
                result[i] = '#9bd498'
                targetWordCopy[i] = null
            }
        }

        for (let i=0; i<attempt.length; i++){
            if (result[i] !== '#9bd498' && targetWordCopy.includes(attempt[i])){
                result[i] = '#ffe599'
                targetWordCopy[targetWordCopy.indexOf(attempt[i])] = null
            }
        }

        return result
    }

    return(
        <View style={styles.grid}>
            {Array.from({length: rows}, (_, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                    {Array.from({length: columns}, (_, cellIndex) => {
                        let content = ''
                        let backgroundColor = '#fff'

                        if (rowIndex < attempts.length){
                            content = attempts[rowIndex][cellIndex] || ''
                            const colors = getLetterColors(attempts[rowIndex], targetWord)
                            backgroundColor = colors[cellIndex] || '#fff'
                        } else if (rowIndex === attempts.length && currentWord){
                            content = currentWord[cellIndex] || ''
                        }

                        return(
                            <View key={cellIndex} style={[styles.cell, {backgroundColor}]}>
                                <Text style={styles.cellText}>
                                    {content.toUpperCase()}
                                </Text>
                            </View>
                        )
                    })}
                </View>     
            ))}
                        
        </View>
    )
}

export default GameGrid

const styles = StyleSheet.create({

    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: -50
    },

    cell: {
        width: 50,
        height: 50,
        margin: 5,
        backgroundColor: 'lightgray',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },

    letter: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    row: {
        flexDirection: 'row'
    },

    cellText: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})
