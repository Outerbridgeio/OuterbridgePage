import React, { useState, useEffect, createRef } from "react";
import "./WhyUsCard.css";

export default function WhyUsCard({ cardInfo }) {
 
  return (
    <div className="whyus-card">
      <div className="whyus-img-div">
        <img className="whyus-img" src={cardInfo.img} alt={cardInfo.title}/>
      </div>
      <div className="whyus-text-details">
        <h5 className="whyus-text-title">{cardInfo.title}</h5>
        <p style={{lineHeight: 1.5, marginTop: 20}} className="whyus-text-desc">{cardInfo.desc}</p>
      </div>
    </div>
  );
}
