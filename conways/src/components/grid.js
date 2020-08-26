import React, {useState, useEffect} from "react";

const numRows = 50;
const numCols = 50;

export default function Grid() {
    const [square, setSquare] = useState(initialSquare)
        const rows = [];
        for(let i =0; i < numRows; i++){
            rows.push(Array, from(Array(numCols), () => 0));
        }
    toggleOnOff = button => {
        // need to create a toggle to turn it off and on
        
        //this.setState({
            //OnOff: this.state.OnOff.map(item => {
            //if (item.id === itemId) {
              //return {
                //...item,
                //completed: !item.completed
              //};
            //} else {
              //return item;
            //}
          //})
       // });
      };

    return(

        <div className="squares">
          {squares.map((square) => {
            return <Square key={square.id} details={square} />;
          })}
        </div>
    )    
}