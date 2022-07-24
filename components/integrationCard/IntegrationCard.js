import React, { useState, useEffect, createRef } from "react";
import styles from "./IntegrationCard.module.css";

export default function IntegrationCard({ cardInfo }) {
 
  return (
    <div className={styles["card-container"]} style={{background: `url(${cardInfo.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
      <div className={styles["overlay"]}>
        <div className={styles["head"]}>
          <span style={{color: 'white'}}>{cardInfo.title}</span>
        </div>
    </div>
    </div>
  );
}
