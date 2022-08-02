import React from "react";
import { feature5 } from "../../../variables";

export default function Feature5() {
  return (
    <div className="container" id="feature1">
      <div className="feature-main-div">
        <div className="feature-image-div">
          <img alt="Outerbridge Feature5" src={feature5.img}></img>
        </div>
        <div className="sep-div"></div>
        <div className="feature-text-div">
          <h1 className="feature-heading">{feature5.title} </h1>
          <p style={{lineHeight: 1.5}} className="feature-text-subtitle">{feature5.subTitle}</p>
        </div>
      </div>
    </div>
  );
}
