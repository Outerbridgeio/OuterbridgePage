import React from "react";
import "./Feature3.css";
import { feature3 } from "../../../variables";

export default function Feature1() {
  return (
    <div className="container" id="feature1">
      <div className="feature-main-div">
        <div className="feature-image-div">
          <img alt="Outerbridge Feature3" src={feature3.img}></img>
        </div>
        <div className="sep-div"></div>
        <div className="feature-text-div">
          <h1 className="feature-heading">{feature3.title} </h1>
          <p style={{lineHeight: 1.5}} className="feature-text-subtitle">{feature3.subTitle}</p>
        </div>
      </div>
    </div>
  );
}
