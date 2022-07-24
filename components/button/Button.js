import React from "react";
import styles from "./Button.module.css";

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a className={styles["main-button"]} href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
