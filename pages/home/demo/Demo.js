import React from "react";
import styles from "./Demo.module.css";

export default function Demo() {
  return (
    <div className="container" id="demo">
      <div>
          <h1 className={styles['demo-heading']}>Watch Quickstart Demo</h1>
          <p style={{lineHeight: 1.5}} className={styles['demo-sub-heading']}>This quickstart demo covers the features and essential parts of Outerbridge</p>
          <iframe
            width="100%"
            height="430"
            src="https://www.youtube.com/embed/x-AfrkKvZ4M"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>
    </div>
  );
}
