import texts from "@/texts/texts";
import React from "react";

import styles from "./about-me.module.css";

const AboutMe: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>{texts.ABOUT_ME_TITLE}</h2>
      <p className={styles["about-me"]}>{texts.ABOUT_ME}</p>
    </section>
  );
};

export default AboutMe;
