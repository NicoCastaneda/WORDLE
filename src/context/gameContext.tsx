import { createContext, useState } from "react";
import { IndexType } from "typescript";

interface ContextProps {
    selectedWord: string;
}

export const GameContext = createContext({} as ContextProps);

export const GameProvider = ({ children }) => {


    console.log(Random)
    const [selectedWord, setSelectedWord] = useState(Words[Random()]);

    return (
        <GameContext.Provider
        value={{
            selectedWord
        }}
    >
        {children}
    </GameContext.Provider>
    );
};

export const Random = () => {
   
    const random = Math.floor(Math.random() * (Words.length + 1));
    return random
}

export const Words = [
    "PERRO", "MIEDO", "CINCO", "BURRO", "PAPEL", "LAPIZ", 
    "SILLA", "CABLE", "COCHE", "CIRCO", "ARROZ", "PISTA", 
    "RETAR", "RADIO", "PILAR", "BUENO", "SABER", "CABRA",
    "COFRE", "LUGAR", "HIELO", "CORTE", "CLAVO", "ACERO",
    "VIDEO", "ZURDO", "CRUCE", "TINTO", "MIRLA", "BANCO",
    "ARDER", "HONDA", "FICHA", "TORTA", "MATON", "GENIO",
    "DARDO", "MAZDA", "COJIN", "SALIR", "FOTON", "FAVOR",
    "VERDE", "RODAR", "SONSO", "RAYON", "CIELO", "RATON",
  ];
  