import { TouchableOpacity, View, Text, StyleSheet } from "react-native"

const VirtualKeyboard = ({ onKeyPress, letterStates }) => {
    const rows = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['←', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'],
    ]

    const getKeyStyle = (key: string) => {
        const state = letterStates[key]
        if (state === 'correct') return styles.correctKey
        if (state === 'present') return styles.presentKey
        if (state === 'absent') return styles.absentKey
        return {};
    }

    return (
        <View style={styles.keyboard}>
            {rows.map((row, rowIndex) => (
                <View key={`row-${rowIndex}`} style={styles.row}>
                    {row.map((key) => (
                        <TouchableOpacity
                            key={key}
                            style={[styles.key, key.length > 1 ? styles.specialKey : {}, getKeyStyle(key)]}
                            onPress={() => onKeyPress(key)}>
                            <Text style={styles.keyText}>{key}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ))}
        </View>
    )
}

export default VirtualKeyboard

const styles = StyleSheet.create({

    keyboard: {
        marginTop: 50,
        marginBottom: -50,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    key: {
        width: 30,
        height: 45,
        margin: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
    },
    specialKey: {
        width: 70,
    },
    keyText: {
        fontSize: 20,
    },
    correctKey: {
        backgroundColor: '#9bd498',
    },
    presentKey: {
        backgroundColor: '#ffe599',
    },
    absentKey: {
        backgroundColor: '#929292',
    },
})
