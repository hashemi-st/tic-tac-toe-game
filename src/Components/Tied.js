import React from "react";
import sad from '../img/sad.png'
function Tied({resetGame}) {
    return (
        <div className="wrapper-tied">
            <h1 className="tied"> بازی بدون برنده تمام شد! <img src={sad} width="40px" height="40px" /></h1>
            <button className="btn " onClick={resetGame}>دوباره بازی کن!</button>
        </div>
)
}
export default Tied