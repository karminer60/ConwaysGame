import React from "react";

export default function Square({ details }) {
    if (!details) {
      return <h3>Working fetching your squarew&apos;s details...</h3>;
    }
  
    return (
      
        <div className="square">
          {
            <div>
              <h2>{details.square}</h2>
              <img src={details.image} alt="square image" />
              <p>Detail: {details.detail}</p>
            </div>
          }
        </div>
      
    );
  }
  