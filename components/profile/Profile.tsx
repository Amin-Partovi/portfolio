import React, { useMemo } from "react";
import { motion } from "framer-motion";

import ProfileSvg from "./profileSvg";
import useView from "@/utils/useView";

import styles from "./profile.module.css";
import useResponsive from "@/utils/useResponsive";
import viewportTypes from "@/styles/viewPortTypes";

const smallViewPosition = {
  position: "static",
  transform: "translate(0, 0)",
};

const absolutePosition = {
  position: "absolute",
  left: "100%",
  top: "0%",
  transform: "translate(-50%, 50%)",
};

const staticPosition = {
  top: "-15%",
  left: "50%",
};

const Profile: React.FC = () => {
  const { state } = useView();
  const { isVisible, visibleNode } = state;
  const viewportType = useResponsive();
  const largeView = viewportType === viewportTypes.LARGE;

  const finalStyle = useMemo(
    () =>
      isVisible || visibleNode === undefined
        ? absolutePosition
        : staticPosition,
    [isVisible]
  );

  const initialStyle = useMemo(
    () => (isVisible ? staticPosition : absolutePosition),
    [isVisible]
  );
  return (
    <>
      {viewportType ? (
        <motion.div
          className={styles["profile-container"]}
          initial={largeView ? initialStyle : smallViewPosition}
          animate={largeView ? finalStyle : smallViewPosition}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className={styles.border} />
          <div className={styles.background}>
            <ProfileSvg />
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default Profile;
