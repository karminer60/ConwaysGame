import React from "react";

export default function Square({ details }) {
    if (!details) {
      return <h3>Working fetching your user&apos;s details...</h3>;
    }
  
    return (
      
        <div className="square">
          {
            <div>
              <h2>{details.square}</h2>
              <img src={details.image} alt="product for sale" />
              <p>Price: {details.price}</p>
            </div>
          }
        </div>
      
    );
  }
  