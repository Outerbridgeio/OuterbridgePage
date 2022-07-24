import React, { useState, useEffect, createRef } from "react";
import styles from "./WhyUsCard.module.css";

export default function WhyUsCard({ cardInfo }) {
 
  return (
    <div className={styles["whyus-card"]}>
      <div className={styles["whyus-img-div"]}>
        <img className={styles["whyus-img"]} src={cardInfo.img} alt={cardInfo.title}/>
      </div>
      <div className={styles["whyus-text-details"]}>
        <h5 className={styles["whyus-text-title"]}>{cardInfo.title}</h5>
        <p style={{lineHeight: 1.5, marginTop: 20}} className={styles["whyus-text-desc"]}>{cardInfo.desc}</p>
      </div>
    </div>
  );
}
