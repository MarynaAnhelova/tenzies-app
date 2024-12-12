import React from 'react';
import {useState} from "react";
import './index.css';
import Die from "./Die"



export default function App() {
    const [dice, setDice] = useState(generateAllNewDice())

    function generateAllNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            const rand = Math.ceil(Math.random() * 6)
            newDice.push(rand)
        }
        return newDice
    }

    function rollDice() {
        setDice(generateAllNewDice())
    }

    const diceElements = dice.map(num => <Die value={num} />)

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>Roll</button>
        </main>
    )
}
