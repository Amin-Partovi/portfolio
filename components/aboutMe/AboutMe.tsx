import React from "react";
import { motion } from "framer-motion";

import texts from "@/texts/texts";
import useView from "@/utils/useView";

import styles from "./about-me.module.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 1,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const AboutMe: React.FC = () => {
  const { ref } = useView();

  return (
    <motion.section
      className={styles.container}
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.h2 ref={ref} id="about-me" variants={item}>
        {texts.ABOUT_ME_TITLE}
      </motion.h2>
      <motion.p variants={item} className={styles["about-me"]}>
        {texts.ABOUT_ME}
      </motion.p>
    </motion.section>
  );
};

export default AboutMe;
