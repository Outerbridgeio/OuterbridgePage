import React from "react";
import { feature1 } from "../../../variables";

export default function Feature1() {
  return (
    <div className="container" id="feature1">
      <div className="feature-main-div">
        <div className="feature-image-div">
          <img alt="Outerbridge Feature1" src={feature1.img}></img>
        </div>
        <div className="sep-div"></div>
        <div className="feature-text-div">
          <h1 className="feature-heading">{feature1.title} </h1>
          <p style={{lineHeight: 1.5}} className="feature-text-subtitle">{feature1.subTitle}</p>
        </div>
      </div>
    </div>
  );
}
