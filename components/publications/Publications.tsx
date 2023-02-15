import texts from "@/texts/texts";
import React from "react";

import styles from "./publications.module.css";

const Publications: React.FC = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{texts.PUBLICATIONS}</h1>
      <div className={styles.grid}></div>
    </section>
  );
};

export default Publications;
