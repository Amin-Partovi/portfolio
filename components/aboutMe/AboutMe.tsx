import texts from "@/texts/texts";
import useView from "@/utils/useView";
import React from "react";

import styles from "./about-me.module.css";

const AboutMe: React.FC = () => {
  const { ref } = useView();

  return (
    <section className={styles.container}>
      <h2 ref={ref} id="about-me">
        {texts.ABOUT_ME_TITLE}
      </h2>
      <p className={styles["about-me"]}>{texts.ABOUT_ME}</p>
    </section>
  );
};

export default AboutMe;
