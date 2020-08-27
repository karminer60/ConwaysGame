import React, {useState, useEffect} from "react";
import Square from "./square.js";

const numRows = 50;
const numCols = 50;

export default function Grid() {
    const [grid, setGrid] = useState(() => {
        const rows = [];
        for(let i = 0; i < numRows; i++){
            rows.push(Array.from(Array(numCols), () => 0));
        }
        return rows;
    });

    const [text, setText] = useState('');
    
    const [width, setWidth] = useState(25)
    const [height, setHeight] = useState(25)
    
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

    function gridFromText(string){
        //take string and then transform it into a new array of arrays- replace the old array of arrays
        //need to make it wider than is in text to match width and height
        for(let i = 0; i < string; i++){
            setWidth(25)
            setHeight(25)
            if(string[i] == 'O'){
                string[i] = 1    
            }   
            else{
                string[i] = 0

            }
        }

    }
    const handleClick = event => {
        event.preventDefault()
        setText(event.target.value)
        
    }

    const handleChange = evt => {
        evt.preventDefault()
        setGrid(gridFromText(text))
        
    }
    return (
        <>
        <div>
            <textarea
            name='gridFormText'
            type='text'
            handleChange={handleChange}
            />    
            <button onClick={handleClick}/> 

                       
        </div>   
                
     
        
        
        <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${numCols}, 25px)`
        }}>
            {grid.map((rows, i) =>
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
        </>
        
    );
}


