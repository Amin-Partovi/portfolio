import React from "react";
import Image from "next/image";

import I from "public/I.png";
import texts from "@/texts/texts";

import styles from "./profile.module.css";

const Profile: React.FC = () => {
  return (
    <div className={styles["profile-container"]}>
      <div className={styles.border} />
      <Image
        className={styles.profile}
        src={I}
        width={200}
        height={200}
        alt={texts.PROFILE}
      />
    </div>
  );
};

export default Profile;
