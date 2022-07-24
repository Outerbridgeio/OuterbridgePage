import React from "react";
import { feature2 } from "../../../variables";

export default function Feature2() {
  return (
    <div className="container" id="feature2">
      <div className="feature-main-div">
        <div className="feature-text-div">
          <h1 className="feature-heading">{feature2.title} </h1>
          <p style={{lineHeight: 1.5}} className="feature-text-subtitle">{feature2.subTitle}</p>
        </div>
        
        <div className="sep-div"></div>

        <div className="feature-image-div">
          <img alt="Outerbridge Feature2" src={feature2.img}></img>
        </div>
        
      </div>
    </div>
  );
}
