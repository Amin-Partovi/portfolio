import React from "react";

import ProfileSvg from "./profileSvg";

import styles from "./profile.module.css";

const Profile: React.FC = () => {
  return (
    <div className={styles["profile-container"]}>
      <div className={styles.border} />
      <div className={styles.background}>
        <ProfileSvg />
      </div>
    </div>
  );
};

export default Profile;
