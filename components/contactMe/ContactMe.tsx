import React from "react";

import texts from "@/texts/texts";
import styles from "./contact-me.module.css";
import SocialMedia from "./SocialMedia";

const ContactMe = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{texts.NAME}</h1>
      <h3 className={styles.headline}>{texts.HEADLINE}</h3>
      <SocialMedia />
    </div>
  );
};

export default ContactMe;