import Image from "next/image";
import React from "react";

import styles from "./sample-work.module.css";

interface Props {
  title: string;
  src: string;
  description: string;
}

const SampleWork: React.FC<Props> = ({ title, src, description }) => {
  return (
    <div className={styles.box}>
      <Image src={src} alt={title} width={120} height={120} />
      <p>{description}</p>
    </div>
  );
};

export default SampleWork;
