import React, {useState, useEffect} from "react";
import Square from "./square.js";

const numRows = 50;
const numCols = 50;

export default function Grid() {
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for(let i =0; i < numRows; i++){
            rows.push(Array.from(Array(numCols), () => 0));
        }
        return rows;
    });
    
    //toggleOnOff = button => {
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
       
    //console.log(grid);

    return (
        <div>{grid.map((rows, i) =>
            rows.map((col, k) => (
                <div 
                key={`${i}-${k}`}
                style={{
                    width:25, 
                    height: 25,
                    backgroundColor: grid[i][k] ? 'pink' : undefined,
                    border: 'solid 1px black'
            }} />
            ))
        )}
        </div>
    );
}