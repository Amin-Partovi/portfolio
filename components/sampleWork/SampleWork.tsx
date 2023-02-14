import Image from "next/image";
import React from "react";
import { StaticImageData } from "next/image";

import styles from "./sample-work.module.css";

interface Props {
  title: string;
  src: StaticImageData;
  description: string;
}

const SampleWork: React.FC<Props> = ({ title, src, description }) => {
  return (
    <div className={styles.box}>
      <Image
        src={src}
        alt={title}
        width={120}
        height={120}
        className={styles["sample-work-photo"]}
      />
      <div className={styles.content}>
        <h2>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default SampleWork;
