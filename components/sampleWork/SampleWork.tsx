import Image from "next/image";
import React, { useState } from "react";
import { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import styles from "./sample-work.module.css";

interface Props {
  title: string;
  src: StaticImageData;
  description: string;
  stack: string[];
}

const spreadOnTheContainer = {
  fill: true,
  objectFit: "cover",
  style: {
    filter: "grayScale(70%)",
  },
};

const fixedSize = {
  width: 120,
  height: 120,
};

const SampleWork: React.FC<Props> = ({ title, src, description, stack }) => {
  const [imageStyle, setImageStyle] = useState<any>(fixedSize);
  const [showStack, setShowStack] = useState<boolean>(false);

  function handleMouseOver() {
    setImageStyle(spreadOnTheContainer);
    setShowStack(true);
  }
  function handleMouseLeave() {
    setImageStyle(fixedSize);
    setShowStack(false);
  }

  return (
    <div className={styles.container}>
      <motion.div
        className={styles.box}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={src}
          alt={title}
          {...imageStyle}
          className={styles["sample-work-photo"]}
        />

        <div className={styles.content}>
          <h2>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        {showStack && (
          <div className={styles.stack}>
            {stack.map((tech) => (
              <p key={tech} className={styles.tech}>
                {tech}
              </p>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SampleWork;
