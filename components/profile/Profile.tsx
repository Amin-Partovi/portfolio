import React, { useMemo } from "react";
import { motion } from "framer-motion";

import Photo from "public/myPhoto.svg";
import useView from "@/utils/useView";

import styles from "./profile.module.css";
import useResponsive from "@/utils/useResponsive";
import viewportTypes from "@/styles/viewportTypes";
import Image from "next/image";

const smallViewPosition = {
  position: "static",
  transform: "translate(0, 0)",
};

const absolutePosition = {
  position: "absolute",
  left: "100%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

const staticPosition = {
  top: "30%",
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
          // @ts-ignore
          initial={largeView ? initialStyle : smallViewPosition}
          // @ts-ignore
          animate={largeView ? finalStyle : smallViewPosition}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className={styles.border} />
          <div className={styles.background}>
            <Image
              src={Photo}
              width={250}
              alt="Amin Partovi profile photo"
              priority
            />
          </div>
        </motion.div>
      ) : null}
    </>
  );
};

export default Profile;
