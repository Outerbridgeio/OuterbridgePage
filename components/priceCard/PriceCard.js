import React, { useState, useEffect, createRef } from "react";
import color from "../../assets/color"

export default function PriceCard({ cardInfo }) {
 
  return (
    <div className ="card">
        <div className ="card-body">
            <div className ="card-title">{cardInfo.title}</div>
            <div className ="price"><span className ="currency">$</span><span className ="value">{cardInfo.price}</span></div>
            <div className ="frequency">{cardInfo.subtitle}</div>
            <div className ="divider"></div>
            <ul className ="list-unstyled li-space-lg">

                {cardInfo.bulletpoints.map((card, index) => {
                  return (
                    <li key={index} className ="media">
                        {card.available === "true" ?
                          <i className ="fas fa-check"></i>
                          :
                        card.available === "&infin;" ?
                          <span style={{fontSize: 30, color: color.primary, fontWeight: 700}}>&infin;</span>
                          :
                          <span style={{ color: color.primary, fontWeight: 700}}>{card.available}</span>
                        }
                        <div style={{color: "rgb(32, 32, 32)"}} className ="media-body">{card.title}</div>
                    </li>
                  );
                })}
               
            </ul>
            <div className ="button-wrapper">
                <a className ="btn-solid-reg page-scroll" href="#letsdothis">I'm Interested!</a>
            </div>
        </div>
    </div>
  );
}
