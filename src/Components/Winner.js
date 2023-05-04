import React from "react";
import congrate from '../img/Congratulation-Love-gif.gif';

const Winner = ({ winner, resetGame }) => {
    const player = winner === 'CIRCLE' ? 'اول' : 'دوم'
    return (
        <div className="wrapper">
            <div className="text">
                <img src={congrate} className="width25" />
                <span>بازیکن   {player} برنده شد!</span>
                <button className="btn " onClick={resetGame}>دوباره بازی کن!</button>
            </div>
        </div>
    )
}
export default Winner;