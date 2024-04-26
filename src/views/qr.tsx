import { BarCodeScanningResult, Camera, CameraType } from 'expo-camera';
import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Button, StyleSheet } from 'react-native';

export default function Qr() {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(CameraType.back);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }: BarCodeScanningResult) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}>
                <View style={styles.buttonContainer}>

                    <TouchableOpacity style={styles.button} onPress={() => setType(
                        type === CameraType.back
                            ? CameraType.front
                            : CameraType.back
                    )}>
                        <Text style={styles.text}>Cambiar Cámara</Text>
                    </TouchableOpacity>

                    <View style={styles.row}>
                        <Text style={styles.corner}>┌</Text>
                        <Text style={styles.corner}>┐</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.corner}>└</Text>
                        <Text style={styles.corner}>┘</Text>
                    </View>


                    {scanned && <Button title={'escanear de nuevo'} onPress={() => setScanned(false)} />}

                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    button: {
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    corner: {
        flexDirection: 'row',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 80,
        padding: 100,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    }
});