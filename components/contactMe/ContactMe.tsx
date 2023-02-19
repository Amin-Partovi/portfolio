import { useMemo } from "react";
import { motion } from "framer-motion";

import texts from "@/texts/texts";
import styles from "./contact-me.module.css";
import SocialMedia from "./SocialMedia";
import Profile from "../profile/Profile";
import useView from "@/utils/useView";
import useResponsive from "@/utils/useResponsive";
import viewportTypes from "@/styles/viewPortTypes";

const withMargin = { marginTop: "250px" };
const withOutMargin = { marginTop: "0" };

const ContactMe = () => {
  const { state } = useView();
  const { isVisible, visibleNode } = state;
  const viewportType = useResponsive();
  const largeView = viewportType === viewportTypes.LARGE;

  const contentInitialStyle = useMemo(
    () => (isVisible ? withMargin : withOutMargin),
    [isVisible]
  );

  const contentFinalStyle = useMemo(
    () => (isVisible || visibleNode === undefined ? withOutMargin : withMargin),
    [isVisible]
  );

  return (
    <div className={styles.container}>
      <Profile />
      <motion.div
        initial={largeView ? contentInitialStyle : withOutMargin}
        animate={largeView ? contentFinalStyle : withOutMargin}
      >
        <h1 className={styles.name}>{texts.NAME}</h1>
        <h3 className={styles.headline}>{texts.HEADLINE}</h3>
        <SocialMedia />
      </motion.div>
    </div>
  );
};

export default ContactMe;
