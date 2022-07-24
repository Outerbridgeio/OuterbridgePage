import React from "react";
import "./Feature4.css";
import { feature4 } from "../../../variables";

export default function Feature2() {
  return (
    <div className="container" id="feature2">
      <div className="feature-main-div">
        <div className="feature-text-div">
          <h1 className="feature-heading">{feature4.title} </h1>
          <p style={{lineHeight: 1.5}} className="feature-text-subtitle">{feature4.subTitle}</p>
        </div>
        
        <div className="sep-div"></div>

        <div className="feature-image-div">
          <img alt="Outerbridge Feature4" src={feature4.img}></img>
        </div>
        
      </div>
    </div>
  );
}
