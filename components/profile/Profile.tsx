import React from "react";
import { motion } from "framer-motion";

import ProfileSvg from "./profileSvg";

import styles from "./profile.module.css";
import useView from "@/utils/useView";

const Profile: React.FC = () => {
  const { state } = useView();
  const style =
    state?.isVisible && state.visibleNode?.target.id === "about-me"
      ? null
      : { position: "static", transform: "translate(0, 0)" };

  return (
    <motion.div className={styles["profile-container"]} style={style}>
      <div className={styles.border} />
      <div className={styles.background}>
        <ProfileSvg />
      </div>
    </motion.div>
  );
};

export default Profile;
