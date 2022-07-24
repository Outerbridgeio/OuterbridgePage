import React, { useState, useEffect, createRef } from "react";
import "./IntegrationCard.css";

export default function IntegrationCard({ cardInfo }) {
 
  return (
    <div className ="card-container" style={{background: `url(${cardInfo.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      <div className ="overlay">
        <div className = "items head">
          <span style={{color: 'white'}}>{cardInfo.title}</span>
          <p style={{color: 'white', fontSize: 16, marginTop: 10}}>{cardInfo.desc}</p>
        </div>
    </div>
    </div>
  );
}
