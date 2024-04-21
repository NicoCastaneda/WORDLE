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

const Words = ["perro", "miedo", "cinco", "burro", "papel", "lapiz", "silla", "cable"]