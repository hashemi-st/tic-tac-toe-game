import React from 'react';

import Cross from "./Cross";
import Circle from "./Circle";

const Square = ({value, position, takeTurn}) => {
    return(
        <div className="square"  onClick={() => takeTurn(position)}>
            {value === 'CIRCLE' && <Circle /> }
            {value === 'CROSS' && <Cross /> }
            {value === 'EMPTY' && 'EMPTY' }
        </div>
    )
}
export default Square;