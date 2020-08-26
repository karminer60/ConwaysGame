import React, {useState, useEffect} from "react";

export default function Grid() {
    const [square, setSquare] = useState(initialSquare)
    return(

        <div className="squares">
          {squares.map((square) => {
            return <Product key={square.id} details={square} />;
          })}
        </div>
    )    
}