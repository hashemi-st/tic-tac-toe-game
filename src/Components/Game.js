import React, {useState} from 'react';
import Square from "./Square";
import start from '../img/smile.png';
import Winner from "./Winner";
import Tied from "./Tied";

const Game = () => {
    const [state, setState] = useState({
        currentPlayer: 'CIRCLE',
        positions: [
            null, null, null,
            null, null, null,
            null, null, null,
        ],
    })
    const tie = state.positions.filter(p => p === null)
    const detectWinner = (position) => {

        const valueLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < valueLines.length; i++) {
            const [a, b, c] = valueLines[i];
            if (position[a] && position[a] === position[b] && position[a] === position[c]) {
                return position[a];
            }
        }
    }

    const handleTakeTurn = (position) => {
        let updatedPositions = [...state.positions]
        if (winner || updatedPositions[position]) return;
        updatedPositions[position] = state.currentPlayer;
        setState({
            ...state,
            positions: updatedPositions,
            currentPlayer: state.currentPlayer === 'CIRCLE' ? 'CROSS' : 'CIRCLE'
        })

    }
    const winner = !!detectWinner(state.positions) ? detectWinner(state.positions) : null;

    function handleReset() {
        setState({
            currentPlayer: 'CIRCLE',
            positions: [
                null, null, null,
                null, null, null,
                null, null, null,
            ],
        })
    }

    return (
        <>
            <div style={{opacity: winner ? '0' : 1}}>
                <h1 className="title"><img src={start} alt="tic tac toe"/>Play & Enjoy</h1>
                <div className="grid">
                    {state.positions.map((pos, i) => {
                        return (
                            <Square value={pos} position={i} takeTurn={handleTakeTurn} key={i}/>
                        )
                    })}
                </div>
                <div style={{display: 'flex', justifyContent: "center", alignItems: "center",}}>

                    <div className="turn" style={{display: !winner && tie.length === 0 ? 'none' : 'flex'}}>
                        <h3>بازیکن</h3>
                        <h2 style={{color: state.currentPlayer === 'CROSS' ? 'RGB(4, 148, 148)' : 'rgb(236, 176, 64)'}}>{state.currentPlayer === 'CIRCLE' ? 'اول "o"' : 'دوم "X"'}</h2>
                        <h3>نوبت توئه :)</h3></div>
                </div>
            </div>
            {winner && <><Winner winner={winner} resetGame={handleReset}/></>}
            {!winner && tie.length === 0 && <><Tied resetGame={handleReset}/></>}
        </>
    )
}
export default Game;